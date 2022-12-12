/**
 * Fungsi untuk format nama menjadi uppercase.
 *
 * @param {string} name
 */
const formatName = (name) => name.toUpperCase();

/**
 * Fungsi untuk mendapatkan nama.
 *
 * @param {string} name
 * @param {function} callback
 */
const getName = (name, callFormatName) => console.log(callFormatName(name));

getName("Aufa", formatName);
