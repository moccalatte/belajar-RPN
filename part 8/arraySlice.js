// method slice berfungsi untuk memotong array tergantung dari nilai parameter yang kalian kasih
// contoh .slice(1, 4)
// simpelnya ada dua parameter slice(dari-mana, sampe-sebelum-mana)
// parameter pertama dari-mana (wkwk), itu berfungsi mau motong array dari mana
// parameter kedua sampe-sebelum-mana itu berfungsi buat ujung array yg kita potong
// boleh hanya memasang 1 parameter saja, contoh .slice(1)

//contoh memotong dari index 1 sampe ujung
let hewan = ["marmut", "gajah", "jerapah", "singa"];
hewan.slice(1);
console.log(hewan); //["marmut", "gajah", "jerapah", "singa"]

// LOH KOK GA BERUBAH SIH?!?!?!11!?
// jadi gini gan wkwkwk

// ada method yang memang bisa memutasi/mengubah array secara langsung, jadi cukup
// misal hewan.push("gajah") lalu nilai variabel hewannya berubah ["kucing", "gajah"]

// namun ada juga method yang ga merubah nilai variabelnya, nah si method .slice ini salah satu method yang ga merubah nilai array variabelnya

// lalu bagaimana cara kita tahu bahwa method slice berfungsi memotong arary???
// caranya adalah dengan menampung hasil return si slice pada variabel, atau langsung
// console.log(hewan.slice(1))
// jadi gini, langsung aja ke contohnya

//gini caranya, ada 2 cara
let hewanB = ["gajah", "jerapah", "badak", "singa"];
//bisa langsung hajar aja taro di output
console.log(hewanB.slice(1)); //["jerapah", "badak", "singa"]
//kita tampung di variabel baru
let slicedHewanB = hewanB.slice(1);
console.log(slicedHewanB); //["jerapah", "badak", "singa"]

//yak biasanya sih ditampung di variabel baru wkwk

//contoh memotong dari index 1 sampai sebelum index ke 3
//dengan kata lain
//contoh memotong dari index 1 sampai index 2
let hewanC = ["gajah", "jerapah", "badak", "singa"];
let slicedHewanC = hewanC.slice(1, 3);
console.log(slicedHewanC); //["jerapah", "badak"]
//yak begitulah gaes untuk materi kali ini, semoga kalian paham yak, video menyusul
