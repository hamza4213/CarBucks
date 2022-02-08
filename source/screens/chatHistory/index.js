import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Share, FlatList, } from 'react-native';
import Header from '../../common/components/header';
import profilePicture from '../../assets/pngs/profileImage.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import UserCard from '../../common/components/header/userCard';
import { useDispatch, useSelector } from 'react-redux';
import { getMyRooms } from '../../redux/actions/chat';
import { ChatApi } from '../../redux/apis';
import moment from 'moment';
import NotFound from '../../common/components/notFound';
import { t } from 'i18next';
const chatApi = new ChatApi();

const dummyData = Array(10).fill("").map((_, i) => ({
  roomId: Math.random(),
  image: profilePicture,
  userName: "JOhn " + i,
  msgText: "Hope it goes well",
  msgTime: moment().fromNow(),
}))

export default function ChatHistoy() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user } = useSelector(({ auth }) => auth);
  const { rooms } = useSelector(({ chat }) => chat);
  const [chats, setChats] = useState([]);
  const { id } = user;

  useEffect(() => {
    dispatch(getMyRooms());
  }, []);

  useEffect(() => {
    let newChats = [];

    if (rooms && rooms.length) {
      rooms.map(room => {
        let user = room.users.filter(u => u.id !== id);
        user = user[0];
        newChats.push({
          roomId: room.id,
          image: user.image,
          userName: `${user.firstName} ${user.lastName}`,
          files: room.chat[room.chat.length - 1]?.files || '',
          msgText: room.chat[room.chat.length - 1]?.message || '',
          msgTime:
            moment(room.chat[room.chat.length - 1]?.createdAt).format(
              'D/M/YY',
            ) || '',
        });
      });
    }

    setChats(newChats);
  }, [rooms]);

  const share = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message:
          'Please install this app and stay safe , AppLink :https://wizardly-bardeen-2f1663.netlify.app/',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title={t('inbox')}>
        <UserCard user={user}>
          <TouchableOpacity onPress={share} style={styles.inviteWrapper}>
            <Text style={styles.invite}>Invite Friends</Text>
          </TouchableOpacity>
        </UserCard>
      </Header>



      <FlatList keyExtractor={(item, i) => String(i)}
        data={chats.length ? chats : dummyData}
        style={styles.contentContainer}

        ListEmptyComponent={<NotFound text="No chat available." style={{ marginTop: 40 }} />}
        renderItem={({ item, index }) => {

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate('Chat', {
                  roomId: item?.roomId,
                })
              }>
              <View style={styles.chatWrapper}>
                <Image style={styles.image} source={typeof item?.image === "string" ? { uri: item.image } : item.image} />
                <View style={styles.textWrapper}>
                  <Text style={styles.userName}>{item.userName}</Text>
                  <Text style={styles.msg}>{item.msgText}</Text>
                </View>
                <Text style={styles.time}>{item.msgTime}</Text>
              </View>
            </TouchableOpacity>
          )

        }}
      />


    </View>
  );
}
