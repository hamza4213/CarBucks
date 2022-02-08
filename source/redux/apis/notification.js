import CarBucksAxios from '../../utils/carBucksAxios';

export default class NotificationApi {
  fetchNotifications = () => {
    return CarBucksAxios({
      method: 'GET',
      url: `notifications`,
    });
  };
}
