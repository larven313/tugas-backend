const nilai = 90;
let grade = "";

if (nilai > 90) {
  grade = "A";
} else if (nilai > 80) {
  grade = "B";
} else {
  grade = "C";
}

console.log(`Nilai anda: ${grade}`);

/**
 * Short conditional menggunakan ternary operator (? dan :)
 * ? digunakan untuk kondisi if.
 * : digunakan untuk kondisi else
 */
const age = 22;
age > 21 ? console.log("Sudah Dewasa") : console.log("Belum Dewasa");
