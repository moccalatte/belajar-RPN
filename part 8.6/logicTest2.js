/*
Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.
*/

function perkalianUnik(arr) {
  let hitung = 1;
  for (let i = 0; i < arr.length; i++) {
    hitung *= arr[i]; //array yg di console.log dibawah [2, 4, 6] akan dikali, 2x4x6 = 48.
  }
  let hasil = [];
  for (let j = 0; j < arr.length; j++) {
    hasil.push(hitung / arr[j]); //lalu 48 itu akan dibagi dengan masing2 index array [2, 4, 6]. contoh 48/2 = 24 lalu 48/4 = 12 lalu 48/6 = 8.
    //jadi menghasilkan 24, 12, 8.
  }
  return hasil;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
