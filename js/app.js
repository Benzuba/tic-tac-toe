const box = $('.boxes');
const boxes = $('.boxes').children();
const start = $('#start');
const newGame =$('.new-game');
const message = $('.message');
const finish = $('#finish');
const board = $('#board');
const player1Logo = $('#player1');
const player2Logo = $('#player2');
let player1 = true;
let player2 = false;
let turns = 0;
const o ="box box-filled-1"
const x ="box box-filled-2"
finish.hide();





//on click start buton hide start screen and make the player 1 logo active state
start.on('click', (e) =>{
  start.hide();
  player1Logo.addClass("active");

});

newGame.on('click', (e)=>{
  finish.hide();
  board.show();
  player1Logo.addClass("active");
  player2Logo.removeClass("active");
  for (let i = 0; i < boxes.length; i++){
    boxes[i].className = "box";
  }
  player1 = true; //when newGame is started player one is first even if they one previous game
  player2 = false;
  finish.removeClass();
  finish.className = "screen"; //remove xWin or 0win or TIE classes to start new games
  message.text(""); //remove message
});

box.mouseenter(function (e){
currentBox = e.target; //set currentBox to value to create jQuery obect
if (player1 && currentBox.className === "box"){$(currentBox).css("background-image", "url(img/o.svg)")};
if (player2 && currentBox.className === "box"){$(currentBox).css("background-image", "url(img/x.svg)")};
});
box.mouseout(function(e){
  e.target.style.background = "";
});

boxes.on('click', (e) =>{
  const box = e.target;
  if (box.className === "box") {
    if (player1){box.classList.add("box-filled-1")};//is player1(true)"active"add a O
    if (player2){box.classList.add("box-filled-2")};//is player2(true)"active"add a O
    turns ++;
    endGame();
    togglePlayer();

  } else {
    window.alert("Pick Another Square");
    }
});

//switch between player1 and player2 by alternating "true""false" values and active classes

function togglePlayer(){
  if (player1 === true && player2 === false){
    player2Logo.addClass("active");
    player1Logo.removeClass("active");
    player1 = false;
    player2 = true;
  }else{
    player2Logo.removeClass("active");
    player1Logo.addClass("active");
  player1= true;
  player2 = false;
}
};

function endGame(){
  if(turns === 9){//check to see if all spaces are filled
    finish.show();
    finish.addClass("screen screen-win screen-win-tie");
    $('.message').html("&#x1F616" + "IT'S A TIE" + "&#x1F616");
    board.hide();
    turns = 0;
  };


  //check 0 winners
  if((boxes[0].className === o && boxes[1].className === o && boxes[2].className === o) ||
    (boxes[3].className === o && boxes[4].className === o && boxes[5].className === o) ||
    (boxes[6].className === o && boxes[7].className === o && boxes[8].className === o) ||
    (boxes[0].className === o && boxes[3].className === o && boxes[6].className === o) ||
    (boxes[1].className === o && boxes[4].className === o && boxes[7].className === o) ||
    (boxes[2].className === o && boxes[5].className === o && boxes[8].className === o) ||
    (boxes[0].className === o && boxes[4].className === o && boxes[8].className === o) ||
    (boxes[2].className === o && boxes[4].className === o && boxes[6].className === o) ||
    (boxes[1].className === o && boxes[4].className === o && boxes[7].className === o)){
    finish.show();
    message.text("WINNNER");
    finish.addClass("screen screen-win screen-win-one");
    board.hide();
    turns = 0;

  }
  //check x winners
  if((boxes[0].className === x && boxes[1].className === x && boxes[2].className === x) ||
    (boxes[3].className === x && boxes[4].className === x && boxes[5].className === x) ||
    (boxes[6].className === x && boxes[7].className === x && boxes[8].className === x) ||
    (boxes[0].className === x && boxes[3].className === x && boxes[6].className === x) ||
    (boxes[1].className === x && boxes[4].className === x && boxes[7].className === x) ||
    (boxes[2].className === x && boxes[5].className === x && boxes[8].className === x) ||
    (boxes[0].className === x && boxes[4].className === x && boxes[8].className === x) ||
    (boxes[2].className === x && boxes[4].className === x && boxes[6].className === x) ||
    (boxes[1].className === x && boxes[4].className === x && boxes[7].className === x)){
    finish.show();
    message.text("WINNER");
    finish.addClass("screen screen-win screen-win-two");
    board.hide();
    turns = 0;
  }
};
