import { notification } from "antd";

class Notification {
  showNotifications = (
    type,
    title = "Please give Notification Title ",
    message = "Please provide message to show --> showNotifications(NotificationType,NotificationTitle, NotificationMessage )"
  ) => {
    notification[type]({
      message: title,
      description: message,
      style: {
        width: 400
      }
    });
  };
}
export default Notification;
