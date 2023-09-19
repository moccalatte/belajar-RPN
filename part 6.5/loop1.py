# 1. Melakukan Looping Menggunakan While
# Problem
# Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
# Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
# menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
# tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

looping_pertama = "Looping Pertama"
looping_kedua = "\nLooping Kedua"
x = 0
y = 5

print(looping_pertama)
while x <= 5:
    print(x)
    x += 1

print(looping_kedua)
while y >= 0:
    print(y)
    y -= 1
