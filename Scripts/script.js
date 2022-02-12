// JavaScript source code
var heroi = {
	nome: "Alast",
	vida: 140,
	poder: 30,
	defesa: 10,

	guarda: false,
	superdefesa: false,
};

var aquaman = {
	nome:"Aquaman",
	vida: 175,
	poder: 20,
	defesa:9,

	guarda: false,
	superAtaque: false,
	
};

var orc = { 
	nome: "Onyx",
	vida: 120,
	poder: 20,
	defesa: 6,

};

var chefao = {
	nome: "Chefao",
	vida: 140,
	poder:30,
	defesa:10,
};

var jogando = true;
var start_game = true;
var jogador = false;



function Main(){

	if(start_game){
		console.log("A batalha começa!");
		console.log("Um orc gigante apareceu!");
		console.log("Qual será o heroi?");
		console.log("1 - " + heroi.nome);
		console.log("2 - " + aquaman.nome);

		var jogadorp = prompt("Escolha o heroi");

		if(jogadorp == 1){
			jogador = false;
		}else if(jogadorp == 2){
			jogador = true;
		}

		start_game = false;
	}

	if(jogador == false){

		console.log(heroi.nome + " Qual a sua escolha?");
		console.log("1 - Atacar");
		console.log("2 - Defender");
		console.log("3 - Fugir?");
		
	}else if(jogador == true){

		console.log(aquaman.nome + " Qual a sua escolha?");
		console.log("1 - Atacar");
		console.log("2 - Defender");
		console.log("3 - Fugir?");
	
	}

	
	var escolha = prompt("Escolha a sua opção:");

	if(escolha == 1){

		if(jogador == true){
			console.log("1 - Ataque comum");
			console.log("2 - Super ataque");
		}
		habilidades = prompt("escolha a habilidade");
		Atacar();

	}else if(escolha == 2){
		if(jogador == false){
			console.log("1 - Defesa comum");
			console.log("2 - Super defesa ");
		}
		habilidades = prompt("escolha a habilidade");
		Defender();

	}else if(escolha == 3){
		Fugir();
	}

	if(orc.vida > 0){

		orcAtaca();

	}else if(orc.vida <= 0){
		
		var frase = true;
		
		if(frase == true){
			console.log("O orc " + orc.nome + " morreu, agora enfrente o chefao");
			frase = false;
		}

		chefaoAtaca();

	}

}

function Atacar(){

	if(jogador == false){
		console.log("O herói " + (heroi.nome) + " ataca!");
		orc.vida -= (heroi.poder - orc.defesa);
		console.log("O orc perdeu " + (heroi.poder - orc.defesa) + " de dano" );

		console.log("Vida do heroi e: " + heroi.vida);

	}

	if(jogador == true){
		if(habilidades == 1){

			console.log("O herói " + (aquaman.nome) + " ataca!");
			orc.vida -= (aquaman.poder - orc.defesa);
			console.log("O orc perdeu "  + (aquaman.poder - orc.defesa) + " de dano" );
			
		}else if(habilidades == 2){

			console.log("O herói " + (aquaman.nome) + " lanca seu super ataque!");
			orc.vida -= ((aquaman.poder*2) - orc.defesa);
			console.log("O orc perdeu " + (aquaman.poder - orc.defesa) + " de dano" );

			aquaman.superAtaque = true;

		}

		console.log("Vida do heroi e: " + aquaman.vida);
	}

	if(orc.vida <= 0){
		console.log("A vida do " +chefao.nome+" é: " + chefao.vida);
	}else if(orc.vida >0){
		console.log("A vida do "+orc.nome+" é: "+ orc.vida);
	}
}

function Defender(){

	if(jogador == false){

		if(habilidades == 1){

			heroi.guarda = true;
			console.log("O " + heroi.nome + " esta em guarda");
			console.log("Todo o dano é reduzido em 10");

		}else if(habilidades == 2){

			heroi.superdefesa = true;
			console.log("O " + heroi.nome + " esta em guarda");
			console.log("Todo o dano é reduzido em 15");
		}

		console.log("Vida do heroi e: " + heroi.vida);

	}else if(jogador == true){
		aquaman.guarda = true;
		console.log("O Aquaman esta em guarda");
		console.log("Todo o dano é reduzido em 10");
		console.log("Vida do heroi e: " + aquaman.vida);
	}

	if(orc.vida <= 0){
		console.log("A vida do " +chefao.nome+" e: " + chefao.vida);
	}else if(orc.vida >0){
		console.log("A vida do "+orc.nome+" e: "+ orc.vida);
	}

}

