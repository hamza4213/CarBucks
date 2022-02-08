import CarBucksAxios from '../../utils/carBucksAxios';

export default class ChatApi {
  fetchMyRooms = () => {
    return CarBucksAxios({
      method: 'GET',
      url: 'chat/myRooms',
    });
  };

  fetchRoomMessages = roomID => {
    return CarBucksAxios({
      method: 'GET',
      url: `chat/roomMessages/${roomID}`,
    });
  };

  fetchRoomId = userID => {
    return CarBucksAxios({
      method: 'GET',
      url: `chat/getRoomId/${userID}`,
    });
  };
}
