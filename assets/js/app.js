let entradaTexto = document.getElementById("entradaTexto");
let textoResultante = document.getElementById('textoResultante');

function criptografia(){
    
    const letras = ['enter', 'imes', 'ai' , 'ober', 'ufat'];

    let texto = entradaTexto.value;
    let encriptado = texto;
    
    if(limpandoCaracteresEspeciais(entradaTexto) != false){
        mantendoFoco();
        return alert('sem especiais');
    }
    

    if(estaVazio()){
        return alert('Não há nada para encriptar :/ ');
    }

    
    if(semLetrasMaisuculas()){
        mantendoFoco();
        return alert('Somente letras Maiusculas');
    }


    textoResultante.value = encriptado.replace(/e/g, letras[0]).replace(/i/g, letras[1]).replace(/a/g, letras[2]).
    replace(/o/g, letras[3]).replace(/u/g, letras[4]);

    esconderImagem();
    decodificadorAlternativoAjustis();
    amostrarBotao();

  if (textoResultante != null) {
    textoResultante.style.display = 'block';
  }

  telaCel();

}

function descriptografar(){
    let texto = entradaTexto.value;
    let encriptado = texto;
    
    textoResultante.value = encriptado.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').
    replace(/ober/g, 'o').replace(/ufat/g, 'u');

    esconderImagem();
    decodificadorAlternativoAjustis();
    amostrarBotao();
    telaCel();  
}

function semLetrasMaisuculas(){
    let maiuscula = entradaTexto.value;   
    let regex = new RegExp(/[A-Z]/);
    let result = regex.test(maiuscula);
    return result;
}

function limpandoCaracteresEspeciais(especiais){

    let regex = new RegExp(/[`',!]/);
    let result = regex.test(especiais.value);
    return result;    
}    

function estaVazio(){
    if(entradaTexto.value == '' || entradaTexto.value == null){
        return true;
    }    
}

function esconderImagem(){
    document.getElementById('img').style.display = 'none';
}

function decodificadorAlternativoAjustis(){
    document.querySelector('#textArea-Decodificador').style.display = 'none';
    document.querySelector('#paragrafo-ultimo-texto').style.display = 'none';
    document.getElementById('textoResultante').className = 'decodificador__alternativo__ajustando_posicao';
    document.getElementById('botaoCopiar').className = 'botao-reposicao';
}

function amostrarBotao(){
    if(textoResultante.value != null){
        document.getElementById("botaoCopiar").innerHTML = "<button class='botao' onclick='copiar()'>Copiar</button>"
    } 
}

function mantendoFoco(){
    entradaTexto.value = '';
    textoResultante.value = '';
    entradaTexto.focus();
}

function copiar(){
    textoResultante.select();
    document.execCommand("copy");
}

function semTextArea() {
    textoResultante.style.display = 'none'
    document.querySelector('#img').className = 'centralizar-conteudo-decodificador';
    document.querySelector('#textArea-Decodificador').className = 'decodificador__alternativo__titulo--posicao';
    document.querySelector('#paragrafo-ultimo-texto').className = 'decodificador__alternativo__titulo__paragrafo--posicao';
}

function telaCel(){
   if (window.matchMedia("(max-width: 480px)").matches) {
      document.querySelector('#decodificador__alternativo').className = 'decodificador__alternativo--tela__cel';
      document.querySelector('#textoResultante').className = 'decodificador__alternativo__texto--cel';
   }
}

window.addEventListener('load', semTextArea);