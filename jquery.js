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
    checkWinner()
 });



});



var checkWinner = function() {
 // Horizontal X Winner
 if ( ($('#1').text() === "X" && $('#2').text() === "X") && ($('#3').text() === "X") ){
  alert("X if the WINNER!");
  } else if ( ($('#4').text() === "X" && $('#5').text() === "X") && ($('#6').text() === "X") ){
    alert("X if the WINNER!");
  } else if ( ($('#7').text() === "X" && $('#8').text() === "X") && ($('#9').text() === "X") ){
    alert("X if the WINNER!");
// Vertical X Winner
  } else if ( ($('#1').text() === "X" && $('#4').text() === "X") && ($('#7').text() === "X") ){
    alert("X if the WINNER!");
  } else if ( ($('#2').text() === "X" && $('#5').text() === "X") && ($('#8').text() === "X") ){
    alert("X if the WINNER!");
  } else if ( ($('#3').text() === "X" && $('#6').text() === "X") && ($('#9').text() === "X") ){
    alert("X if the WINNER!");
// Diagonal X Winner
  } else if ( ($('#1').text() === "X" && $('#5').text() === "X") && ($('#9').text() === "X") ){
    alert("X if the WINNER!");
  } else if ( ($('#3').text() === "X" && $('#5').text() === "X") && ($('#7').text() === "X") ){
    alert("X Yf the WINNER!");

 // Horizontal Y Winner
  } else if ( ($('#1').text() === "Y" && $('#2').text() === "Y") && ($('#3').text() === "Y") ){
    alert("Y if the WINNER!");
  } else if ( ($('#4').text() === "Y" && $('#5').text() === "Y") && ($('#6').text() === "Y") ){
    alert("Y if the WINNER!");
  } else if ( ($('#7').text() === "Y" && $('#8').text() === "Y") && ($('#9').text() === "Y") ){
    alert("Y if the WINNER!");
// Vertical Y Winner
  } else if ( ($('#1').text() === "Y" && $('#4').text() === "Y") && ($('#7').text() === "Y") ){
    alert("Y if the WINNER!");
  } else if ( ($('#2').text() === "Y" && $('#5').text() === "Y") && ($('#8').text() === "Y") ){
    alert("Y if the WINNER!");
  } else if ( ($('#3').text() === "Y" && $('#6').text() === "Y") && ($('#9').text() === "Y") ){
    alert("Y if the WINNER!");
// Diagonal Y Winner
  } else if ( ($('#1').text() === "Y" && $('#5').text() === "Y") && ($('#9').text() === "Y") ){
    alert("Y if the WINNER!");
  } else if ( ($('#3').text() === "Y" && $('#5').text() === "Y") && ($('#7').text() === "Y") ){
    alert("Y if the WINNER!");
 };
};
