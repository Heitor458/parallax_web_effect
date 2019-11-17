function parallax(){
    // Declarando Variaveis 
    var layer_1 = document.getElementById('layer_1');
    var layer_2 = document.getElementById('layer_2');
    var layer_3 = document.getElementById('layer_3');
    var layer_4 = document.getElementById('layer_4');
    var layer_5 = document.getElementById('layer_5');
    // Aplicando a posição 
    layer_1.style.top = - (window.pageYOffset / 3) + 'px';
    layer_2.style.top = - (window.pageYOffset / 6) + 'px';
    layer_3.style.top = - (window.pageYOffset / 7) + 'px';
    layer_4.style.top = - (window.pageYOffset / 7) + 'px';
    layer_5.style.top = - (window.pageYOffset / 3) + 'px';
}
window.addEventListener("scroll",parallax,false)