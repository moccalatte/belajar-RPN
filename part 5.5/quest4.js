// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

// let word4 = 'wow JavaScript is so cool';
// let exampleFirstWord4 = word4.substring(0, 3);

// let firstWordLength = exampleFirstWord4.length;
// console.log('First Word: ' + exampleFirstWord + ', dengan length: ' + firstWordLength);

let word4 = "wow JavaScript is so cool";

let first_word4 = word4.substring(0, 3);
let first_word_length = first_word4.length;

let second_word4 = word4.substring(4, 14);
let second_word_length = second_word4.length;

let third_word4 = word4.substring(15, 17);
let third_word_length = third_word4.length;

let fourth_word4 = word4.substring(18, 20);
let fourth_word_length = fourth_word4.length;

let fifth_word4 = word4.substring(21);
let fifth_word_length = fifth_word4.length;

console.log(`First Word: "${first_word4}" dengan length: ${first_word_length}`);
console.log(
  `Second Word: "${second_word4}" dengan length: ${second_word_length}`
);
console.log(`Third Word: "${third_word4}" dengan length: ${third_word_length}`);
console.log(
  `Fourth Word: "${fourth_word4}" dengan length: ${fourth_word_length}`
);
console.log(`Fifth Word: "${fifth_word4}" dengan length: ${fifth_word_length}`);
