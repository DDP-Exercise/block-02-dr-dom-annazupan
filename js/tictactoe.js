"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Anna Zupan - 2026-03-30
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";

//Some of your epic battles:
const BATTLEFIELD =
    [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];
// const BATTLEFIELD =
//     [
//         [null, X, X],
//         [X, O, null],
//         [O, O, O],
//     ];
// const BATTLEFIELD =
//     [
//         [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];
//
// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X, X, null],
//         [X, O, X, O, O],
//         [O, X, O, null,  X],
//         [X, null, X, O, O],
//         [X, null, O, X, O],
//     ];

//TODO: Check if the battle is over, and if so, announce the winner!

// Check Horizontal
// Check Vertical
// Check Main Diagonal
// Check Anti Diagonal

let size = BATTLEFIELD.length;
let winner = null;


// horizontal check

for (let r = 0; r < size; r++) {
    let first = BATTLEFIELD[r][0];
    if (first == null) continue;

    let win = true;

    for (let c = 1; c < size; c++) {
        if (BATTLEFIELD[r][c] !== first) {
            win = false;
        }
    }

    if (win) {
        winner = first;
        console.log(winner + " wins horizontally!");
    }
}


// vertical check

for (let c = 0; c < size; c++) {
    let first = BATTLEFIELD[0][c];
    if (first == null) continue;

    let win = true;

    for (let r = 1; r < size; r++) {
        if (BATTLEFIELD[r][c] !== first) {
            win = false;
        }
    }

    if (win) {
        winner = first;
        console.log(winner + " wins vertically!");
    }
}

// main diagonal

let firstMain = BATTLEFIELD[0][0];
if (firstMain != null) {
    let win = true;

    for (let r = 1; r < size; r++) {
        if (BATTLEFIELD[r][r] !== firstMain) {
            win = false;
        }
    }

    if (win) {
        winner = firstMain;
        console.log(winner + " wins on main diagonal!");
    }
}

// anti diagonal

let firstAnti = BATTLEFIELD[0][size - 1];
if (firstAnti != null) {
    let win = true;

    for (let r = 1; r < size; r++) {
        if (BATTLEFIELD[r][size - 1 - r] !== firstAnti) {
            win = false;
        }
    }

    if (win) {
        winner = firstAnti;
        console.log(winner + " wins on anti-diagonal!");
    }
}


// no winner

if (winner == null) {
    console.log("No winner yet!");
}

