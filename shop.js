let searchform = document.querySelector('.search-form');
const section = document.querySelector('#products');
document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    section.scrollIntoView({ behavior: 'smooth'});
    login.classList.remove('active');
    navbar.classList.remove('active');
}
/*let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchform.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}*/
let login = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    login.classList.remove('active');
}
window.onscroll = () =>{
    searchform.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}
var swiper = new Swiper(".product-slider", {
    loop:true,
    centeredSlides: false,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
function search() {
  let filter = document.getElementById('search-box').value.toUpperCase();

  let item = document.querySelectorAll('.sam');

  let l = document.getElementsByTagName('h3');

  for(var i = 0;i<=l.length;i++){
    let a = item[i].getElementsByTagName('h3')[0];
    let value = a.innerHTML || a.innerText || a.textContent;
    if(value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display="";
    }
    else{
      item[i].style.display="none";
    }
  }
}