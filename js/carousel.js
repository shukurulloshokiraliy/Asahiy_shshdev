document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");
  
    let currentIndex = 0;
    let slideInterval;
  
    function getVisibleSlides() {
      if (window.innerWidth >= 1024) return 3; 
      if (window.innerWidth >= 640) return 2;  
      return 1;                                
    }
  
    function updateCarousel() {
      const containerWidth = track.parentElement.getBoundingClientRect().width;
      const slideWidth = containerWidth / getVisibleSlides();
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    function nextSlide() {
      if (currentIndex < slides.length - getVisibleSlides()) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    }
  
    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slides.length - getVisibleSlides();
      }
      updateCarousel();
    }
  
    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, 2000);
    }
  
    function stopAutoSlide() {
      clearInterval(slideInterval);
    }
  
    nextButton.addEventListener("click", () => {
      nextSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  
    prevButton.addEventListener("click", () => {
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  
    updateCarousel();
    startAutoSlide();
    window.addEventListener("resize", updateCarousel);
  });
  