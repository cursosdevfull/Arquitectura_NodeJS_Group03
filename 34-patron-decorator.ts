interface IMessage {
  name: string;
  email: string;
  mobile: string;
  queue: string;
  text: string;
}

abstract class NotificationProcess {
  message: IMessage;
  abstract send(): void;
}

class NotificationSES extends NotificationProcess {
  constructor(public message: IMessage) {
    super();
  }

  send(): void {
    console.log(
      `Send notification by SES. User: ${this.message.name} / Email: ${this.message.email} / Text: ${this.message.text}`
    );
  }
}

class NotificationSQS extends NotificationProcess {
  constructor(public notificationProcess: NotificationProcess) {
    super();
    this.message = this.notificationProcess.message;
  }

  send() {
    this.notificationProcess.send();
    console.log(
      `Send notification by SQS. User: ${this.message.name} / Queue: ${this.message.queue} / Text: ${this.message.text}`
    );
  }
}

class NotificationSNS extends NotificationProcess {
  constructor(public notificationProcess: NotificationProcess) {
    super();
    this.message = this.notificationProcess.message;
  }

  send() {
    this.notificationProcess.send();
    console.log(
      `Send notification by SNS. User: ${this.message.name} / Mobile: ${this.message.mobile} / Text: ${this.message.text}`
    );
  }
}

const message: IMessage = {
  name: "Alberto Sifuentes",
  email: "alberto.sifuentes@email.com",
  mobile: "51-1-999456789",
  queue: "QUEUE_GENERAL",
  text: "Recordario de cita",
};

const notificationEmail = new NotificationSES(message);
const notificationMobile = new NotificationSNS(notificationEmail);
const notificationQueue = new NotificationSQS(notificationMobile);
notificationQueue.send();
