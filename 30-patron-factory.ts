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

enum CloudEnum {
  aws = "aws",
  azure = "azure",
  gcp = "gcp",
  docean = "docean",
}

type CLOUD = "aws" | "azure" | "gcp" | "docean";

const factories: Record<CLOUD, IUpload> = {
  aws: new FactoryUploadAWS(),
  azure: new FactoryUploadAzure(),
  gcp: new FactoryUploadGCP(),
  docean: new FactoryUploadDO(),
};

function FactoryUpload(cloud: CloudEnum) {
  return factories[cloud];
  /*let cloudSelected;

    switch(cloud) {
        case CloudEnum.aws:
            cloudSelected = new FactoryUploadAWS()
            break;
        case CloudEnum.azure:
            cloudSelected = new FactoryUploadAzure()
            break;
        case CloudEnum.gcp:
            cloudSelected = new FactoryUploadGCP()
            break;
        case CloudEnum.docean:
            cloudSelected = new FactoryUploadDO()
            break;
    }

    return cloudSelected*/
}

const file: File = new File(["content"], "myData.txt", { type: "text/plain" });
const upload: IUpload = FactoryUpload(CloudEnum.docean);
upload.save(file);
