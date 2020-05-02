import PushNotificationIOS from '@react-native-community/push-notification-ios';

export const askNotificationPermissions = async () => {
  let isPermitted = null;
  PushNotificationIOS.checkPermissions(async permissions => {
    isPermitted = Object.values(permissions).includes(true);

    if (!isPermitted) {
      await PushNotificationIOS.requestPermissions();
    }
  });
};

export const scheduleNotifications = async () => {
  PushNotificationIOS.cancelAllLocalNotifications();

  const now = new Date();
  const nextNotification = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    20,
    0,
    0,
  );

  PushNotificationIOS.scheduleLocalNotification({
    fireDate: nextNotification.toISOString(),
    alertTitle: 'Lets practice flashcards today?',
    alertBody: 'You still did not practice any deck today',
    repeatInterval: 'day',
  });
};
