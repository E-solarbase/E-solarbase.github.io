const scrollContainer = document.querySelector('.scroll__cards');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function logoutUser() {
  $.ajax({
    url: '../scripts/authhandler.php',
    method: 'POST',
    processData: false,
    contentType: false,
    success: function (response) {
      window.location.href = "../index.php";
    },
    error: function (error) {
      console.error('Error:', error);
    }
  });
}

setTimeout(() => {
  $('.alert').alert('close');
}, 5000);

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    scrollContainer.scrollBy(-220, 0);
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    scrollContainer.scrollBy(220, 0);
  });
}

var swiper = new Swiper(".detailsSwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".detailsSwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
