interface INotificationEmail {
  sentEmail(message: string): void;
}

interface INotificationWhatsApp {
  sentWhatsApp(message: string): void;
}

class NotificationCustomer
  implements INotificationEmail, INotificationWhatsApp
{
  sentWhatsApp(message: string): void {
    console.log("whatsapp: message send");
  }
  sentEmail(message: string): void {
    console.log("email: message send");
  }
}

class NotificationPlanner implements INotificationEmail {
  sentEmail(message: string): void {
    console.log("email: message send");
  }
}

const notificationCustomer = new NotificationCustomer();
const notificationPlanner = new NotificationPlanner();

notificationCustomer.sentEmail("Hola");
notificationCustomer.sentWhatsApp("Hola");

notificationPlanner.sentEmail("Hola");
