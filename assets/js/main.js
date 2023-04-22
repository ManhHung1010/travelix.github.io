const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Header sticky
var headerSticky = $(".header__nav");
var topBar = $(".header__topbar");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        headerSticky.classList.add("scroll");
        topBar.classList.add("hide");
    } else {
        headerSticky.classList.remove("scroll");
        topBar.classList.remove("hide");
    }
}

// Active link header
var listLink = location.href;
var listItem = $$(".header__nav__container--list li");
var listLength = listItem.length;

var i = 0;
for (i; i < listLength; i++) {
    if (listItem[i].href === listLink) {
        listItem[i].className = "active";
    }
}


var searchIcon = $("#search");
var input = $(".header__nav__container--search input");

searchIcon.onclick = function() {
    input.classList.toggle("active");
};
// Header menu modal

var box = $(".header__menu__overlay");
var boxBody = $(".header__menu__body--content");
var open = $("#menu-open");
var close = $("#menu-close");

open.onclick = function() {
    box.style.display = "block";
    boxBody.classList.add("open");
};

close.onclick = function() {
    box.style.display = "none";
    boxBody.classList.remove("open");
};




