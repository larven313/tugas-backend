const persiapan = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Menyiapkan Bahan ...");
    }, 3000);
  });
};

const rebusAir = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Merebus Air ...");
    }, 5000);
  });
};

const masak = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Masak Mie ...");
    }, 7000);
  });
};

/**
 * async digunakan untuk memberitahu ada proses asynchronous
 * await digunakan untuk menunggu promise selesai.
 * await hanya bisa digunakan di dalam function.
 */
const main = async () => {
  console.log(await persiapan());
  console.log(await rebusAir());
  console.log(await masak());
};

main();
