//jshint esversion:6
$(window).on('load', (event) => {
        $('.bdy').fadeOut('slow');
  });
let hamburger = document.querySelector('#hamburger'),
     navlinks = document.querySelector('#navlinks'),
     line = hamburger.querySelector('#line'),
     line2 = hamburger.querySelector('#line2');

hamburger.addEventListener('click', ()=>{
    return (navlinks.classList.contains('hidden')) ? 
            (navlinks.classList.remove('hidden'),
            line.classList.add('absolute','rotate-45'),
            line2.classList.add('absolute','-rotate-45'),
            line2.classList.remove('mt-2'))
    :
        (navlinks.classList.add('hidden'),
        line.classList.remove('absolute','rotate-45'),
        line2.classList.remove('absolute','-rotate-45'),
        line2.classList.add('mt-2'));

});

const sections = document.querySelectorAll('section'),
        navlist = document.querySelectorAll('nav .container ul li');
        window.addEventListener('scroll',()=>{
                let current = '';
                sections.forEach(section => {
                        const sectionTop = section.offsetTop;
                        const sectionHeight = section.clientHeight;
                        return (pageYOffset >= (sectionTop - sectionHeight / 3)) ? 
                                current = section.getAttribute('id')
                        :
                                current;
                        
                });
                navlist.forEach(li=>{
                        li.classList.remove('active');
                        if(li.classList.contains(current)){
                                li.classList.add('active');
                        }
                });
        });
        let link = document.querySelectorAll('#navlinks ul li a');
        link.forEach(li=>{
                li.addEventListener('click',()=>{
                        return (navlinks.classList.contains('hidden')) ? 
                        (navlinks.classList.remove('hidden'),
                        line.classList.add('absolute','rotate-45'),
                        line2.classList.add('absolute','-rotate-45'),
                        line2.classList.remove('mt-2'))
                :
                    (navlinks.classList.add('hidden'),
                    line.classList.remove('absolute','rotate-45'),
                    line2.classList.remove('absolute','-rotate-45'),
                    line2.classList.add('mt-2'));
                });
        });
      