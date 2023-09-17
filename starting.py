# TIPE DATA PYTHON

nama_email = "sumanto@hotmail.com" #string
tahun_lahir = 2000 #integer
sisa_saldo = 95750.75 #float
angka_kompleks = 2j #complex
nama_buah = ['apel, semangka, melon'] #list
nama_buah = ('apel, semangka, melon') #tuple
nama_buah = {'apel, semangka, melon'} #set
nama_buah = frozenset({'apel, semangka, melon'}) #frozenset
data_ktp = {'nama': 'Sumanto', 'umur': '23'} #dict
x = True #boolean
x = b"Hello" #bytes
x = bytes(300) #bytes
x = bytearray(15) #bytearray
x = memoryview(bytes(15)) #memoryview

# VARIABLE PYTHON

nama_saya = 'andre'
print(nama_saya)
# atau bisa juga
nama_saya = nama_panggilan = nama_asli = 'andre'
print(nama_saya)
print(nama_panggilan)
print(nama_asli)

# OPERATOR PYTHON

# aritmatika
x = 12
y = 5
print(x+y)
print(x-y)
print(x*y)
print(x/y)
print(x**y)
print(x%y)
print(x//y)

# penugasan
nilai = 11
nilai += 3
nilai -= 3
nilai *= 3
nilai /= 3
nilai **= 3
nilai %= 3
nilai //= 3
nilai &= 3
nilai |= 3
nilai ^= 3
nilai <<= 3
nilai >>= 3

# perbandingan
x = 5
y = 3
print (x == y)
print (x != y)
print(x < y)
print(x > y)
print (x <= y)
print (x >= y)

# logika (and, or, dan not)
x = 10
y = 5
hasil1 = x < 15 and y > 3
print("Hasil 1 : ", hasil1)
hasil2 = x < 15 and y > 6
print("Hasil 2 : ", hasil2)
hasil3 = x < 9 or y > 1
print("Hasil 3 : ", hasil3)
hasil4 = x < 9 or y > 6
print("Hasil 4 : ", hasil4)
hasil5 = x < 15 and not y > 3
print("Hasil 5 : ", hasil5)
hasil6 = x < 9 and not y > 6
print("Hasil 6 : ", hasil6)
hasil7 = x < 15 or not y > 3
print("Hasil 7 : ", hasil7)
hasil8 = x < 15 or not y > 6
print("Hasil 8 : ", hasil8)
hasil9 = x < 9 or not y > 6
print("Hasil 9 : ", hasil9)

# keanggotaan (in dan not in)
nama_buah = ["Apel", "Semangka", "Melon", "Mangga", "Stroberi"]
print("Stroberi" in nama_buah)
print("Sumanto" in nama_buah)
print("Stroberi" not in nama_buah)
print("Sumanto" not in nama_buah)

# identitas (is dan is not)
x = 10
y = 5
hasil1 = x is y
if (hasil1 == True):
    print(f"Iya betul karena {x} dan {y}")
else:
    print(f"Salah, bukan karena {x} dan {y}")

hasil2 = x is not y
if (hasil2 == True):
    print(f"Iya betul karena {x} dan {y}")
else:
    print(f"Salah, bukan karena {x} dan {y}")

# bitwise atau binary numbers
a = 15
b = 10

print(~a)
print(a&b)
print(a|b)
print(a^b)
print(a<<b)
print(a>>b)

# prioritas atau menjumlahkan yang lebih priortias dahulu
print((15 + 5) - (7 + 17)) # dikurung menandakan dijumlahkan lebih dulu (prioritas)
print(150 + 5 * 10 / 2) # akan dimulai dari pembagian karena prioritas