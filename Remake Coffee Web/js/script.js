let searchForm = document.querySelector('.search-form');
let navBar = document.querySelector('.navbar');
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');
    cartItem.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}