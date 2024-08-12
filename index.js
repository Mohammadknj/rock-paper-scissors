document.getElementById("names").style.display = "none";
const choices = document.querySelectorAll(".image");
const picture_sources = [3];
for (let i = 0; i < 3; i++) {
  picture_sources[i] = document.getElementById("Objects").children[i].src;
}
const WinRate = 5;
let scoreboard = 0;
document.getElementById("text").textContent +=
  "(" + WinRate + " points to win)";
let UserPoint = document.getElementById("UserPoint").textContent;
let CPUpoint = document.getElementById("CPUpoint").textContent;
let rand_chosen = Number(Math.floor(Math.random(0, 3) * 3));
for (let num = 0; num < 3; num++) {
  choices[num].addEventListener("click", () => {
    let CPUchosen = choices[rand_chosen].src;
    document.getElementById("refresh").style.display = "inline-block";
    document.getElementById("space-expression").style.display = "inline-block";
    document.getElementById("names").style.display = "flex";
    for (let i = 0; i < 3; i++) {
      choices[i].style.display = "none";
    }
    choices[0].style.display = "inline-block";
    choices[0].src = choices[num].src;
    choices[2].style.display = "inline-block";
    choices[2].src = CPUchosen;
    console.log(scoreboard);
    if (num == 0) {
      if (rand_chosen == 1) {
        UserPoint++;
        document.getElementById("UserPoint").textContent = UserPoint;
        document.getElementById("typeRes").textContent = "YOU WON!";
      } else if (rand_chosen == 2) {
        CPUpoint++;
        document.getElementById("CPUpoint").textContent = CPUpoint;
        document.getElementById("typeRes").textContent = "CPU WON!";
      } else {
        document.getElementById("typeRes").textContent = "Equal!";
      }
    } else if (num == 1) {
      if (rand_chosen == 0) {
        CPUpoint++;
        document.getElementById("CPUpoint").textContent = CPUpoint;
        document.getElementById("typeRes").textContent = "CPU WON!";
      } else if (rand_chosen == 2) {
        UserPoint++;
        document.getElementById("UserPoint").textContent = UserPoint;
        document.getElementById("typeRes").textContent = "YOU WON!";
      } else {
        document.getElementById("typeRes").textContent = "Equal!";
      }
    } else {
      if (rand_chosen == 0) {
        UserPoint++;
        document.getElementById("UserPoint").textContent = UserPoint;
        document.getElementById("typeRes").textContent = "YOU WON!";
      } else if (rand_chosen == 1) {
        CPUpoint++;
        document.getElementById("CPUpoint").textContent = CPUpoint;
        document.getElementById("typeRes").textContent = "CPU WON!";
      } else {
        document.getElementById("typeRes").textContent = "Equal!";
      }
    }
    scoreboard = Math.max(UserPoint, CPUpoint);
    if (scoreboard == WinRate) {
      let Won = "";
      if (scoreboard == UserPoint) {
        Won = "You Won!";
      } else {
        Won = "CPU Won!";
      }
      document.getElementById("space-expression").textContent =
        "Enter space to refresh the page";
      document.getElementById("space-expression").style.display =
        "inline-block";
      document.getElementById("ResultShow").textContent = Won;
      document.getElementById("refresh").style.display = "none";
    }
  });
}

function Refresh() {
  document.getElementById("refresh").style.display = "none";
  document.getElementById("space-expression").style.display = "none";
  document.getElementById("names").style.display = "none";
  document.getElementById("typeRes").textContent = "";
  for (let i = 0; i < 3; i++) {
    choices[i].style.display = "inline-block";
    choices[i].src = picture_sources[i];
  }
  rand_chosen = Number(Math.floor(Math.random(0, 3) * 3));
}

const button = document.getElementById("refresh");
button.addEventListener("click", function () {
  Refresh();
});

document.addEventListener("keydown", (space) => {
  if (space.key == " ") {
    if (scoreboard == WinRate) {
      location.reload();
    } else Refresh();
  }
});