function Fugir(){
	console.log("Nosso heroi esta fugindo");
	console.log("Que vergonha!");
	jogando = false;
}

function orcAtaca(){

	console.log("O "+orc.nome+" ataca!");
	
	if(jogador == false){
		if(heroi.guarda == true){

			var dano = orc.poder - heroi.defesa - 10;

			if(dano >= 0 ){
				heroi.vida -= dano;
			}else if(dano < 0){
				heroi.vida += dano;
			}

			console.log("O heroi perdeu " + (dano) + " de vida.");
			heroi.guarda = false;

		}else if(heroi.superdefesa == true){

			var dano = orc.poder -heroi.defesa - 15 ;

			if(dano >= 0 ){
				heroi.vida -= dano;
			}else if(dano < 0){
				heroi.vida += dano;
			}

			console.log("O heroi perdeu " + (dano) + " de vida.");
			heroi.superdefesa = false;

		}else {
			var dano = orc.poder ;

			if(dano >= 0 ){
				heroi.vida -= dano;
			}else if(dano < 0){
				heroi.vida += dano;
			}

			console.log("O heroi perdeu " + (dano) + " de vida.");
		}

		if(heroi.vida <= 0){
			jogando = false;
			console.log("Fim de jogo, o heroi morreu");
		}
		
	}else if(jogador == true){

		if(aquaman.guarda == true){

		var dano = orc.poder - aquaman.defesa - 10 ;

		if(dano >= 0 ){
				heroi.vida -= dano;
			}else if(dano < 0){
				heroi.vida += dano;
			}

		console.log("O heroi perdeu " + (dano) + " de vida.");
		aquaman.guarda = false;

		}else {

			var dano = orc.poder;

			if(dano >= 0 ){
				heroi.vida -= dano;
			}else if(dano < 0){
				heroi.vida += dano;
			}
			console.log("O heroi perdeu " + (dano) + " de vida.");
		}

		if(aquaman.vida <= 0){
			jogando = false;
			console.log("Fim de jogo, o heroi morreu");
		}
	}

	console.log("Vida do heroi e: " + heroi.vida);

	if(orc.vida <= 0){
		console.log("A vida do " +chefao.nome+" e: " + chefao.vida);
	}else if(orc.vida >0){
		console.log("A vida do "+orc.nome+" e: "+ orc.vida);
	}

}

function chefaoAtaca(){

	console.log("O chefao ataca!");
	
	if(jogador == false){
		if(heroi.guarda == true){
			
			var dano = chefao.poder - heroi.defesa - 10;

			if(dano >= 0 ){
				heroi.vida -= dano;
			}else if(dano < 0){
				heroi.vida += dano;
			}

			console.log("O heroi perdeu " + (dano) + " de vida.");
			heroi.guarda = false;

		}else if(heroi.superdefesa == true){

			var dano = chefao.poder -heroi.defesa - 15 ;

			if(dano >= 0 ){
				heroi.vida -= dano;
			}else if(dano < 0){
				heroi.vida += dano;
			}

			console.log("O heroi perdeu " + (dano) + " de vida.");
			heroi.superdefesa = false;

		}else {
			var dano = chefao.poder ;

			if(dano >= 0 ){
				heroi.vida -= dano;
			}else if(dano < 0){
				heroi.vida += dano;
			}
			console.log("O heroi perdeu " + (dano) + " de vida.");
		}

		if(heroi.vida <= 0){
			jogando = false;
			console.log("Fim de jogo, o heroi morreu");
		}
		
	}else if(jogador == true){

		if(aquaman.guarda == true){

		var dano = chefao.poder - aquaman.defesa - 10 ;

		if(dano >= 0 ){
				heroi.vida -= dano;
			}else if(dano < 0){
				heroi.vida += dano;
			}

		console.log("O heroi perdeu " + (dano) + " de vida.");
		aquaman.guarda = false;

		}else {

			var dano = chefao.poder;

			if(dano >= 0 ){
				heroi.vida -= dano;
			}else if(dano < 0){
				heroi.vida += dano;
			}

			console.log("O heroi perdeu " + (dano) + " de vida.");

		}

		if(aquaman.vida <= 0){
			jogando = false;
			console.log("Fim de jogo, o heroi morreu");
		}
	}

	console.log("Vida do heroi e: " + heroi.vida);

	if(orc.vida <= 0){
		console.log("A vida do " +chefao.nome+" e: " + chefao.vida);
	}else if(orc.vida >0){
		console.log("A vida do "+orc.nome+" e: "+ orc.vida);
	}

}


while(jogando){
	Main();
	
}