const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else {
    console.log("Error en el dato");
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  switch (randomNumber) {
    case 0:
        return "rock";
      break;
    case 1:
        return "paper";
      break;
    case 2:
        return "scissors";
      break;
    default:
        console.log("Error en el dato");
      break;
  }
};

console.log(getComputerChoice ());

const determineWinner = (UserChoice,ComputerChoice) => {
    if (ComputerChoice === UserChoice) {
        return "tie";
      };
    if (UserChoice === "rock") {
        if (ComputerChoice === "paper") {
            return "Computer Won";
        } else {
            return "You Won";
        };
    };
    if (UserChoice === "paper") {
        if (ComputerChoice === "scissors") {
            return "Computer Won";
        } else {
            return "You Won";
        };
    };
    if (UserChoice === "scissors") {
        if (ComputerChoice === "rock") {
            return "Computer Won";
        } else {
            return "You Won";
        };
    };
};

console.log(determineWinner("rock","scissors"));
console.log(determineWinner("rock","paper"));
console.log(determineWinner("rock","rock"));

function playGame() {
    let UserChoice = getUserChoice("rock");
    // const UserChoice = prompt("Ingresa piedra, papel o tijera").toLowerCase();
    let ComputerChoice = getComputerChoice();
    alert(UserChoice);
    alert(ComputerChoice);
    alert(determineWinner(UserChoice,ComputerChoice));
}

playGame();
