
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

var criaMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?', ''); //estamos substituindo o caracter '?' para um caracter vazio ''

if(nivel === 'normal'){
	criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
	criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
	criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
	 altura = window.innerHeight;
	 largura = window.innerWidth;

	 console.log(largura, altura);
}

	ajustaTamanhoPalcoJogo()

	var cronometro = setInterval(function(){

		tempo -= 1;

		if(tempo < 0){
			clearInterval(cronometro);
			clearInterval(criaMosquito);
			window.location.href = 'vitoria.html';
		}else{
			document.getElementById('cronometro').innerHTML = tempo; //innerHTML: valor contido entre as tags, está dentro
		}
	}, 1000)

	function posicaoRandomica(){

	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove();

		//console.log('elemento selecionado foi: v' + vidas);
		if(vidas > 3){
			window.location.href = 'fim_de_jogo.html';
		}else{
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";

			vidas++ //estamos pegando dinamicamente o elemento atraves de variavel vidas = 1 com a 'v'.. entao ele passa a valer v2, v3 com o acrescimo do vidas++
		}
	}
	

	var posicaoX = Math.floor(Math.random() * largura) - 90;
	var posicaoY = Math.floor(Math.random() * altura) - 90;

	posicaoX = posicaoX < 0 ? 0 : posicaoX;
	posicaoY = posicaoY < 0 ? 0 : posicaoY;

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img');
	mosquito.src = 'imagens/mosquito.png';
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() // é necessario um espaço para q o interpretador compreenda q são classes diferentes
	mosquito.style.left = posicaoX + 'px';
	mosquito.style.top = posicaoY + 'px';
	mosquito.style.position = 'absolute';
	mosquito.id = 'mosquito';
	mosquito.onclick = function(){ //como a função está associada a o elemento html, eu posso usar o elemento this
		this.remove() //this: está fazendo referencia ao proprio elemento html q executa a função
	}

	document.body.appendChild(mosquito) //estamos incluindo o elemento criado no body da pagina


	}
	
	function tamanhoAleatorio(){
		var classe = Math.floor(Math.random() * 3); 
		
		switch(classe){
			case 0:
				return 'mosquito1'

			case 1:
				return 'mosquito2'

			case 2:
				return 'mosquito3'
		}
	}

	function ladoAleatorio(){
		var classe = Math.floor(Math.random() * 2); //o resultado randomico será entre 0 e 1. 

		switch(classe){
			case 0:
			return 'ladoA'

			case 1:
			return 'ladoB'
		}
	}