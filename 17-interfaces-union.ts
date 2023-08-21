interface Express {
  field1: string;
  field2: string;
}

// Esto en el código: MyApp

interface Express {
  field3?: string;
}

const app: Express = {
  field1: "value1",
  field2: "value2",
  field3: "value3",
};
