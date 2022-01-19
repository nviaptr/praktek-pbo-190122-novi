//perulangan

// siapkan bahan 
let siswa = "joko"
let nilai = 90
let absen = 7

// algoritma kenaikan kelas 
if (nilai >= 70 && absen < 5) {
    console.log(`nama : ${siswa} nilai : ${nilai} : absen : ${absen} = SELAMAT ANDA LULUS`)
} else {
    console.log(`nama : ${siswa} nilai : ${nilai} : absen : ${absen} = MAAF ANDA TIDAK LULUS`)
};

/* Pseudocode 

STORE "siswa" with any string
STORE "nilai" with any number
STORE "absen" with any number
READ "siswa", "nilai", "absen" 
     if nilai > 70 AND absen < 50
     DISPLAY nama : "siswa" nilai: "nilai" selamat anda lulus
     else
     DISPLAY "siswa" nilai: "nilai" selamat anda tidak lulus
     ENDIF
END
*/