// Potential Winning Combos
// Horizontal = (1,2,3) (4,5,6) (7,8,9)
// Vertical = (1,4,7) (2,5,8) (3,6,9)
// Diagonal = (1,5,9) (3,5,7)







$(document).ready(function() {

  turn = 1;

  $('td').on('click', function() {
    if (turn % 2 == 0) {
      $(this).text("X");
    } else {
      $(this).text("O");
  }

    // alert(turn);
    turn ++;

    $(this).off('click')

    checkWinner();

  });

});

var resetBoard = function(){
  turn = 1;
  $('td').empty();
}



var checkWinner = function() {
 // Horizontal X Winner
 if ( ($('#1').text() === "X" && $('#2').text() === "X") && ($('#3').text() === "X") ){
  alert("X is the WINNER!");
  resetBoard();
  } else if ( ($('#4').text() === "X" && $('#5').text() === "X") && ($('#6').text() === "X") ){
    alert("X is the WINNER!");
   resetBoard();
  } else if ( ($('#7').text() === "X" && $('#8').text() === "X") && ($('#9').text() === "X") ){
    alert("X is the WINNER!");
   resetBoard();
// Vertical X Winner
  } else if ( ($('#1').text() === "X" && $('#4').text() === "X") && ($('#7').text() === "X") ){
    alert("X is the WINNER!");
   resetBoard();
  } else if ( ($('#2').text() === "X" && $('#5').text() === "X") && ($('#8').text() === "X") ){
    alert("X is the WINNER!");
   resetBoard();
  } else if ( ($('#3').text() === "X" && $('#6').text() === "X") && ($('#9').text() === "X") ){
    alert("X is the WINNER!");
   resetBoard();
// Diagonal X Winner
  } else if ( ($('#1').text() === "X" && $('#5').text() === "X") && ($('#9').text() === "X") ){
    alert("X is the WINNER!");
   resetBoard();
  } else if ( ($('#3').text() === "X" && $('#5').text() === "X") && ($('#7').text() === "X") ){
    alert("X is the WINNER!");
   resetBoard();

 // Horizontal O Winner
  } else if ( ($('#1').text() === "O" && $('#2').text() === "O") && ($('#3').text() === "O") ){
    alert("O is the WINNER!");
   resetBoard();
  } else if ( ($('#4').text() === "O" && $('#5').text() === "O") && ($('#6').text() === "O") ){
    alert("O is the WINNER!");
   resetBoard();
  } else if ( ($('#7').text() === "O" && $('#8').text() === "O") && ($('#9').text() === "O") ){
    alert("O is the WINNER!");
   resetBoard();
// Vertical O Winner
  } else if ( ($('#1').text() === "O" && $('#4').text() === "O") && ($('#7').text() === "O") ){
    alert("O is the WINNER!");
   resetBoard();
  } else if ( ($('#2').text() === "O" && $('#5').text() === "O") && ($('#8').text() === "O") ){
    alert("O is the WINNER!");
   resetBoard();
  } else if ( ($('#3').text() === "O" && $('#6').text() === "O") && ($('#9').text() === "O") ){
    alert("O is the WINNER!");
   resetBoard();
// Diagonal O Winner
  } else if ( ($('#1').text() === "O" && $('#5').text() === "O") && ($('#9').text() === "O") ){
    alert("O is the WINNER!");
   resetBoard();
  } else if ( ($('#3').text() === "O" && $('#5').text() === "O") && ($('#7').text() === "O") ){
    alert("O is the WINNER!");
   resetBoard();
 };

};

