var box = document.querySelector(".upper-box");
var popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

box.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});

var box1 = document.querySelector(".upper-box-1");
var popup1 = document.querySelector(".pop1");
const close1 = document.querySelector(".pop1000");

box1.addEventListener('click', () => {
    popup1.style.display = 'block';
});

close1.addEventListener('click', () => {
    popup1.style.display = 'none';
});

var buyButton = document.querySelector(".buy");
var card = document.querySelector(".shop-items");

buyButton.addEventListener('click',()=>{
    
    card.innerHTML += '<li>3D wall paper brick</li>';
  
});