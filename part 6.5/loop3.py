# 3. Angka Ganjil dan Genap
# Hint: kamu akan menggunakan kondisional juga di kasus ini.

# Problem
# Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
# Di dalam perulangan, periksa setiap angka counter:

# Apabila angka counter adalah angka genap, tuliskan GENAP
# Apabila angka counter adalah angka ganjil, tuliskan GANJIL

print('Menggunakan For')
for x in range(1, 101):
    if x % 2 == 0:
        print(f'{x} adalah GENAP')
    else:
        print(f'{x} adalah GANJIL')

print('\nMenggunakan While')
y = 100
while y >= 1:
    if y % 2 == 0:
        print(f'{y} adalah GENAP')
    else:
        print(f'{y} adalah GANJIL')
    y -= 1
