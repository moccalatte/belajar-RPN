// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

console.log("While loop");
a = 101;
while (a > 1) {
  a--;
  if (a % 2 === 0) {
    console.log(`${a} adalah GENAP`);
  } else if (a % 2 !== 0) {
    console.log(`${a} adalah GANJIL`);
  }
}

console.log("\nFor Loop");
for (let b = 1; b <= 100; b++) {
  if (b % 2 === 0) {
    console.log(`${b} adalah GENAP`);
  } else if (b % 2 !== 0) {
    console.log(`${b} adalah GANJIL`);
  }
}
