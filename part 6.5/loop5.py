# 5. Bintang asteriks
# Problem buatlah bintang seperti berikut
# let input = 5
# hasilnya
# *
# **
# ***
# ****
# *****

bintang = "*"

for x in range(5):
    print(bintang)
    bintang += bintang[x]

pola = ""

for y in range(5, 0, -1):
    for z in range(y):
        pola += '*'
    pola += '\n'

print(pola)
