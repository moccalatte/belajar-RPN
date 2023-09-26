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

for (let a = 0; a < 5; a++) {
  console.log(bintang);
  bintang += bintang[a];
}

let hasil = "";

for (let b = 5; b > 0; b--) {
  for (let c = 0; c < b; c++) {
    hasil += "*";
  }
  hasil += "\n";
}
console.log(hasil);
