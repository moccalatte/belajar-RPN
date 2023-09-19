# Kamu akan diberikan sebuah tanggal dalam tiga variabel,
# yaitu hari, bulan, dan tahun. Disini kamu diminta
# untuk membuat format tanggal. Misal tanggal yang diberikan
# adalah hari 1, bulan 5, dan tahun 1945. Maka,
# output yang harus kamu proses adalah menjadi 1 Mei 1945.

def nama_bulan(bulan):
    nama_bulan_list = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ]
    return nama_bulan_list[bulan - 1] if 1 <= bulan <= 12 else None


def main():
    try:
        tanggal = int(input("Masukkan tanggal (1-31): "))
        bulan = int(input("Masukkan bulan (1-12): "))
        tahun = int(input("Masukkan tahun (1900-2200): "))

        # validasi tanggal, bulan, dan tahun
        if not (1 <= tanggal <= 31):
            print("Harus dalam rentang 1-31.")
            return
        if not (1 <= bulan <= 12):
            print("Harus dalam rentang 1-12.")
            return
        if not (1900 <= tahun <= 2200):
            print("Harus dalam rentang 1900-2200.")
            return

        nama_bulan_str = nama_bulan(bulan)
        if nama_bulan_str:
            print(f"Tanggal: {tanggal} {nama_bulan_str} {tahun}")
        else:
            print("Bulan tidak valid.")

    except ValueError:
        print("Input tidak valid. Pastikan kamu memasukkan angka.")


if __name__ == "__main__":
    main()