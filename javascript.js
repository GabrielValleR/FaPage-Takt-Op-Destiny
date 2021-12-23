var image=[];
var slide;
var imgAtual;
var imgMax;
var time;


function preCarregamento(){
    var indice=1;
    for(var i=0; i<5; i++){
        image[i]= new Image();
        image[i].src="./slide1/image"+ indice +".jpg";
        indice++;
    }

}

function carregarImage(img){
    slide.style.backgroundImage="url('"+image[img].src+"')";
}

function trocaImage(){
    imgAtual++;
    if(imgAtual>imgMax){
        imgAtual=0;

    }
    carregarImage(imgAtual);
}



//Inicialização de Eventos
function addEvents(){
    preCarregamento();
    imgAtual=0;
    imgMax =image.length;
    slide = document.getElementById("divSlider");
    carregarImage(imgAtual);
    time=setInterval(trocaImage,2000);
}
window.addEventListener("load",addEvents);