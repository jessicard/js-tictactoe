function app ( jQuery ) {

  var board = [[null, null, null],
               [null, null, null],
               [null, null, null]],
      turns = 1;

  $(".board > div span").on("click", function(){
    $this = $(this);

    if (checkForExistingPiece($this)){
      alert("There's already a piece there!")
      return false;
    }
    else {
      updateBoard($this, turns)
    }

    checkForWinner(turns);
    turns++
  });

  function updateBoard( $this, turns ) {
    var htmlCell = $this,
        htmlCellData = htmlCell.data("cell"),
        htmlRowData = htmlCell.parent("div").data("row");

    // X's turn
    if (turns % 2) {
      board[htmlRowData][htmlCellData] = 0
      htmlCell.text("X")
    }
    // O's turn
    else {
      board[htmlRowData][htmlCellData] = 1
      htmlCell.text("O")
    }
    updateHeader(turns);
  }

  function checkForExistingPiece( $this ) {
    if ($this.text().trim().length) {
      return true;
    }
    return false;
  };

  function updateHeader( turns ) {
    // X just went, time for O!
    if ( turns % 2 ) {
      $("h1").text("O's Turn")
    }
    // O just went, time for X!
    else {
      $("h1").text("X's Turn")
    };
  };

  function checkForWinner( turns ) {
    var isWinner = false;
    var row1     = board[0];
    var row2     = board[1];
    var row3     = board[2];

    if( // vertical
        areEqual(row1[0], row2[0], row3[0]) ||
        areEqual(row1[1], row2[1], row3[1]) ||
        areEqual(row1[2], row2[2], row3[2]) ||

        // horizontal
        areEqual(row1[0], row1[1], row1[2]) ||
        areEqual(row2[0], row2[1], row2[2]) ||
        areEqual(row3[0], row3[1], row3[2]) ||

        //diagonal
        areEqual(row1[0], row2[1], row3[2]) ||
        areEqual(row1[2], row2[1], row3[0])) {

      // debugger

      isWinner = true;
    }

    if ( isWinner ) {
      if (turns % 2) {
        $("h1").text("X Won!");
        alert ("X Won!")
      }
      else if ( isWinner ) {
        $("h1").text("O Won!");
        alert ("O Won!")
      };

      resetBoard();
    }
    else {
      if (checkForStalemate(isWinner)) {
        $("h1").text("Stalemate");
        alert ("Stalemate");
        resetBoard();
      };
    };
  };

  function checkForStalemate( isWinner ) {
    var flattenedBoard = [];
    flattenedBoard = flattenedBoard.concat.apply(flattenedBoard, board);
    var len = flattenedBoard.length

    for (var i=0; i<len; ++i) {
      if (flattenedBoard[i] === null) {
        return false;
      }
    }

    return true;
  };

  function resetBoard() {
    turns = 0;
    board = [[null, null, null],
             [null, null, null],
             [null, null, null]];

    $(".board span").text("");
    $("h1").text("X Starts");
  };

  function areEqual(){
    var len = arguments.length;
    for (var i = 1; i< len; i++){
      if (arguments[i] == null || arguments[i] != arguments[i-1]) {
        return false;
      };
    };
    return true;
  };
}

$( document ).ready( app );
