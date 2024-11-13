// Idades: 18 anos, 14 anos, livre
// Gêneros: Terror, Ação, Ficção e Romance

// Idade 18 anos:
// Terror - O Farol
// Ação - La Casa de Papel
// Ficção - Centopéia Humana
// Romance - 50 Tons de Cinza

// Idade 14 anos:
// Terror - Invocação do Mal
// Ação - Velozes e Furiosos 10
// Ficção - Moonfall
// Romance - A Culpa é das Estrelas

// Idade livre:
// Terror - A Casa Monstro
// Ação - Hot Whels
// Ficção - Megamente
// Romance - A Bela e a Fera

let campoIdade; 

function setup() {
  createCanvas(600, 400);
  createElement('h1', 'Recomendador de Filmes e Séries');
  createSpan('Idade:');
  campoIdade = createInput();
  campoTerror = createCheckbox('Terror');
  campoAcao = createCheckbox('Acao');
  campoFiccao = createCheckbox('Ficcao');
  campoRomance = createCheckbox('Romance');

}

function draw() {
  background('darkblue');
  textAlign(CENTER, CENTER);
  textSize(40);
  fill('white');
  
  let idade = campoIdade.value();
  let terror = campoTerror.checked();
  let acao = campoAcao.checked();
  let ficcao = campoFiccao.checked();
  let romance = campoRomance.checked();
  
  let filme = geraRecomendacao(terror, accao, romance, ficcao);
  
  text(filme, width/2, height/2);

}

function geraRecomedacao(idade){
 }if(idade >= 18){
    if(terror){
    return 'O Farol'
    }else if(acao){
      return 'La Casa de Papel'
    }else if(ficcao){
      return 'Centopeia Humana'
    }else if(romance){
      return '50 Tons de Cinza'
    }else{  
      return 'La Casa de Papel'
}
 }else if(idade >= 14)
   if(terror){
    return 'Invocação do Mal'
    }else if(acao){
      return 'Velozes e Furiosos 10'
    }else if(ficcao){
      return 'Moonfall'
    }else if(romance){
      return 'A Culpa é das Estrelas'
    }else{  
      return 'Velozes e Furiosos 10'
}

}else if{
   if(terror){
    return 'A Casa Monstro'
    }else if(acao){
      return 'Hot Wheels'
    }else if(ficcao){
      return 'Megamente'
    }else if(romance){
      return 'A Bela e a Fera'
    }else{  
      return 'Hot Wheels'
    }
   
