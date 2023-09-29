//5. Bintang asteriks
//Problem buatlah bintang seperti berikut
//let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let bintang = "*";

for (let i = 0; i < 5; i++) {
  console.log(bintang);
  bintang += bintang[i];
}

let hasil = "";

for (let j = 5; j > 0; j--) {
  for (let k = 0; k < j; k++) {
    hasil += "*";
  }
  hasil += "\n";
}
console.log(hasil);
