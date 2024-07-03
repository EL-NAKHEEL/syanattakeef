
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
/*end counter*/
// start slide




const slides = document.querySelector('.slides');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const cardWidth = document.querySelector('.card').offsetWidth;
let currentIndex = 0;

function showSlide(index) {
    slides.style.transform = `translateX(${-index * cardWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % (document.querySelectorAll('.card').length-3);
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + document.querySelectorAll('.card').length) % (document.querySelectorAll('.card').length-3);
    showSlide(currentIndex);
  
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto slide
setInterval(nextSlide, 3000);
// end slide 
//navbar
const header = document.querySelector("header");
    const hamburgerBtn = document.querySelector("#hamburger-btn");
    const closeMenuBtn = document.querySelector("#close-menu-btn");

    // Toggle mobile menu on hamburger button click
    hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

    // Close mobile menu on close button click
    closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
//end navbar

var date = new Date().getFullYear();
var html_p = document.querySelector(".footerBottom p").innerHTML = `Copyright &copy;${date}` ;

