import readlineSync from 'readline-sync';

function computerPlay() {
  const moves = ['камень', 'ножницы', 'бумага'];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Ничья!";
  } else if (
    (playerSelection === "камень" && computerSelection === "ножницы") ||
    (playerSelection === "ножницы" && computerSelection === "бумага") ||
    (playerSelection === "бумага" && computerSelection === "камень")
  ) {
    return "Вы выиграли!";
  } else {
    return "Компьютер выиграл!";
  }
}


function game() {
  console.log("Добро пожаловать в игру 'Камень, Ножницы, Бумага'!");

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = readlineSync.question(
      "Выберите: камень, ножницы или бумага: "
    );
    
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    console.log(`Вы выбрали: ${playerSelection}`);
    console.log(`Компьютер выбрал: ${computerSelection}`);
    console.log(`Результат: ${result}`);

    if (result === "Вы выиграли!") {
      playerScore++;
    } else if (result === "Компьютер выиграл!") {
      computerScore++;
    }
  }

  console.log("***** Итог игры *****");
  console.log(`Вы: ${playerScore} побед(ы)`);
  console.log(`Компьютер: ${computerScore} побед(ы)`);

  if (playerScore > computerScore) {
    console.log("Вы выиграли игру!");
  } else if (playerScore < computerScore) {
    console.log("Компьютер выиграл игру!");
  } else {
    console.log("Игра закончилась вничью.");
  }
}

game();
