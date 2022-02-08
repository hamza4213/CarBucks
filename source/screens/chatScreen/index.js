import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import ChatScreenHeader from '../../common/components/header/chatScreenHeader';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  emptyRoom,
  sendMessage,
  getRoomMessages,
} from '../../redux/actions/chat';
import { socket } from '../../navigation';
import { useRoute } from '@react-navigation/native';
import Files from '../../assets/svgs/files.svg';
import ImagePicker from 'react-native-image-crop-picker';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import {
  TextractClient,
  DetectDocumentTextCommand,
  AnalyzeDocumentCommand,
} from '@aws-sdk/client-textract';
import { client, s3Client } from '../../../App';

export default function ChatScreen() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const {
    params: { roomId },
  } = useRoute();

  const giftedChatRef = useRef();
  const { user } = useSelector(({ auth }) => auth);
  const { messages } = useSelector(({ chat }) => chat);


  useEffect(() => {
    dispatch(getRoomMessages(roomId));

    socket.emit('join', { user, roomId }, res => {
      console.log('Joined: ', res);
    });

    if (giftedChatRef && giftedChatRef?.current) {
      giftedChatRef.current.scrollToBottom();
    }

    () => {
      socket.emit('disconnect');
      dispatch(emptyRoom());
    };
  }, []);

  const sendHandler = message => {
    const text = message.length ? message[0].text : '';

    let msg = {
      _id: parseInt(Math.random() * 10000000000000).toString(),
      text,
      createdAt: new Date(),
      user: {
        name: user?.firstName + ' ' + user?.lastName,
        ...user,
      },
    };

    socket.emit('sendMessage', { message: text }, roomId, res => {
      console.log('text msg in socket.emit', { msg, res });
    });
    dispatch(sendMessage(msg));
  };

  const sendImageHandler = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      let imageName = image.path.split('/').pop();

      let file = {
        type: image.mime,
        name: imageName,
        uri: image.path,
      };

      const options = {
        Key: imageName,
        Bucket: process.env.S3_BUCKET,
        Body: file,
      };

      // setLoading(true);
      await s3Client.send(new PutObjectCommand(options));

      let s3ImageLink = `https://s3.amazonaws.com/cdn.carbucks.com/${imageName}`;
      console.log({ s3ImageLink });

      // const text = message.length ? message[0].text : '';

      let msg = {
        _id: parseInt(Math.random() * 10000000000000).toString(),
        file: [s3ImageLink],
        createdAt: new Date(),
        user: {
          name: user?.firstName + ' ' + user?.lastName,
          ...user,
        },
      };

      socket.emit('sendMessage', { file: s3ImageLink }, roomId, res => {
        console.log('msg in socket.emit', { msg, res });
      });



      dispatch(sendMessage(msg));

      Alert.alert('SUCCESS');

      // setLoading(false);
    } catch (error) {
      // setLoading(false);

      console.log({ sendImageError: error });
      Alert.alert(
        'ERROR',
        error?.message || 'Error occured while sending image.',
      );
    }
  };

  return (
    <View>
      <ChatScreenHeader user={user} >

      </ChatScreenHeader>
      <View style={styles.contentContainer}>
        <GiftedChat
          audio={true}
          inverted={false}
          ref={giftedChatRef}
          renderUsernameOnMessage={true}
          // renderMessageImage
          messages={messages}
          onSend={sendHandler}
          user={{
            _id: user?._id,
          }}
          renderActions={() => (
            <TouchableOpacity
              onPress={sendImageHandler}
              style={{
                marginBottom: 'auto',
                marginTop: 'auto',
                marginLeft: 5,
              }}>
              <Files height={25} width={25} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
