/**
 * Membuat fungsi menghitung luas lingkaran.
 * Fungsi dibuat dengan gaya Function Expression
 *
 * @param {number} radius (jari-jari)
 * @returns {number} area (luas lingkaran)
 */

const calcAreaOfCircle = function (radius) {
  const PHI = 3.14;
  const area = PHI * radius * radius;
  return area;
};

// Memanggil fungsi dengan mengirimkan parameter
console.log(calcAreaOfCircle(5));
console.log(calcAreaOfCircle(6));
