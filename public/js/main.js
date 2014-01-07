function app ( jQuery ) {

  var row1  = [null, null, null];
  var row2  = [null, null, null];
  var row3  = [null, null, null];
  var turns = 0;

  $(".board > div span").on("click", function(){
    $this = $(this);

    turns++;

    addPiece(turns, $this);
    updateHeader(turns);
    checkForWinner(turns);
  });

  function addPiece( turns, $this ) {
    var htmlCell = $this;
    var htmlRowClass = htmlCell.parent("div").attr("class");
    var arrayRow = eval(htmlRowClass);
    var arrayCell = eval($this.attr("class"))

    // X's turn
    if (turns % 2) {
      arrayRow[arrayCell] = 0
      htmlCell.text("X")
    }
    // O's turn
    else {
      arrayRow[arrayCell] = 1
      htmlCell.text("O")
    }
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
    };
  };

  function resetBoard() {
    turns = 0;
    row1  = [null, null, null];
    row2  = [null, null, null];
    row3  = [null, null, null];

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
