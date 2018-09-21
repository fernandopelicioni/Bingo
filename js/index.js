var dom = {
  number: document.querySelector(".elemNumber"),
  button: document.querySelector(".elemButton"),
  Cartao1: document.querySelector(".Cartao1"),
  Cartao2: document.querySelector(".Cartao2"),
  bingo: document.querySelector(".elemBingo") };


var numberRange = _.shuffle(_.range(1, 76));

var newNumber = function newNumber() {
  var number = numberRange.shift();

  dom.number.textContent = String(number);

  checkNumber(number);
  checkWinner();
};

var criarNumerosCartao = function criarNumerosCartao() {
  var playerNumber = _.shuffle(_.range(1, 76));

  playerNumber = playerNumber.splice(0, 25);
  return playerNumber;
};

var jogador1numeros = criarNumerosCartao();
var jogador2numeros = criarNumerosCartao();

var checkNumber = function checkNumber(number) {
  if (jogador1numeros.includes(number) || jogador2numeros.includes(number)) {
    var playerCheck = document.querySelector(".Cartao1 .number" + number);
    var cpuCheck = document.querySelector(".Cartao2 .number" + number);

    if (playerCheck != null) {
      playerCheck.classList.add("checked");
      _.pull(jogador1numeros, number);
    }
    if (cpuCheck != null) {
      cpuCheck.classList.add("checked");
      _.pull(jogador2numeros, number);
    }
  }
};

var createCard = function createCard() {
  for (var i in _.range(1, 26)) {
    var jogador1DivNumber = document.createElement("div");
    var jogador2DivNumber = document.createElement("div");

    jogador1DivNumber.className = "number number" + jogador1numeros[i];
    jogador2DivNumber.className = "number number" + jogador2numeros[i];

    jogador1DivNumber.textContent = "" + jogador1numeros[i];
    jogador2DivNumber.textContent = "" + jogador2numeros[i];

    dom.Cartao1.appendChild(jogador1DivNumber);
    dom.Cartao2.appendChild(jogador2DivNumber);
  }
};

var checkWinner = function checkWinner() {
  var winner = document.createElement("div");
  winner.className = "winner";

  if (jogador1numeros.length == 0 && jogador2numeros.length == 0) {
    dom.button.remove();

    winner.textContent = "Empate!!";
    dom.bingo.appendChild(winner);
  } else if (jogador1numeros.length == 0) {
    dom.button.remove();

    winner.textContent = "BINGO PARA Fernando!";
    dom.bingo.appendChild(winner);
  } else if (jogador2numeros.length == 0) {
    dom.button.remove();

    winner.textContent = "BINGO PARA Windows (Maquina)!";
    dom.bingo.appendChild(winner);
  }
};

createCard();