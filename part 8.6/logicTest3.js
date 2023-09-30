//tentukan apakah ini deret aritmatika atau bukan

function tentukanDeretAritmatika(arr) {
  let selisih = arr[1] - arr[0]; //hitung selisih dari array index yg kedua - kesatu
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== selisih) {
      return false;
    }
  }

  return true; //akan loop periksa ++1 seterusnya lalu apakah sama atau tetap atau konstan, jikau tidak=bukan aritmatika.
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // true
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
