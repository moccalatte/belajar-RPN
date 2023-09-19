# 4. Breaking Sentence (yet Again) and Count Each Length
# Problem
# Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

# let word4 = 'wow JavaScript is so cool';
# let exampleFirstWord4 = word4.substring(0, 3);

# let firstWordLength = exampleFirstWord4.length;
# console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);

word4 = 'wow JavaScript is so cool'

first_word4 = word4[0:3]
first_word_length = len(first_word4)

second_word4 = word4[4:14]
second_word_length = len(second_word4)

third_word4 = word4[15:17]
third_word_length = len(third_word4)

fourth_word4 = word4[18:20]
fourth_word_length = len(fourth_word4)

fifth_word4 = word4[21:]
fifth_word_length = len(fifth_word4)

sentence = first_word_length + second_word_length + third_word_length + fourth_word_length + fifth_word_length

print(f'First Word: "{first_word4}" with length: {first_word_length} alphabets.')
print(f'Second Word: "{second_word4}" with length: {second_word_length} alphabets.')
print(f'Third Word: "{third_word4}" with length: {third_word_length} alphabets.')
print(f'Fourth Word: "{fourth_word4}" with length: {fourth_word_length} alphabets.')
print(f'Fifth Word: "{fifth_word4}" with length: {fifth_word_length} alphabets..')

print(f'Sentence: {first_word4} {second_word4} {third_word4} {fourth_word4} {fifth_word4} with total length: {sentence} alphabets.')
