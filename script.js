let lampada = document.querySelector("#lampada");
let btnLigar = document.querySelector("#ligar");
let btnDesligar = document.querySelector("#desligar");
let img = document.querySelector("#img");
var fusivel = 0;
let quebrado = false

lampada.addEventListener("click", ligou); // ligar a lâmpada ao clicar na mesma.
btnLigar.addEventListener("click", ligou); // interação botão - lampada
btnDesligar.addEventListener("click", desligou); // interação botão - lampada

lampada.addEventListener("mouseover", ligou);
lampada.addEventListener("mouseleave", desligou);

function ligou(){
    if(fusivel > 2){
        lampada.src = 'quebrada.jpg';
        quebrado = true;
    } else {
        lampada.src = 'ligada.jpg';
    }
}

function desligou(){
    if (quebrado==true){
        lampada.src = 'quebrada.jpg';
    } else {
        lampada.src = 'desligada.jpg';
        fusivel++;
    }
}