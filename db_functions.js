// import the fs module which allows interacting with file system
const fs = require("fs");

function readDb(dbName = "db.json") {
  // read JSON
  const data = fs.readFileSync(dbName, "utf-8");
  // parse JSON to object and return it
  const converted_data = JSON.parse(data);
  return converted_data;
}

function writeDb(obj, dbName = "db.json") {
  // check that the user has passed in an object
  if (!obj) {
    return;
  }

  try {
    // convert object to JSON and save to the database
    let converted_data = JSON.stringify(obj);
    fs.writeFileSync(dbName, converted_data);
    console.log("Saved successfully.");
  } catch (err) {
    console.log("Failed to save data.\n", err.message);
  }
}

// export the read and write functions
module.exports = { readDb, writeDb };
