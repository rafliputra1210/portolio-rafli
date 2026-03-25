document.addEventListener('DOMContentLoaded', function() {
    // 1. Tangkap elemen tombol dan menunya
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // 2. Pastikan elemennya ada, lalu beri perintah klik
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // Tambah/hapus class 'active' untuk memunculkan menu
            navLinks.classList.toggle('active');
            
            // Opsional: untuk animasi tombol X
            menuToggle.classList.toggle('is-active'); 
        });
    }
});
// ==========================================
// FITUR KIRIM PESAN KE WHATSAPP
// ==========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah form memuat ulang halaman

        // 1. Ambil data yang diketik user
        const name = document.getElementById('senderName').value;
        const email = document.getElementById('senderEmail').value;
        const message = document.getElementById('senderMessage').value;

        // 2. Ganti dengan nomor WhatsApp kamu (Gunakan format 62, tanpa angka 0 di depan)
        // Contoh: Jika nomormu 08123456789, tulis 628123456789
        const phoneNumber = "628xxxxxxxxxx"; 

        // 3. Format pesan yang akan masuk ke WA
        const waText = `Halo Liza Ayu!%0A%0ASaya melihat portofolio kamu.%0ANama: ${name}%0AEmail: ${email}%0A%0A${message}`;

        // 4. Buat link pemanggil WhatsApp
        const waUrl = `https://wa.me/${phoneNumber}?text=${waText}`;

        // 5. Buka tab baru ke WhatsApp
        window.open(waUrl, '_blank');
        
        // Opsional: Kosongkan form setelah diklik
        contactForm.reset();
    });
}