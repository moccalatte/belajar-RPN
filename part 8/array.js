// kalian bebas mau menampung tipe data apa saja di dalam array
let arrayNgasal = [1, "anjay", false, ["array lagi"], { name: "dika" }];
console.log(arrayNgasal[3]);
// //ngapain amat bikin array ngasal kek gini, ini cuma contoh gaes

// array lebih bagus kalau diisi hanya satu tipe data, dan satu tujuan.
// Cara mengakses salah satu elemen array itu cukup dengan indexing

// misal
let array = [1, 2, 3];
console.log(array[0]); //1

// yak setelah membaca ini, kalian sudah mengerti apa itu array, lalu kalian harus mengetahui method method pada array untuk memanipulasi array

//method length akan me-return nilai total elemen/item yang ada pada array
let hewan = ["gajah", "jerapah"];
console.log(hewan.length); //2

let angka = [3, 2, 1, 4, 5, 6, 7];
console.log(angka.length); //7

//method push() berfungsi untuk memasukan data pada urutan terakhir array atau bisa dibilang memasukan data ke paling kanan wkwk
let hewanB = ["marmut", "kucing"];
hewanB.push("tikus");
console.log(hewanB); //["marmut", "kucing", "tikus"]

//method pop() berfungsi untuk menghapus elemen terkahir pada array, bisa dibilang ngehapus yang elemen array paling kanan wkwk
let hewanC = ["marmut", "kucing", "tikus"];
hewanC.pop();
console.log(hewanC); //["marmut", "kucing"];

//method shift() berfungsi untuk menghapus elemen pertama pada array, bisa dibilang ngehapus yang paling kiri wkwk
let hewanD = ["marmut", "kucing", "tikus"];
hewanD.shift();
console.log(hewanD); //["kucing", "tikus"];

//method unshift() berfungsi menambahkan data pada urutan pertama, bisa dibilang nambahin sesuatu dipaling kiri wkwk
let hewanE = ["marmut", "kucing"];
hewanE.unshift("tikus");
console.log(hewanE); //["tikus", "marmut", "kucing"];
