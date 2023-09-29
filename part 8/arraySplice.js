// method splice berfungsi bisa menambahkan data, bisa menghapus data pada array, bisa dua duanya sekaligus tergantung isi parameter yang kalian berikan pada splice
// contoh .splice(0,1,"gajah", "macan")
// simplenya .splice(param1, param2, ...param-sisanya) //...berarti parameternya bisa ada banyak data
//parameter pertama sebagai penentuan posisi mau di index ke berapa
//parameter kedua sebagai penentuan mau menghapus berapa data/elemen/item (bisa juga ga ngehapus apa apa kalau di kasih nilai 0)
//parameter sisanya, itu untuk nambahin data ke dalam array, jumlahnya bisa banyak

//contoh menghapus 1 item dari index nomor 1
let hewanF = ["marmut", "kucing", "tikus"];
hewanF.splice(1, 1);
console.log(hewanF); //["marmut", "tikus"]

//contoh menambahkan 1 item tanpa menghapus apa apa, dari index nomor 1
let hewanG = ["marmut", "kucing", "tikus"];
hewanG.splice(1, 0, "gajah");
console.log(hewanG); //["marmut", "gajah", "kucing", "tikus"]

//contoh menambahkan 1 item dan menghapus 2 item, dari index nomor 1
let hewanH = ["marmut", "kucing", "tikus"];
hewanH.splice(1, 2, "gajah");
console.log(hewanH); //["marmut", "gajah"]

//contoh menambahkan 3 item dan menghapus 2 item, dari index nomor 1
let hewanI = ["marmut", "kucing", "tikus"];
hewanI.splice(1, 2, "gajah", "jerapah", "singa");
console.log(hewanI); //["marmut", "gajah", "jerapah", "singa"]
//yak splice emang rada multi-fungsi sih, kalian cobain sendiri ya biar lebih paham
