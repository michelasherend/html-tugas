// Fungsi untuk menampilkan gambar dalam mode full image
function tampilkanFullImage(src) {
    // Tutup gambar full image yang sedang dibuka jika ada
    if (currentFullImg !== null) {
        currentFullImg.remove();
        currentCloseButton.remove();
    }

    // Buat elemen gambar
    var fullImg = document.createElement('img');
    fullImg.src = src;
    fullImg.classList.add('full-image');

    // Buat tombol untuk menutup gambar
    var closeButton = document.createElement('button');
    closeButton.innerHTML = 'X';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', function() {
        // Hapus gambar dan tombol ketika tombol X diklik
        fullImg.remove();
        closeButton.remove();
        currentFullImg = null; // Setel kembali variabel global ke null
        currentCloseButton = null; // Setel kembali variabel global ke null
    });

    // Tambahkan elemen gambar dan tombol ke dalam body
    document.body.appendChild(fullImg);
    document.body.appendChild(closeButton);

    // Setel variabel global ke elemen gambar yang baru saja dibuat
    currentFullImg = fullImg;
    currentCloseButton = closeButton;
}

// Variabel global untuk menyimpan referensi ke gambar full image yang sedang dibuka
var currentFullImg = null;
var currentCloseButton = null;

// Fungsi untuk menampilkan tema
function tampilkanTema(idTema) {
    // Sembunyikan semua tema
    document.querySelectorAll('.tema').forEach(function(tema) {
        tema.style.display = 'none';
    });

    // Tampilkan tema yang dipilih
    var temaDipilih = document.getElementById(idTema);
    temaDipilih.style.display = 'block';

    // Tambahkan event listener untuk setiap gambar pada tema yang dipilih
    temaDipilih.querySelectorAll('img').forEach(function(img) {
        img.addEventListener('click', function() {
            var src = img.src;
            tampilkanFullImage(src); // Panggil fungsi untuk menampilkan gambar dalam mode full image
        });
    });
}