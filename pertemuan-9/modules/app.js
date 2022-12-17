/**
 * Meng-import FruitController.
 * Melakukan teknik destructing object
 */
const { index, store } = require("./FruitController.js");

// Membuat fungsi utama: main
const main = () => {
  index();
  store("Apple");
};

main();
