// Potential Winning Combos
// Horizontal = (1,2,3) (4,5,6) (7,8,9)
// Vertical = (1,4,7) (2,5,8) (3,6,9)
// Diagonal = (1,5,9) (3,5,7)







$(document).ready(function() {

  turn = 1;


  $('td').on('click', function() {
    if (turn % 2 == 0) {
      $(this).text("X");
      $(this).css('background-color', 'red');
    } else {
      $(this).text("O");
      $(this).css('background-color', 'red');
  }

    // alert(turn);
    turn ++;

    $(this).off('click')

    if (turn > 9){
      alert('Stalemate');
      resetBoard();
    } else {
      checkWinner();
    }


  });

});

var resetBoard = function(){
  turn = 1;
  $('td').empty();
  javascript:history.go(0);
}



var checkWinner = function() {

 // Horizontal X Winner

 if ( ($('#1').text() === "X" && $('#2').text() === "X") && ($('#3').text() === "X") ){
    $('#4').fadeTo(0, 0.4);
    $('#5').fadeTo(0, 0.4);
    $('#6').fadeTo(0, 0.4);
    $('#7').fadeTo(0, 0.4);
    $('#8').fadeTo(0, 0.4);
    $('#9').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("X is the Winner");
    resetBoard();
  }, 600);

  } else if ( ($('#4').text() === "X" && $('#5').text() === "X") && ($('#6').text() === "X") ){
    $('#1').fadeTo(0, 0.4);
    $('#2').fadeTo(0, 0.4);
    $('#3').fadeTo(0, 0.4);
    $('#7').fadeTo(0, 0.4);
    $('#8').fadeTo(0, 0.4);
    $('#9').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("X is the Winner");
    resetBoard();
  }, 600);

  } else if ( ($('#7').text() === "X" && $('#8').text() === "X") && ($('#9').text() === "X") ){
    $('#4').fadeTo(0, 0.4);
    $('#5').fadeTo(0, 0.4);
    $('#6').fadeTo(0, 0.4);
    $('#1').fadeTo(0, 0.4);
    $('#2').fadeTo(0, 0.4);
    $('#3').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("X is the Winner");
    resetBoard();
  }, 600);

// Vertical X Winner

  } else if ( ($('#1').text() === "X" && $('#4').text() === "X") && ($('#7').text() === "X") ){
    $('#2').fadeTo(0, 0.4);
    $('#3').fadeTo(0, 0.4);
    $('#5').fadeTo(0, 0.4);
    $('#6').fadeTo(0, 0.4);
    $('#8').fadeTo(0, 0.4);
    $('#9').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("X is the Winner");
    resetBoard();
  }, 600);

  } else if ( ($('#2').text() === "X" && $('#5').text() === "X") && ($('#8').text() === "X") ){
    $('#1').fadeTo(0, 0.4);
    $('#3').fadeTo(0, 0.4);
    $('#4').fadeTo(0, 0.4);
    $('#6').fadeTo(0, 0.4);
    $('#7').fadeTo(0, 0.4);
    $('#9').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("X is the Winner");
    resetBoard();
  }, 600);

  } else if ( ($('#3').text() === "X" && $('#6').text() === "X") && ($('#9').text() === "X") ){
    $('#1').fadeTo(0, 0.4);
    $('#2').fadeTo(0, 0.4);
    $('#4').fadeTo(0, 0.4);
    $('#5').fadeTo(0, 0.4);
    $('#7').fadeTo(0, 0.4);
    $('#8').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("X is the Winner");
    resetBoard();
  }, 600);

