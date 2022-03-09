/*window.addEventListener('scroll',(event)=>{
	document.querySelector("#section").style.backgroundPositionY = window.scrollY * -0.7 + 'px';
})
console.log("hello")*/
/*$(window).on('load', (event) => {
      $(".wrapper").fadeOut("slow");
});*/
	
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// arrange the slides next to one another

//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';
const setSlidePosition  = (slide , index)=>{
      slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);
const moveToSlide = (track,currentSlide,targetSlide) => {

track.style.transform = `translateX(-${targetSlide.style.left} )`;
currentSlide.classList.remove('current-slide');
targetSlide.classList.add('current-slide');
}
const updateDots = (currentDot , targetDot) => {
currentDot.classList.remove('current-slide');
targetDot.classList.add('current-slide');
}
/*const hideShowArrows = (slides, prevButton,nextButton,targetIndex) => {
      
        if(targetIndex === 0){
            prevButton.classList.add('is_hidden');
            nextButton.classList.remove('is_hidden');
      } else if(targetIndex === slides.length -  1 ){
            prevButton.classList.remove('ishidden');
            nextButton.classList.add('ishidden');
      }
      else {
            prevButton.classList.remove('is_hidden');
              nextButton.classList.remove('is_hidden');
      }
}*/

// When I click left, move slides to the left
const slideEventPrev = () => {
     
      try {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.previousElementSibling;
            const currentDot = dotsNav.querySelector('.current-slide');
            const prevDot = currentDot.previousElementSibling;
      // Move the slide
     
      
     
      updateDots(currentDot, prevDot);
            moveToSlide(track, currentSlide, nextSlide);
      } catch (err) {
            if (err) {
                  const endBack = slides[slides.length-1];
             const currentSlide = slides[0];
            moveToSlide(track, currentSlide, endBack);
                  const currentDot = dots[0];
                  const nextDot = dots[dots.length - 1];
                  updateDots(currentDot, nextDot);
      }
}
}

// When I click left, move slides to the right
const slideEventNext = () => {
      
      try {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling;
            const currentDot = dotsNav.querySelector('.current-slide');
            const nextDot = currentDot.nextElementSibling;

            updateDots(currentDot, nextDot);
            moveToSlide(track, currentSlide, nextSlide);
      }
      // Move the slide
      catch (err) {
            if (err) {
                  const end = slides[0];
                  const current = slides[slides.length - 1];
                  moveToSlide(track, current, end);
                   const nextDot = dots[0];
                  const currentDot = dots[dots.length - 1];
                  updateDots(currentDot, nextDot);           
      }
      }
}
setInterval(slideEventNext, 10000);
// When I click the nav indicators, move  to that slide
dotsNav.addEventListener('click', e => {
      const targetDot = e.target.closest('button');
      if (!targetDot) { return };
      const currentSlide = track.querySelector('.current-slide');
      const currentDot = dotsNav.querySelector('.current-slide');
      const targetIndex = dots.findIndex(dot => dot === targetDot);
      const targetSlide = slides[targetIndex];
      moveToSlide(track, currentSlide, targetSlide);
      updateDots(currentDot , targetDot);
//      hideShowArrows(slides, prevButton, nextButton, targetIndex);
})
const container = document.querySelector('.welcome_background_page');
const layer =container.children;

container.onmousemove = function (e) {
      let X = e.pageX;
      let Y = e.pageY;
      layer[0].style.transform = `translate(${X / 150}px, ${Y / 150}px)`;
      layer[1].style.transform = `translate(${X / 100}px, ${Y / 100}px)`;
}

const navBar = document.querySelector('.navabar');
const button = document.querySelector('#button');
window.addEventListener('scroll', e => {
      const scroll = window.scrollY;
      
      return scroll > 0 ? navBar.classList.add('provisionary') : navBar.classList.remove('provisionary');
});
window.addEventListener('scroll', e => {
const scroll = window.scrollY;
      
      return scroll  ===  0 ? button.classList.add('extra') : button.classList.remove('extra');
})