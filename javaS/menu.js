const menu = document.querySelector('.menu');
const menuV = document.querySelector('.menu-navegacion');
//console.log(menu)
//console.log(menuV)

menu.addEventListener('click', () => {
    menuV.classList.toggle("spread")
})
window.addEventListener('click', e => {
    if (menuV.classList.contains('spread') && e.target != menuV && e.target != menu) {
        menuV.classList.toggle("spread");
    }
})