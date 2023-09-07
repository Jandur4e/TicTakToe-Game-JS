const ticTacToe = ["", "", "", "", "", "", "", "", ""];
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let x = "X";
let o = "O";
let running = false;


let body = document.getElementById("body");
let title = document.createElement("h1");
title.style.textAlign = "center";
title.style.fontSize = "5rem";
title.style.color = "purple";
title.innerHTML = "TicTacToe";
body.appendChild(title)
let btnContener = document.createElement("div");
btnContener.setAttribute("id", "contener");
btnContener.style.display = "flex";
btnContener.style.flexWrap = "wrap";
btnContener.style.width = "300px"
btnContener.style.height = "300px"
btnContener.style.margin = "auto"
body.appendChild(btnContener)
ticTacToe.forEach((btn, btncellindex) => {
    let btnElement = document.createElement("button");
    btnElement.setAttribute("id", btncellindex);
    btnElement.setAttribute("onclick", `handleClick(${btncellindex})`);
    btnElement.addEventListener("click", checkForWiner);
    btnElement.style.backgroundColor = "white";
    btnElement.style.border = "none";
    btnElement.style.width = "100px";
    btnElement.style.height = "100px";
    btnElement.style.display = "flex";
    btnElement.style.justifyContent = "center";
    btnElement.style.alignItems = "center"
    btnElement.style.fontWeight = "900";
    btnElement.style.fontSize = "4rem";
    btnContener.appendChild(btnElement);
    running = true;
});
let tile0 = document.getElementById("0");
let tile1 = document.getElementById("1");
let tile2 = document.getElementById("2");
let tile3 = document.getElementById("3");
let tile4 = document.getElementById("4");
let tile5 = document.getElementById("5");
let tile6 = document.getElementById("6");
let tile7 = document.getElementById("7");
let tile8 = document.getElementById("8");
tile1.style.borderLeft = "2px solid gray";
tile1.style.borderRight = "2px solid gray";
tile3.style.borderTop = "2px solid gray";
tile3.style.borderBottom = "2px solid gray";
tile4.style.border = "2px solid gray";
tile5.style.borderTop = "2px solid gray";
tile5.style.borderBottom = "2px solid gray";
tile7.style.borderLeft = "2px solid gray";
tile7.style.borderRight = "2px solid gray";
let winOrTie = document.createElement("h1");
winOrTie.setAttribute("id", "printed");
winOrTie.style.textAlign = "center";
body.appendChild(winOrTie);
let printed = document.getElementById("printed")
let flag = Math.floor(Math.random() * 2);
if (flag == 0) {
    currentPlayer = "O";
    printed.style.color = "red";
    printed.innerHTML = "Player O start";
}
else {
    currentPlayer = "X";
    printed.style.color = "blue";
    printed.innerHTML = "Player X start";
}

function handleClick(i) {
    let tiles = document.getElementById(`${i}`);

    if (flag == 1) {
        tiles.innerHTML = "X";
        tiles.setAttribute("value", "X");
        tiles.style.color = "blue";
        tiles.disabled = true;
        flag = 0;
    }
    else {
        tiles.innerHTML = "O";
        tiles.setAttribute("value", "O");
        tiles.style.color = "red";
        tiles.disabled = true;
        flag = 1;
    }
    ticTacToe[i] = tiles.value;
};

function checkForWiner() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = ticTacToe[condition[0]];
        const cellB = ticTacToe[condition[1]];
        const cellC = ticTacToe[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        printed.innerHTML = `Player ${currentPlayer} wins!`;
        printed.style.fontSize = "3rem"
        tile0.disabled = true;
        tile1.disabled = true;
        tile2.disabled = true;
        tile3.disabled = true;
        tile4.disabled = true;
        tile5.disabled = true;
        tile6.disabled = true;
        tile7.disabled = true;
        tile8.disabled = true;
        running = false;
    }
    else if (!ticTacToe.includes("")) {
        printed.innerHTML = `Match Tie!!!`;
        printed.style.fontSize = "3rem"
        printed.style.color = "purple"
        running = false;
    }
    else {
        if (flag == 1) {
            currentPlayer = "X"
            printed.innerHTML = "Player X turn";
            printed.style.color = "blue";
        }
        else if (flag == 0) {
            currentPlayer = "O"
            printed.innerHTML = "Player O turn"
            printed.style.color = "red";
        }
    }
}