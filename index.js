var swiperx = new Swiper("#home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }); 
// farah
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
// omar_atef
function addToCart(productId) {
  alert(`تمت إضافة المنتج ${productId} إلى العربة.`);
}

function addToFavorites(productId) {
  alert(`تمت إضافة المنتج ${productId} إلى المفضلة.`);
}

function removeProduct(productId) {
  alert(`تمت إزالة المنتج ${productId}.`);
}

const ratings = document.querySelectorAll('.rating');

ratings.forEach(rating => {
  const stars = rating.querySelectorAll('span');
  let selectedRating = 0;

  stars.forEach((star, index) => {
      star.addEventListener('click', () => {
          selectedRating = index + 1;
          updateRating(stars, selectedRating);
      });
  });
});

function updateRating(stars, rating) {
  stars.forEach((star, index) => {
      if (index < rating) {
          star.innerHTML = '&#9733;'; 
          star.style.color = '#f39c12';
      } else {
          star.innerHTML = '&#9734;'; 
          star.style.color = '#ddd';
      }
  });
}
