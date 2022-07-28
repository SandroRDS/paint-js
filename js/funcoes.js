var tela = document.querySelector("canvas");
var desenhar = tela.getContext("2d");
var paletaDeCores = document.querySelector("#cor");
var grossura = document.querySelector("#grossura");
var x, y;
var pinturaAtiva = false, borracha = false;

function ativarBorracha(valor)
{
    if(valor)
    {
        desenhar.fillStyle = 'lightgray';
    }
    else
    {
        desenhar.fillStyle = paletaDeCores.value;
    }
}

function capturarPosicao(evento)
{
    x = evento.pageX - tela.offsetLeft;
    y = evento.pageY - tela.offsetTop;
    
    if(pinturaAtiva)
    {
        desenharCirculo();
    }
}

function desenharCirculo()
{
    desenhar.beginPath();
    desenhar.arc(x, y, grossura.value, 0, 2*Math.PI);
    desenhar.fill();
}

function verificar()
{
    var grossura = document.querySelector("#grossura");
    if(grossura.value < 1)
    {
        grossura.value = 1;
    }
}

tela.onmousemove = capturarPosicao;

tela.onclick = desenharCirculo;

tela.onmousedown = function(){
    pinturaAtiva = true;
};

tela.onmouseup = function(){
    pinturaAtiva = false;
};

tela.onmouseout = function(){
    pinturaAtiva = false;
};

paletaDeCores.onchange = function(){
    desenhar.fillStyle = paletaDeCores.value;
}

document.getElementById("grossura").onchange = verificar;