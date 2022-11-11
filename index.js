const roll = () => {
  const randomNum1 = Math.floor(Math.random() * 6) + 1;

  const randomNum2 = Math.floor(Math.random() * 6) + 1;

  if (randomNum1 > randomNum2) {
    document.querySelector(".header").textContent = "Player 1 Wins😉";
  } else if (randomNum2 > randomNum1) {
    document.querySelector(".header").textContent = "Player 2 Wins😉";
  } else {
    document.querySelector(".header").textContent = "It's a Draw match";
  }
  for (var i = 1; i <= randomNum1; i++) {
    if (randomNum1 === i) {
      document.querySelector("#img-1").src = "images/dice" + i + ".png";
    }
  }
  for (var i = 1; i <= randomNum2; i++) {
    if (randomNum2 === i) {
      document.querySelector("#img-2").src = "images/dice" + i + ".png";
    }
  }
};
document.querySelector(".btn").addEventListener("click", roll);
