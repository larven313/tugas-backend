// Meng-import data fruits menggunakan require
const fruits = require("./data.js");

// Membuat fungsi index dan store
const index = () => {
  for (const fruit of fruits) {
    console.log(fruit);
  }
};

const store = (name) => {
  fruits.push(name);
  index();
};

// Meng-export method index dan store
module.exports = { index, store };
