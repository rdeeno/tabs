var tabBtns = [...document.querySelectorAll('button')];
var tabContent = [...document.querySelectorAll('.tabcontent')];
var current = 0;
tabBtns.forEach(elm => {
    elm.addEventListener('click', tabChange)
})

function tabChange() {

    let index = tabBtns.indexOf(this)
    tabBtns[current].classList.remove('active')
    tabContent[current].classList.remove('visible');
    current = index;
    tabContent[index].classList.add('visible')
    tabBtns[index].classList.add('active')
}