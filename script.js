
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent =
        "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}


function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", a / b);
    console.log("Modulus:", a % b);
}

operasiDasar(9, 4);


let nilai = prompt("Masukkan nilai Anda:");
if (nilai !== null && nilai.trim() !== "" && !isNaN(nilai)) {
    nilai = Number(nilai);

    if (nilai >= 0 && nilai <= 100) {
        if (nilai >= 60) {
            alert("Lulus");
        } else {
            alert("Belum lulus");
        }
    } else {
        alert("Nilai harus antara 0 sampai 100");
    }
} else {
    alert("Masukkan nilai yang valid");
}


const inputPilihan = prompt("Masukkan angka 1-5:");
switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
}


function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}


function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}


const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}


function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function prosesNilai() {
    const inputTugas = document.getElementById("nilaiTugas").value;
    const inputUTS = document.getElementById("nilaiUTS").value;
    const inputUAS = document.getElementById("nilaiUAS").value;

    const hasil = document.getElementById("hasilNilai");

    if (
        inputTugas.trim() === "" ||
        inputUTS.trim() === "" ||
        inputUAS.trim() === "" ||
        !Number.isFinite(Number(inputTugas)) ||
        !Number.isFinite(Number(inputUTS)) ||
        !Number.isFinite(Number(inputUAS)) ||
        Number(inputTugas) < 0 || Number(inputTugas) > 100 ||
        Number(inputUTS) < 0 || Number(inputUTS) > 100 ||
        Number(inputUAS) < 0 || Number(inputUAS) > 100
    ) {
        hasil.textContent = "Masukkan semua nilai dengan benar, dalam rentang 0–100.";
        return;
    }

    const tugas = Number(inputTugas);
    const uts = Number(inputUTS);
    const uas = Number(inputUAS);

    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    hasil.textContent =
        "Nilai akhir: " + akhir.toFixed(2) +
        " | Predikat: " + predikat +
        " | Status: " + status;
}


