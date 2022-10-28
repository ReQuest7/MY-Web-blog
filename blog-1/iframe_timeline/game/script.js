var del = document.querySelector(".site__wrapper");



function puzzleOnclick() {
    del.innerHTML = '';
    del.innerHTML = " <iframe src='./Puzzle/puzzle.html' frameborder='0'></iframe>";


}

function minesweeperOnclick() {
    del.innerHTML = '';
    del.innerHTML = " <iframe src='./minesweeper/index.html' frameborder='0'></iframe>";
}