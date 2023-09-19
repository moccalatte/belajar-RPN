# 3. Breaking Sentence (Again) using Substring
# Problem
# Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

# let word3 = 'wow JavaScript is so cool';
# let exampleFirstWord3 = word3.substring(0, 3);
# console.log('First Word: ' + exampleFirstWord3);

word3 = 'wow JavaScript is so cool'
first_word3 = word3[0:3]
second_word3 = word3[4:14]
third_word3 = word3[15:17]
fourth_word3 = word3[18:20]
fifth_word3 = word3[21:]

print('firstword3:', first_word3)
print('secondword3:', second_word3)
print('thirdword3:', third_word3)
print('fourthword3:', fourth_word3)
print('fifthword3:', fifth_word3)
