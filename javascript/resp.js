burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navbarlist = document.querySelector('.navbarlist')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('vclass');
    navbarlist.classList.toggle('vclass');
    navbar.classList.toggle('hnav');
})
