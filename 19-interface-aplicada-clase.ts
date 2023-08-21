interface IUpload {
  save(file: File): void;
}

class UploadFile {
  constructor(private readonly repository: IUpload) {}

  execute(file: File) {
    this.repository.save(file);
  }
}

class UploadAWS implements IUpload {
  save(file: File) {
    this.progress(file);
    console.log("File uploaded");
  }

  private progress(file: File) {
    console.log("File is uploading");
  }
}

class UploadGCP implements IUpload {
  save(file: File) {
    this.status(file);
    this.sentNotificationSlack();
  }

  status(file: File) {
    console.log("Status of file");
  }

  sentNotificationSlack() {
    console.log("Notification: file uploaded");
  }
}

class UploadAzure implements IUpload {
  save(file: File) {
    console.log("File is uploading to Azure");
  }
}

//const upload: IUpload = new UploadAWS()
//const upload: IUpload = new UploadGCP()
const upload: IUpload = new UploadAzure();
const uploadFile = new UploadFile(upload);

const file = new File(["data"], "data.txt", { type: "text/plain" });
uploadFile.execute(file);
