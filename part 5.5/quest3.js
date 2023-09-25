// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

// let word3 = 'wow JavaScript is so cool';
// let exampleFirstWord3 = word3.substring(0, 3);
// console.log('First Word: ' + exampleFirstWord3);

let word3 = 'wow JavaScript is so cool';
let first_word3 = word3.substring(0, 3);
let second_word3 = word3.substring(4, 14);
let third_word3 = word3.substring(15, 17);
let fourth_word3 = word3.substring(18, 20);
let fifth_word3 = word3.substring(21);

console.log('First Word:', first_word3)
console.log('Second Word:', second_word3)
console.log('Third Word:', third_word3)
console.log('Fourth Word:', fourth_word3)
console.log('Fifth Word:', fifth_word3)