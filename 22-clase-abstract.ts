abstract class Upload {
  abstract newFilename: string;
  abstract saveFile(file: File): void;

  constructor() {
    this.progress();
  }

  progress() {
    console.log("upload file");
  }
}

class UploadAWS extends Upload {
  newFilename: string = new Date().getTime().toString();

  saveFile(file: File): void {
    console.log("upload file to AWS");
  }

  override progress() {
    console.log("progress to AWS");
  }
}

const upload = new UploadAWS();
const file = new File(["data"], "data.txt", { type: "text/plain" });
upload.saveFile(file);
