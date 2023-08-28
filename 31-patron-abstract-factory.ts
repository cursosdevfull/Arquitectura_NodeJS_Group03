type TYPE_FACTORY = "CLOUD" | "ONPREMISE";
type TYPE_DESTINATION =
  | "aws"
  | "azure"
  | "gcp"
  | "docean"
  | "openshift01"
  | "openshift02";

interface IUpload {
  save(file: File): void;
}

class FactoryUploadAWS implements IUpload {
  save(file: File) {
    console.log("upload to aws");
  }
}

class FactoryUploadAzure implements IUpload {
  save(file: File) {
    console.log("upload to azure");
  }
}

class FactoryUploadGCP implements IUpload {
  save(file: File) {
    console.log("upload to gcp");
  }
}

class FactoryUploadDO implements IUpload {
  save(file: File) {
    console.log("upload to digital ocean");
  }
}

class FactoryUploadOpenshift01 implements IUpload {
  save(file: File) {
    console.log("upload to openshift01");
  }
}

class FactoryUploadOpenshift02 implements IUpload {
  save(file: File) {
    console.log("upload to openshift02");
  }
}

const abstractFactories: Record<TYPE_FACTORY, Record<string, IUpload>> = {
  CLOUD: {
    aws: new FactoryUploadAWS(),
    azure: new FactoryUploadAzure(),
    gcp: new FactoryUploadGCP(),
    docean: new FactoryUploadDO(),
  },
  ONPREMISE: {
    openshift01: new FactoryUploadOpenshift01(),
    openshift02: new FactoryUploadOpenshift02(),
  },
};

function selectFactory(
  cloudOrOnPremise: TYPE_FACTORY,
  destination: TYPE_DESTINATION
): IUpload | string {
  return abstractFactories[cloudOrOnPremise][destination] ?? "not found";
}

const upload: IUpload | string = selectFactory("ONPREMISE", "gcp");
if (typeof upload === "string") throw new Error(upload);

const file: File = new File(["content of file"], "content.txt", {
  type: "text/plain",
});
upload.save(file);
