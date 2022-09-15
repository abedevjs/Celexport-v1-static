
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

////////////////////////////////////////////////////////////////////////////////////////////

window.onscroll = function () { myFunction() };

// Get the header
var about = document.getElementById('about');

// Get the offset position of the navbar
var onTop = about.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > onTop) {
    //document.querySelector('.sticky').style.opacity = '.8';
    document.querySelector('.sticky').style.visibility = 'visible';
  } else {
    //document.querySelector('.sticky').style.opacity = '0';
    document.querySelector('.sticky').style.visibility = 'hidden';
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 
const slides = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const slider = document.querySelector('.slider');
let currSlide = 0;
const maxSlide = slides.length;

// slider.style.transform = 'scale(0.2)';
// slider.style.transform = 'scale(0.5)';

const goToSlide = function (slide) {
  slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
};

goToSlide(0);

//Next Slide
const nextSlide = function () {
  if (currSlide === maxSlide - 1)
    currSlide = 0
  else
    currSlide++

  goToSlide(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0)
    currSlide = maxSlide - 1;
  else
    currSlide--;

  goToSlide(currSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
})
////////////////////////////////////////////////////////////////////////////////////////////////
//