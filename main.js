let search = Document.queryselector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classlist.toggle('active');
    menu.classlist.remove('active');
}
let menu = Document.queryselector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classlist.toggle('active');
    search.classlist.remove('active');
}
window.onscroll = () => {
    menu.classlist.remove('active');
    search.classlist.remove('active'); 
}
let header = document.querySelector('header');

window.addEventListener('scroll' , () =>{
    header.classList.remove('shadow', window.scrollY > 0);
});