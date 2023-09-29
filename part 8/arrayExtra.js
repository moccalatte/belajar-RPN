// yak kelupaan hal dasar lainnya yak, bahwa array itu ada
// array 1 dimensi contoh [1,2,3,4,5,6]
// array 2 dimensi contoh [[1,2,3],[4,5,6]]

// cara akses elemen array 1 dimensi cukup misal arr[0]
// cara akses elemen array 2 dimensi cukup misal arr[0][0]

// pada array 2 dimensi karena bentukannya begini [[1,2,3],[4,5,6]
// maka bila kita melakukan indexing pada array tersebut akan menghasilkan tampilan seperti ini
let arr = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(arr[0]); //[1,2,3]
console.log(arr[0].length); //3
console.log(arr[0][0]); //1
console.log(arr[1]); // [4,5,6]
console.log(arr[1].length); //3
console.log(arr[1][1]); //5

//bila kalian perlu mengecek semua elemen array 2 dimensi dengan loop, bisa melakukan hal berikut

let array = [
  [1, 2, 3],
  [4, 5, 6],
];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(array[i][j]); //1 2 3 4 5 6
  }
}

//dan juga array 2 dimensi itu case nyatanya adalah seperti Tabel
//kayak dalam tabel ada baris dan kolom, dan biasanya data tabel yang memiliki baris dan kolom menggunakan array 2 dimensi
