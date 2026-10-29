const hambutton = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');

//Toggle the show class off and on
hambutton.addEventListener('click', () =>{
    nav.classList.toggle('show');
    hambutton.classList.toggle('show');
})
