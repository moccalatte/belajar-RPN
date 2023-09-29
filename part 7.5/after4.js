//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  let karakterX = "x";
  let karakterO = "o";
  let jumlahX = 0;
  let jumlahO = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === karakterX) {
      jumlahX++;
    }
    if (str[i] === karakterO) {
      jumlahO++;
    }
  }

  // hasilnya disini
  if (jumlahX === jumlahO) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
