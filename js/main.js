//jshint esversion:6
$(window).on('load', (event) => {
      $(".wrapper").fadeOut("slow");
});

const track = document.querySelector('.carousel__track'),
      slides = Array.from(track.children),
      nextButton = document.querySelector('.carousel_button--right'),
       prevButton = document.querySelector('.carousel_button--left'),
        dotsNav = document.querySelector('.carousel__nav'),
      dots = Array.from(dotsNav.children),
      slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {

      track.style.transform = `translateX(-${targetSlide.style.left} )`;
      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove('current-slide');
      targetDot.classList.add('current-slide');
};

// When I click left, move slides to the left

const slideEventPrev = () => {

      try {
            const currentSlide = track.querySelector('.current-slide'),
                  nextSlide = currentSlide.previousElementSibling,
                  currentDot = dotsNav.querySelector('.current-slide'),
                  prevDot = currentDot.previousElementSibling;
            // Move the slide
            updateDots(currentDot, prevDot);
            moveToSlide(track, currentSlide, nextSlide);
      } catch (err) {
            if (err) {
                  const endBack = slides[slides.length - 1],
                        currentSlide = slides[0],
                        currentDot = dots[0],
                        nextDot = dots[dots.length - 1];
                  moveToSlide(track, currentSlide, endBack);
                  updateDots(currentDot, nextDot);
            }
      }
};

// When I click left, move slides to the right
const slideEventNext = () => {

      try {
            const currentSlide = track.querySelector('.current-slide'),
                  nextSlide = currentSlide.nextElementSibling,
                  currentDot = dotsNav.querySelector('.current-slide'),
                  nextDot = currentDot.nextElementSibling;
            updateDots(currentDot, nextDot);
            moveToSlide(track, currentSlide, nextSlide);
      }
      // Move the slide
      catch (err) {
            if (err) {
                  const end = slides[0],
                        current = slides[slides.length - 1],
                        nextDot = dots[0],
                        currentDot = dots[dots.length - 1];
                  moveToSlide(track, current, end);
                  updateDots(currentDot, nextDot);
            }
      }
};
setInterval(slideEventNext, 10000);
// When I click the nav indicators, move  to that slide
dotsNav.addEventListener('click', e => {
      const targetDot = e.target.closest('button'),
            currentSlide = track.querySelector('.current-slide'),
            currentDot = dotsNav.querySelector('.current-slide'),
            targetIndex = dots.findIndex(dot => dot === targetDot),
            targetSlide = slides[targetIndex];
      moveToSlide(track, currentSlide, targetSlide);
      updateDots(currentDot, targetDot);
      //      hideShowArrows(slides, prevButton, nextButton, targetIndex);
});
const container = document.querySelector('.welcome_background_page'),
 layer = container.children;

container.onmousemove = (e) => {
      let X = e.pageX,
            Y = e.pageY;
      layer[0].style.transform = `translate(${X / 150}px, ${Y / 150}px)`;
      layer[1].style.transform = `translate(${X / 100}px, ${Y / 100}px)`;
};

const navBar = document.querySelector('.navabar'),
 button = document.querySelector('#button');
window.addEventListener('scroll', e => {
      const scroll = window.scrollY;

      return scroll > 0 ? navBar.classList.add('provisionary') : navBar.classList.remove('provisionary');
});
window.addEventListener('scroll', e => {
      const scroll = window.scrollY;
      return scroll === 0 ? button.classList.add('extra') : button.classList.remove('extra');
});

const openModalButtons = document.querySelectorAll('[data-modal-target]'),
 closeModalButtons = document.querySelectorAll('[data-close-button]'),
 overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
      });
});
closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
      });
});

function openModal(modal) {
      if (modal == null) return  
      modal.classList.add('active');
      overlay.classList.add('active');
}

function closeModal(modal) {
      if (modal == null) return 
      modal.classList.remove('active');
      overlay.classList.remove('active');
}

const sidebar = document.querySelector(".sidebar"), toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
});