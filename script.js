const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

function toggleStar(element) {
    element.classList.toggle('clicked');
} 



document.addEventListener('DOMContentLoaded', function () {
    const juicePrice = {
      'Juice Pisang': 3000,
      'Juice Naga': 9000,
      'Juice Alpukat': 10000,
      'Juice Mangga': 12000,
      'Juice Semangka': 9000,
      'Juice Nanas': 8000,
      'Juice Jeruk': 11000,
      'Juice Kurma': 7000
    };
  
    function setJuiceDetails(juiceName, juicePrice) {
      document.getElementById('nama').value = juiceName;
      calculateTotal();
    }
  
    function calculateTotal() {
      const juiceName = document.getElementById('nama').value;
      const jumlah = document.getElementById('jumlah').value;
      const totalPrice = juicePrice[juiceName] * jumlah;
      document.getElementById('total').value = `Rp. ${totalPrice.toLocaleString('id-ID')}`;
    }
  
    document.getElementById('jumlah').addEventListener('input', calculateTotal);
  
    document.querySelectorAll('.btn[data-bs-target="#pesanModal"]').forEach(function (button) {
      button.addEventListener('click', function () {
        const juiceName = button.closest('.card').querySelector('.card-title').textContent;
        const juicePrice = parseInt(button.closest('.card').querySelector('.buy p').textContent.replace(/[^\d]/g, ''));
        setJuiceDetails(juiceName, juicePrice);
      });
    });
  });
  


//   untuk menanganio login

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;

    // Tentukan email dan password yang valid di dalam kode JavaScript
    const validEmail = 'user@gmail.com';
    const validPassword = '12345';

    if (email === validEmail && password === validPassword) {
        // Redirect ke halaman baru jika login berhasil
        window.location.href = 'dasboard.html';
    } else {
        // Tampilkan alert jika email atau password tidak valid
        alert('Email dan password tidak valid !!');
    }
});