//Diagonal X Winner

  } else if ( ($('#1').text() === "X" && $('#5').text() === "X") && ($('#9').text() === "X") ){
    $('#2').fadeTo(0, 0.4);
    $('#3').fadeTo(0, 0.4);
    $('#4').fadeTo(0, 0.4);
    $('#6').fadeTo(0, 0.4);
    $('#7').fadeTo(0, 0.4);
    $('#8').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("X is the Winner");
    resetBoard();
  }, 600);

  } else if ( ($('#3').text() === "X" && $('#5').text() === "X") && ($('#7').text() === "X") ){
    $('#1').fadeTo(0, 0.4);
    $('#2').fadeTo(0, 0.4);
    $('#4').fadeTo(0, 0.4);
    $('#6').fadeTo(0, 0.4);
    $('#8').fadeTo(0, 0.4);
    $('#9').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("X is the Winner");
    resetBoard();
  }, 600);


 // Horizontal O Winner

  } else if ( ($('#1').text() === "O" && $('#2').text() === "O") && ($('#3').text() === "O") ){
    $('#4').fadeTo(0, 0.4);
    $('#5').fadeTo(0, 0.4);
    $('#6').fadeTo(0, 0.4);
    $('#7').fadeTo(0, 0.4);
    $('#8').fadeTo(0, 0.4);
    $('#9').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("O is the Winner");
    resetBoard();
  }, 600);

  } else if ( ($('#4').text() === "O" && $('#5').text() === "O") && ($('#6').text() === "O") ){
    $('#1').fadeTo(0, 0.4);
    $('#2').fadeTo(0, 0.4);
    $('#3').fadeTo(0, 0.4);
    $('#7').fadeTo(0, 0.4);
    $('#8').fadeTo(0, 0.4);
    $('#9').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("O is the Winner");
    resetBoard();
  }, 600);

  } else if ( ($('#7').text() === "O" && $('#8').text() === "O") && ($('#9').text() === "O") ){
    $('#4').fadeTo(0, 0.4);
    $('#5').fadeTo(0, 0.4);
    $('#6').fadeTo(0, 0.4);
    $('#1').fadeTo(0, 0.4);
    $('#2').fadeTo(0, 0.4);
    $('#3').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("O is the Winner");
    resetBoard();
  }, 600);

//Vertical O Winner

  } else if ( ($('#1').text() === "O" && $('#4').text() === "O") && ($('#7').text() === "O") ){
    $('#2').fadeTo(0, 0.4);
    $('#3').fadeTo(0, 0.4);
    $('#5').fadeTo(0, 0.4);
    $('#6').fadeTo(0, 0.4);
    $('#8').fadeTo(0, 0.4);
    $('#9').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("O is the Winner");
    resetBoard();
  }, 600);

  } else if ( ($('#2').text() === "O" && $('#5').text() === "O") && ($('#8').text() === "O") ){
    $('#1').fadeTo(0, 0.4);
    $('#3').fadeTo(0, 0.4);
    $('#4').fadeTo(0, 0.4);
    $('#6').fadeTo(0, 0.4);
    $('#7').fadeTo(0, 0.4);
    $('#9').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("O is the Winner");
    resetBoard();
  }, 600);

  } else if ( ($('#3').text() === "O" && $('#6').text() === "O") && ($('#9').text() === "O") ){
    $('#1').fadeTo(0, 0.4);
    $('#2').fadeTo(0, 0.4);
    $('#4').fadeTo(0, 0.4);
    $('#5').fadeTo(0, 0.4);
    $('#7').fadeTo(0, 0.4);
    $('#8').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("O is the Winner");
    resetBoard();
  }, 600);

//Diagonal O Winner

  } else if ( ($('#1').text() === "O" && $('#5').text() === "O") && ($('#9').text() === "O") ){
    $('#2').fadeTo(0, 0.4);
    $('#3').fadeTo(0, 0.4);
    $('#4').fadeTo(0, 0.4);
    $('#6').fadeTo(0, 0.4);
    $('#7').fadeTo(0, 0.4);
    $('#8').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("O is the Winner");
    resetBoard();
  }, 600);

  } else if ( ($('#3').text() === "O" && $('#5').text() === "O") && ($('#7').text() === "O") ){
    $('#1').fadeTo(0, 0.4);
    $('#2').fadeTo(0, 0.4);
    $('#4').fadeTo(0, 0.4);
    $('#6').fadeTo(0, 0.4);
    $('#8').fadeTo(0, 0.4);
    $('#9').fadeTo(0, 0.4);

  setTimeout(function(){
    alert("O is the Winner");
    resetBoard();
  }, 600);
 }
 ;

};

