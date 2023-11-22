const botones = document.getElementById('buttons');
const pantalla = document.getElementById('semaforo-img');


function semaforoLuz(e){
    colores.forEach(function (item){
        if (item.id == e.target.textContent){
            pantalla.src = item.imagen;
        }
    } )

}
botones.addEventListener('click', semaforoLuz)


 