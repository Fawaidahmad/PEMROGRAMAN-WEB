// Fungsi untuk search bar
document.querySelector('.search-bar').addEventListener('keyup', function (e) {
    const searchQuery = e.target.value.toLowerCase();
    console.log(`User is searching for: ${searchQuery}`);
  });
  
  // Fungsi untuk tombol "Shop Now"
  document.querySelectorAll('.shop-now').forEach(button => {
    button.addEventListener('click', function () {
      alert('Redirecting to shop page...');
    });
  });
  
  // Fungsi Countdown Timer
  function startCountdown() {
    const countdownElement = document.querySelector('.countdown');
    const targetTime = new Date().getTime() + 23 * 60 * 60 * 1000 + 2 * 60 * 1000 + 59 * 1000; // 23 jam 2 menit 59 detik
  
    function updateTimer() {
      const now = new Date().getTime();
      const distance = targetTime - now;
  
      if (distance < 0) {
        countdownElement.innerText = 'Sale Ended';
        return;
      }
  
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countdownElement.innerText = `Ending In ${hours}:${minutes}:${seconds}`;
    }
  
    updateTimer();
    setInterval(updateTimer, 1000);
  }
  
  // Mulai hitung mundur
  startCountdown();
  
  // Hover effect untuk kartu produk
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseover', function () {
      card.style.backgroundColor = '#f0f8ff'; // Highlight biru muda
    });
  
    card.addEventListener('mouseout', function () {
      card.style.backgroundColor = '#fff'; // Kembali ke putih
    });
  });
  