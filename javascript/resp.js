burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navbarlist = document.querySelector('.navbarlist')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('vclass');
    navbarlist.classList.toggle('vclass');
    navbar.classList.toggle('hnav');
})


const appearOptions = {
    rootMargin: "0px 0px -200px 0px"

};

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll(".slide-in");

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  
  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });
