var box = document.querySelector(".box");
var popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

box.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});