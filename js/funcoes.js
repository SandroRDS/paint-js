var tela          = document.querySelector("canvas");
var paletaDeCores = document.querySelector("#cor");
var grossura      = document.querySelector("#grossura");
var desenhar = tela.getContext("2d");

var x, y;
var pinturaAtiva = false, borracha = false;


//FUNÇÃO: CAPTURAR A POSIÇÃO NA TELA QUE O USUÁRIO CLICOU
function capturarPosicao(evento)
{
    //ATRIBUINDO O VALOR DE X e Y COM AS COORDENADAS CAPTURADAS
    x = evento.pageX - tela.offsetLeft;
    y = evento.pageY - tela.offsetTop;

    //TESTANDO A CONDIÇÃO DE QUE O USUÁRIO ESTÁ COM O MOUSE PRESSIONADO
    if(pinturaAtiva)
    {
        desenharCirculo(x, y);
    }
}

//FUNÇÃO: DESENHAR UM CÍRCULO NA TELA
function desenharCirculo(x, y)
{
    desenhar.beginPath();
    desenhar.arc(x, y, grossura.value, 0, 2*Math.PI);
    desenhar.fill();
}

//FUNÇÃO: ATIVAR A BORRACHA
function ativarBorracha(valorLogico)
{
    if(valorLogico) //SE borracha == TRUE -> Cor do Desenho = Cor do Painel de Fundo 
    {
        desenhar.fillStyle = 'lightgray';
    }
   else //SENÃO -> Cor do Desenho = Cor Escolhida na Paleta de Cores
    {
        desenhar.fillStyle = paletaDeCores.value;
    }
}

//FUNÇÃO: VERIFICAR SE O USUÁRIO NÃO COLOCOU UM VALOR NEGATIVO NO CAMPO DE GROSSURA
function verificarGrossura()
{
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

document.getElementById("grossura").onchange = verificarGrossura;