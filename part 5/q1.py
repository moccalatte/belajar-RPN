# Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
# Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
# yaitu nama dan peran. Variabel peran harus memiliki isi data, 
# bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
# bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
# Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
# Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
# peran serta mengeluarkan respon sesuai isi variabel tersebut.
# ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
# halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
# halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
# halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
# tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
# tips belajar penggunaan `` (backtick) pada javascript agar
# mudah dalam memasukan variabel ke dalam string
# tapi tanpa backtick juga ga masalah sih yg penting output sesuai

def proxytia(nama, peran):
    if not nama:
        return "Nama wajib diisi."
    elif not peran:
        return "Pilih Peranmu untuk memulai game."
    else:
        if peran.lower() == "ksatria":
            return f"Halo Ksatria {nama}, kamu dapat menyerang dengan senjatamu!"
        elif peran.lower() == "tabib":
            return f"Halo Tabib {nama}, kamu akan membantu temanmu yang terluka!"
        elif peran.lower() == "penyihir":
            return f"Halo Penyihir {nama}, ciptakan keajaiban yang membantu kemenanganmu!"
        else:
            return "Peran yang kamu pilih tidak ada."

# nama dan peran
nama = input("Masukkan nama: ")
peran = input("Masukkan peran (Ksatria/Tabib/Penyihir): ")

# hasilnya
hasil = proxytia(nama, peran)
print(hasil)

