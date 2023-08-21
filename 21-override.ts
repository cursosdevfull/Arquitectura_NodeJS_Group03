class Upload {
  uploadFile(file: File) {
    //this.save(file)
    this.progress(file);
  }

  progress(file: File) {
    console.log("file is uploading");
  }

  /*save(file: File) {
        console.log("file uploaded")
        return "file saved"
    }*/
}

class UploadAWS extends Upload {
  override save(file: File) {
    console.log("new method save");
    return "new method save";
  }
}

const upload = new UploadAWS();
const file = new File(["data"], "data.txt", { type: "text/plain" });
upload.uploadFile(file);
