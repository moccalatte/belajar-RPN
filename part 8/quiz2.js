//pada soal yg kedua, kalian harus belajar method split secara mandiri, pada soal dibawah ini, method .split() cukup powerfull loh

let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(input) {
  let nama = input[1] + "Elsharawy";
  let tempatLahir = "Provinsi " + input[2];

  input.splice(1, 1, `${nama}`);
  input.splice(2, 1, `${tempatLahir}`);
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(input);
  console.log("\n");

  let tanggalLahir = input[3].split("/");
  if (tanggalLahir[1] == "05") {
    console.log("Mei");
  }

  console.log([tanggalLahir[2], tanggalLahir[0], tanggalLahir[1]]);
  console.log(tanggalLahir.join("-"));
  console.log("\n");
  console.log(input[1].substring(0, 15));
  console.log("\n");
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
