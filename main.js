var waktu = new Date();
var tahun = waktu.getFullYear();
var bulan = waktu.getMonth();
var tanggal = waktu.getDate();
var hari = waktu.getDay();
var jam = waktu.getHours();

var bln = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var hr = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

var tanggalan = hr[hari] + ", " + tanggal + " " + bln[bulan] + " " + tahun;

document.getElementById('penanggalan').innerHTML = tanggalan;



if (jam <= 9) {
	var sapaan = "Selamat pagi, selamat datang di dunia musik";
} else if (jam <= 14) {
	var sapaan = "Selamat siang, selamat datang di dunia musik";
} else if (jam <= 18) {
	var sapaan = "Selamat sore, selamat datang di dunia musik";
} else {
	var sapaan = "Selamat malam, selamat datang di dunia musik";
}

document.getElementById('selamat').innerHTML = sapaan;