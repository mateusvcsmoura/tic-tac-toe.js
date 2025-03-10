let turn = 0;
let xPlayerMoves = [];
let oPlayerMoves = [];
let xPlayerScoreSpan = 0;
let oPlayerScoreSpan = 0;
const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Lines
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// HTMl Elements

const cells = document.querySelectorAll('.cell');
const xPlayerScore = document.querySelector('#xPlayerScore');
const oPlayerScore = document.querySelector('#oPlayerScore');
const userTip = document.querySelector('.user-tip');
const resetBtn = document.querySelector('.reset-game-btn');

cells.forEach(cell => {
    cell.addEventListener('click', event => checkTurn(event));
});

resetBtn.addEventListener('click', resetScoreBoard);

// Functions

function checkTurn (event) {

    event.target.classList.add('disabled'); // Adds the disabled class to not receive new clicks

    if (turn % 2 === 0) {
        const move = {'player': "X", 'cell': event.currentTarget.dataset.cell};
        userTip.innerText = "O Turn";
        return play(move);
    } else {
        const move = {'player': "O", 'cell': event.currentTarget.dataset.cell};
        userTip.innerText = "X Turn";
        return play(move);
    }

}

function play (move) {

    turn++;

    if (move.player === "X") {
        xPlayerMoves.push(parseInt(move.cell));
        writePlayerMove(move);
    } else {
        oPlayerMoves.push(parseInt(move.cell));
        writePlayerMove(move);
    }
    
    if (checkWin(move)) {
        disableCells();
        setTimeout(clearBoard, 1500);

        updateScoreBoard(move);
        setTimeout(reactivateCells, 1500);
    } else if (turn > 8) {
        userTip.innerText = "Draw!";
        disableCells();

        setTimeout(clearBoard, 1500);
        setTimeout(reactivateCells, 1500);
    }
    
}

function checkWin(move) {
    const moves = move.player === "X" ? xPlayerMoves : oPlayerMoves;
    
    // Filter true conditions
    const winningCells = winConditions.filter(condition => 
        condition.every(num => moves.includes(num))
    );

    if (winningCells.length > 0) {
        paintWinningCells(winningCells.flat()); // winningCells is an array with an array inside of it, use .flat() to "unpack" the array
        return winningCells;
    }
}

function writePlayerMove (move) {
    cells.forEach(cell => {
        if (cell.dataset.cell === move.cell) {
            return cell.innerText = move.player;
        }
    });
}

function paintWinningCells (winningCells) { 
    cells.forEach(cell => {
        if (winningCells.includes(parseInt(cell.dataset.cell))) {
            cell.classList.add('win');
        }
    });
}

function clearBoard () {
    cells.forEach(cell => {
        cell.innerText = "";

        if (cell.classList.contains('win')) {
            cell.classList.remove('win');
        }
    });

    userTip.innerText = "ScoreBoard";

    turn = 0;
    xPlayerMoves = [];
    oPlayerMoves = [];
}

function updateScoreBoard (move) {
    if (move.player === "X") {
        userTip.innerText = "X Won";

        xPlayerScoreSpan++;
        xPlayerScore.innerText = xPlayerScoreSpan;
    } else {
        userTip.innerText = "O Won";

        oPlayerScoreSpan++;
        oPlayerScore.innerText = oPlayerScoreSpan;
    }
}

function resetScoreBoard () {
    xPlayerScore.innerText = 0;
    xPlayerScoreSpan = 0;
    oPlayerScore.innerText = 0;
    oPlayerScoreSpan = 0;
}

function disableCells () {
    cells.forEach(cell => {
        cell.classList.add('disabled');
    });
}

function reactivateCells () {
    cells.forEach(cell => {
        cell.classList.remove('disabled');
    });
}

