//ACTIVIDAD 1= EFECTO CAMBIO DE IMAGEN

let imagenPerfil= document.getElementById('imagenPerfil')

function mouseOver(){
    imagenPerfil.src="images/perfil2.jpg"
};
imagenPerfil.addEventListener('mouseover', mouseOver);

function mouseOut(){
    imagenPerfil.src="images/perfil.jpg"
};
imagenPerfil.addEventListener('mouseout', mouseOut);


//ACTIVIDAD 2= MOSTRAR MAS INFORMACION EN LA SECCION DE MY PORTFOLIO

let cardSuperpuesta= document.querySelectorAll('.card-oculta');
let btnMas= document.querySelectorAll('.btn-mas');
let btnCerrar= document.querySelectorAll('.btn-cerrar');


function mostrar() {
    //"this" hace referencia al botón que desencadenó el evento
    this.parentNode.nextElementSibling.classList.replace('card-oculta', 'card-superpuesta');
}

    //Itera sobre todos los botones "SABER MÁS" y agrega el event listener
btnMas.forEach(btn => {
    btn.addEventListener('click', mostrar);
});

function ocultar() {
    //"this" hace referencia al botón que desencadenó el evento
    this.parentNode.parentNode.classList.replace('card-superpuesta', 'card-oculta');
}

// Itera sobre todos los botones "CERRAR" y agrega el event listener
btnCerrar.forEach(btn => {
    btn.addEventListener('click', ocultar);
});


//ACTIVIDAD 3= MENSAJE ENVIADO CON EXITO EN FORMULARIO

let msjEnviado= document.getElementById('msjEnviado');

document.getElementById('formularios').addEventListener('submit', function(evento){
    
    evento.preventDefault();

    msjEnviado.style.color='#FF014F';
    msjEnviado.style.fontWeight='500';
    msjEnviado.style.backgroundColor='transparent';
    msjEnviado.innerText='Su mensaje fue enviado con éxito';

    //limpiar los campos del formulario
    document.getElementById('name').value="";
    document.getElementById('phone').value="";
    document.getElementById('email').value="";
    document.getElementById('subject').value="";
    document.getElementById('message').value="";
})


//ACTIVIDAD 4= SLIDER PARA LAS CARDS "WHAT I DO"

let slider= document.querySelector('.cont-features');
let sliderCards= document.querySelectorAll('.card-feature');
let prev= document.getElementById('prev');
let next= document.getElementById('next');

let index= 0; 

function tarjetasSlider(direccion) {
    index += direccion;  

    if (index< 0){  // si el indice es menor a 0, vuelve a la ultima
        index = sliderCards.length/3 -1;  //al total de cards lo divido por 3, para que la transicion sea en bloques de tarjetas de 3 elementos
    } else if (index>= sliderCards.length/3){ //cuando llega a la ultima, sigue el index 0
        index = 0
    }

    let desplazamiento = -index * 945; //calculo de desplazamiento horizontal. 895 xq ese es el width de 3 cards, con sus gap.
    slider.style.transform=`translateX(${desplazamiento}px)`
};
tarjetasSlider(0); //mostrar la primera imagen al cargar la pagina

