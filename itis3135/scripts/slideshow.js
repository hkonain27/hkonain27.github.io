$(document).ready(function () {
  // Array of images and captions
  const imageList = [
      { src: "images2/Hyd.jpeg", caption: "H - Hyderabad" },
      { src: "images2/Anakeets.jpeg", caption: "A - Anakeesta, Tennessee" },
      { src: "images2/Fries.jpeg", caption: "F - Fries" },
      { src: "images2/Sky.jpeg", caption: "S - Sky" },
      { src: "images2/Avocado.jpeg", caption: "A - Avocado" },
      { src: "images2/Krispykreme.jpeg", caption: "K - Krispykreme" },
      { src: "images2/Orange.jpg", caption: "O - Orange Milkshake" },
      { src: "images2/Nails.jpeg", caption: "N - Nails" },
      { src: "images2/Airport.jpeg", caption: "A - Airport, Hyderabad, IN" },
      { src: "images2/Icecream.jpeg", caption: "I - Ice Cream" },
      { src: "images2/Noodles.jpeg", caption: "N - Noodles" }
     
  ];

  // Dynamically load images into the slideshow
  imageList.forEach((image) => {
      $(".slideshow-container .slides").append(`
          <div class="slide">
              <img src="${image.src}" alt="${image.caption}">
              <div class="caption">${image.caption}</div>
          </div>
      `);
  });

  let currentSlide = 0;
  const slides = $(".slide");
  const totalSlides = slides.length;

  // Function to show a specific slide
  function showSlide(index) {
      slides.hide();
      $(slides[index]).fadeIn(300);
  }

  // Next/Previous navigation
  $(".next").click(function () {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
  });

  $(".prev").click(function () {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
  });

  // Initialize slideshow
  showSlide(currentSlide);
});