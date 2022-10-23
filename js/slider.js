let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");

let container = document.querySelector(".destinations__gallery");
let photo_list = document.querySelector(".gallery__list");
let liOne = document.querySelector(".gallery__item");
let lis = document.querySelectorAll(".gallery__item");
let img = document.querySelector(".gallery__img");


const itemWidth = liOne.clientWidth;
const containerWidth = container.clientWidth;
const photo_listWidth= itemWidth*photo_list.children.length;
let position = 0;


container.style.width = `${3*itemWidth}px`;

arrowLeft.onclick = function() {
position +=itemWidth;
if (position>0) position -=  itemWidth;
photo_list.style.transform = `translateX(${position}px)`;
}

arrowRight.onclick = function() {
position -=itemWidth;
if (Math.abs(position)+2*itemWidth> photo_listWidth) {
position = -(photo_listWidth-itemWidth);
}


photo_list.style.transform = `translateX(${position}px)`;

}

