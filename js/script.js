// Initialize Variables
var isPieceSelected = false;
//var isMovingPiece = false; // needed to support dragging pieces between squares ***************************
var selectedSquare = '';
//var playerTurn = 0; // set in gamestart function. 1 = white, 2 = black. Will be used to restrict piece movement.

var pieceLocations = { // 1 = white, 2 = black. k = king, q = queen, r = rook, b = bishop, n = knight, p = pawn.
    a8:'r2', b8:'n2', c8:'b2', d8:'q2', e8:'k2', f8:'b2', g8:'n2', h8:'r2',
    a7:'p2', b7:'p2', c7:'p2', d7:'p2', e7:'p2', f7:'p2', g7:'p2', h7:'p2',
    a6:'  ', b6:'  ', c6:'  ', d6:'  ', e6:'  ', f6:'  ', g6:'  ', h6:'  ',
    a5:'  ', b5:'  ', c5:'  ', d5:'  ', e5:'  ', f5:'  ', g5:'  ', h5:'  ',
    a4:'  ', b4:'  ', c4:'  ', d4:'  ', e4:'  ', f4:'  ', g4:'  ', h4:'  ',
    a3:'  ', b3:'  ', c3:'  ', d3:'  ', e3:'  ', f3:'  ', g3:'  ', h3:'  ',
    a2:'p1', b2:'p1', c2:'p1', d2:'p1', e2:'p1', f2:'p1', g2:'p1', h2:'p1',
    a1:'r1', b1:'n1', c1:'b1', d1:'q1', e1:'k1', f1:'b1', g1:'n1', h1:'r1'
}



// Mouse down event handlers for all squares
$('.piece').mousedown(function(event) {

    var id = $(this).parent().attr('id');

    switch (event.which) {

        case 1: // left button
            LeftClickDown(id);
            break;

        case 2: // middle button
            break;

        case 3: // right button
            //RightClickDown(id); **********************************
            break;

        default: // other unexpected value
            console.log('You have a strange mouse!'); // REMOVE THIS LATER **********

    }
});

// Mouse down event handlers for all squares
$('.piece').mouseup(function(event) {

    var id = $(this).parent().attr('id');

    switch (event.which) {

        case 1: // left button
            LeftClickUp(id);
            break;

        case 2: // middle button
            break;

        case 3: // right button
            //RightClickUp(id); *****************************************
            break;

        default: // other unexpected value
            console.log('You have a strange mouse!'); // REMOVE THIS LATER **********

    }
});

// Left click down event
function LeftClickDown(id) {
    console.log("Left click down: " + id);

    if (isPieceSelected) { // A piece is already selected

        // Check if new square contains a piece of the same color.
        if (pieceLocations[selectedSquare].substring(1, 2) == pieceLocations[id].substring(1, 2)) {

            // Select the new piece
            selectedSquare = id;

        }

        // Check if piece can move to this square
        else if (selectedSquare != id && isMoveValid(selectedSquare, id)) {

            // move the piece ****************************************
            MovePiece(selectedSquare, id);



            // Reset selected square to nothing
            selectedSquare = '';
            isPieceSelected = false;

        }

    } else { // No piece is selected

        // Check if square contains a piece that belongs to the player
        // CURRENTLY ALLOWS FOR ALL PIECES TO BE SELECTED. NEED TO ADD TURNS AND RESTRICT ONE COLOR FROM BEING SELECTED! *******************
        if (pieceLocations[id].substring(1, 2) == 1 || pieceLocations[id].substring(1, 2) == 2) {

            // Set isPieceSelected to true, and store square id.
            isPieceSelected = true;
            selectedSquare = id;

        }

    }

}

// Left click up event
function LeftClickUp(id) {
    console.log("Left click up: " + id);



    // DO STUFF HERE *****************************************



    
}

// Right click down event
function RightClickDown(id) {
    console.log("Right click down: " + id);

    isSquareSelected = false;
    selectedSquare = '';

    // DO STUFF HERE ****************************************

    // Deselect the piece if one is selected

    // Return dragged piece to its square

}

// Right click up event
function RightClickUp(id) {
    console.log("Right click up: " + id);


    // DO STUFF HERE ****************************************
    // is this function needed???

}

// Check if a move is valid
function isMoveValid(oldSquare, newSquare) { // DO STUFF HERE *************************************
    // set variables...
    //
    // piece being moved
    // player color
    // king location
    // anything else?

    //
    // If the answer to any of the following is no, return false and exit the function.
    // Otherwise, return true.
    //

    // can the piece move in this way?

    // does this move leave the player in check?



    return true; // temporarily return true so plain movement can be tested. CHANGE THIS LATER! ************************

}

// Move a piece from one square to another
// Important to check if move is valid before moving the piece
function MovePiece(oldSquare, newSquare) {

    // set new piece locations
    pieceLocations[newSquare] = pieceLocations[oldSquare];
    pieceLocations[oldSquare] = '  ';

    // Determine what piece was moved
    var pieceName = "";
    switch (pieceLocations[newSquare].substring(0,1)) {

        case 'k':
            pieceName = "King";
            break;

        case 'q':
            pieceName = "Queen";
            break;

        case 'r':
            pieceName = "Rook";
            break;

        case 'b':
            pieceName = "Bishop";
            break;

        case 'n':
            pieceName = "Knight";
            break;

        case 'p':
            pieceName = "Pawn";
            break;

        default: // other unexpected value
            console.log('Unexpected piece code in the locations object'); // TEST PURPOSES... REMOVE THIS LATER ***************************

    }

    // update locations on webpage
    $('#' + oldSquare).children('.piece').first().text('Empty');
    $('#' + newSquare).children('.piece').first().text(pieceName);
}



function StartGame() {
    console.log("Game Started!");

    // More stuff here... *******************************************************
}

