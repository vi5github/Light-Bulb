let btn = document.querySelector(".switch");
let bulbtop = document.querySelector(".bulb-top");
let bulbbottom = document.querySelector(".bulb-bottom");
btn.addEventListener("click", function () {
    btn.classList.toggle("on");
    if (btn.classList.contains("on")) {
        bulbtop.classList.add("bulb-on");
        bulbbottom.classList.add("bulb-on");
    } else {
        bulbtop.classList.remove("bulb-on");
        bulbbottom.classList.remove("bulb-on");
    }
});