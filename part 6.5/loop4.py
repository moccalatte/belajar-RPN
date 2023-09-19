#4. counter kelipatan
# Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
# Pada 3 perulangan baru ini periksa setiap angka counter:

# Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
# Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
# "3 kelipatan 3"dan seterusnya.

print("Looping Pertambahan 2")
for x in range(1, 100, 2):
    if x % 3 == 0:
        print(f'{x} adalah kelipatan 3')
    else:
        print(x)

print("\nLooping Pertambahan 5")
for y in range(0, 100, 5):
    if y % 6 == 0:
        print(f'{y} adalah kelipatan 6')
    else:
        print(y)

print("\nLooping Pertambahan 9")
for z in range(0, 100, 9):
    if z % 10 == 0:
        print(f'{z} adalah kelipatan 10')
    else:
        print(z)
