// Let and const
const MAGIC_NUMBER_WITH_IMPORTANT_VALUE = 42;
let loopIndex = 0;
const shortHandFunc = () => {
  console.log("shortHandFunc");
};

// Desctructuring
let payloadFromServer = {
  userName: "hasse",
  dateTime: "2020-05-29 20:37:00",
};

const handlePayload = (payload) => {
  let { userName, dateTime } = payload;
  console.log(userName, dateTime);
};

handlePayload(payloadFromServer);

// Spread (Objects and Arrays)
let defaultValues = {
  baseURL: "https://www.dn.se",
  version: 2,
  userName: "hasse",
};
let mySettings = {
  userName: "mattias",
  baseURL: "https://yetric.se",
};
let options = { ...defaultValues, ...mySettings };
let { baseURL } = options;

let firstResponseFromServer = [1, 3, 5];
let secondResponseFromServer = [2, 4, 6];
let mergedResponse = [...firstResponseFromServer, ...secondResponseFromServer];
