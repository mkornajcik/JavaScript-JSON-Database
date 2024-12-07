const { readDb, writeDb } = require("./db_functions");

const dataObj = {
  name: "Marko",
  hobby: "Programming",
};

writeDb(dataObj);
console.log(readDb());
