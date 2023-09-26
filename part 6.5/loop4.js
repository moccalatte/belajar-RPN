//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log("Pertambahan 2");
for (let a = 1; a < 100; a += 2) {
  if (a % 3 === 0) {
    console.log(`${a} adalah kelipatan 3`);
  } else {
    console.log(a);
  }
}

console.log("\nPertambahan 5");
for (let b = 0; b < 100; b += 5) {
  if (b % 6 === 0) {
    console.log(`${b} adalah kelipatan 6`);
  } else {
    console.log(b);
  }
}

console.log("\nPertambahan 9");
for (let c = 0; c < 100; c += 9) {
  if (c % 10 === 0) {
    console.log(`${c} adalah kelipatan 10`);
  } else {
    console.log(c);
  }
}
