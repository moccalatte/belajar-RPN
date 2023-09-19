# 2. Melakukan Looping Menggunakan For
# Problem
# Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
# Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
# menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
# tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

looping_pertama = "Looping Pertama"
looping_kedua = "\nLooping Kedua"

print(looping_pertama)
for x in range(11):
    print(x)

print(looping_kedua)
for y in range(10, -1, -1):
    print(y)
