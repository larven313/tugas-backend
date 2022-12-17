/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
  return new Promise((resolve) =>  {
    setTimeout(() => {
      console.log("Download selesai");
      console.log("Hasil Download: " + result);
    }, 3000);
  })
}

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */

const download = async (callShowDownload) => {
  const result = "windows-10.exe";
  console.log(await callShowDownload(result));
}


  
 

download(showDownload);

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
