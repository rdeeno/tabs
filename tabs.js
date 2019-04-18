var tabBtn = [...document.querySelectorAll('button')];
var tabContent = [...document.querySelectorAll('.tabcontent')];
var current = 0;
var clicked;
tabBtn.forEach(elm => {
    elm.addEventListener('click', tabChange)
})

function tabChange(e) {
    var target = e.target;

    clicked = tabBtn.indexOf(target)
    tabContent[current].classList.remove('visible')
    tabBtn[current].classList.remove('active')
    current++
    if (current >= tabContent.length) {
        current = clicked;
    }
    tabContent[current].classList.add('visible')
    tabBtn[current].classList.add('active')
}