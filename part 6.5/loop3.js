// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

console.log("While loop");
a = 101;
while (i > 1) {
  a--;
  if (i % 2 === 0) {
    console.log(`${i} adalah GENAP`);
  } else if (i % 2 !== 0) {
    console.log(`${i} adalah GANJIL`);
  }
}

console.log("\nFor Loop");
for (let j = 1; j <= 100; j++) {
  if (j % 2 === 0) {
    console.log(`${j} adalah GENAP`);
  } else if (j % 2 !== 0) {
    console.log(`${j} adalah GANJIL`);
  }
}
