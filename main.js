let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountain3 = document.getElementById("mountain3");
let mountain4 = document.getElementById("mountain4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let dreams = document.querySelector(".dreams");
let main = document.querySelector(".main");
let menu = document.querySelector('.menu')
let content = document.querySelector('.content')
window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 4 + "px";
    mountain3.style.top = value * 2 + "px";
    mountain4.style.top = value * 1.5 + "px";
    river.style.top = value + "px";
    boat.style.top = value + "px";
    boat.style.left = value * 3 + "px";
    dreams.style.fontSize = value + "px";
    if (value >= 80) {
        dreams.style.fontSize = 80 + "px";
        dreams.style.position = "fixed";
        if (value >= 558) {
            dreams.style.display = "none";
        } else {
            dreams.style.display = "block";
        }
    }
    if (value >= 174) {
        main.style.background =
            "linear-gradient(#376281 , rgb(26, 2, 40))";
    }else{
        main.style.background =
        "linear-gradient(rgb(66, 12, 95) , rgb(26, 2, 40))";
    }
};
menu.onclick=function(){
    document.querySelector('ul').classList.toggle('open')
}
main.onclick=function(){
    document.querySelector('ul').classList.remove('open')
}
content.onclick=function(){
    document.querySelector('ul').classList.remove('open')
}
