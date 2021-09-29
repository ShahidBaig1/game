let heading = document.getElementById("h");
heading.innerHTML = "Lets Play The Game";

let options = document.getElementById("options");
let btn_play = document.getElementById("btn_play");
let result = document.getElementById("output");
let result1 = document.getElementById("output1");
let result2 = document.getElementById("output2");
const systemOptions = ["rock", "scissor", "paper"];

function play(playerChoice, systemChoice) {
  if (playerChoice === "rock") {
    if (systemChoice === "scissor") {
      return "Won";
    } else if (systemChoice === "paper") {
      return "Lose";
    }
    return "Tie";
  } else if (playerChoice === "scissor") {
    if (systemChoice === "paper") {
      return "Won";
    } else if (systemChoice === "rock") {
      return "Lose";
    }
    return "Tie";
  } else if (playerChoice === "paper") {
    if (systemChoice === "rock") {
      return "Won";
    } else if (systemChoice === "scissor") {
      return "Lose";
    }
    return "Tie";
  }
  return "Over";
}

btn_play.addEventListener("click", function () {
  let player_choice = options.value;
  //   console.log(player_choice);
  const choiceNumber = Math.floor(Math.random() * 3);
  const computerChoice = systemOptions[choiceNumber];
  let game_result = play(player_choice, computerChoice);
  result1.innerHTML = computerChoice;
  result2.innerHTML = player_choice;
  result.innerHTML = game_result;
});
