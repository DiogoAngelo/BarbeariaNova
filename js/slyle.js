document.querySelector('.abrir').onclick = function() {
    document.documentElement.classList.add('show-menu');
}
document.querySelector('.fechar').onclick = function() {
    document.documentElement.classList.remove('show-menu');
}