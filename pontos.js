//variaveis pontos

let meusPontos = 0;

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,255,10)
  text (meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){ 
    meusPontos += 1;
    somDoPonto.play();
  voltaAtorParaPosicaoInicial()}
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}