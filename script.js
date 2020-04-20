var player1, player2;
var board = {
    1:{"clicked":false,"mark":""},2:{"clicked":false,"mark":""},3:{"clicked":false,"mark":""},
    4:{"clicked":false,"mark":""},5:{"clicked":false,"mark":""},6:{"clicked":false,"mark":""},
    7:{"clicked":false,"mark":""},8:{"clicked":false,"mark":""},9:{"clicked":false,"mark":""}
}
var count = 0;
var alpha = "";
var id;
var gameEnd = false;



$(document).ready(function(){


    $("button#playGame").bind('click', function(){
        loginDiv();
        reset();
        refreshMessege();
        
    })

    $("button#newGame").bind('click', function(){
        gameDiv();
        reset();
        refreshMessege();

    })

    $("button#restart").bind('click', function(){
        reset();
        refreshMessege();

    })
    
    
    }
);

function refreshMessege() {
    $("#answer").text("");
}


var loginDiv = function loginPage(){
    player1 = $('#playerOne').val();
    player2 = $('#playerTwo').val();
    if (player1 === "" || player2 === ""){
        $("#alert").fadeIn( 600 );
        $("#alert").fadeOut( 2400 );
        return;
    }
    $("#loginPage, #game, #restart, #answer").toggle();
}


var gameDiv = function gamePage(){
    $("#loginPage, #game, #newGame, #answer").toggle();

}



function play(divNum) {
    count ++;
    if (board[divNum]["clicked"] === false) {  
        if (gameEnd === false){
            xOrY();
            updateTheDictionary(divNum);
            updateTheDiv(divNum);
            checkWinner();
            isThere();
            printMessege();
            changeTheButton();
        }
    }else {
        count --
    }
    
}
function printMessege() {
    
    $("#answer").removeClass("answer-color-red, answer-color-yellow, answer-color-blue")
    if (gameEnd === true && count <= 9){ 
        if (alpha === "x"){
            $("#answer").addClass("answer-color-red");
            $("#answer").text(player1 + " Wins");
        }else{
	    $("#answer").addClass("answer-color-blue");
            $("#answer").text(player2 + " Wins");
        }
    }else if (count === 9){
        $("#answer").addClass("answer-color-yellow");
        $("#answer").text("Game Ties.")


    }
    
}


function isThere() {
    if (count > 9) {
        gameEnd = true;
    }
}

function xOrY() {
    if (count % 2 === 0){
        alpha = "o"
    }else {
        alpha = "x"
    }
}

function checkWinner () {
    if (board[1]["mark"] === alpha && board[2]["mark"] === alpha && board[3]["mark"] === alpha){
        gameEnd = true;
    }else if (board[4]["mark"] === alpha && board[5]["mark"] === alpha && board[6]["mark"] === alpha){
        gameEnd = true;
    }else if (board[7]["mark"] === alpha && board[8]["mark"] === alpha && board[9]["mark"] === alpha){
        gameEnd = true;
    }else if (board[1]["mark"] === alpha && board[4]["mark"] === alpha && board[7]["mark"] === alpha){
        gameEnd = true;
    }else if (board[2]["mark"] === alpha && board[5]["mark"] === alpha && board[8]["mark"] === alpha){
        gameEnd = true;
    }else if (board[3]["mark"] === alpha && board[6]["mark"] === alpha && board[9]["mark"] === alpha){
        gameEnd = true;
    }else if (board[1]["mark"] === alpha && board[5]["mark"] === alpha && board[9]["mark"] === alpha){
        gameEnd = true;
    }else if (board[3]["mark"] === alpha && board[5]["mark"] === alpha && board[7]["mark"] === alpha){
        gameEnd = true;
    }
    
}


function updateTheDictionary(divNum) {
    board[divNum]["clicked"] = true;
    board[divNum]["mark"] = alpha;

}


function updateTheDiv(divNum) {
    $("div").each(function(index, value){
        if (this.id === divNum) {
            $(value).removeClass("x-color y-color");
            if (count % 2 === 0){
                $(value).addClass("y-color");
            }else {
                $(value).addClass("x-color");
            }    
            $(value).text(alpha);
            
        }



        
    });

    
    
    
}



function changeTheButton () {
    if (gameEnd === true) {
        $("#restart, #newGame").toggle()
    }

}




function reset() {
    count = 0;                                 
    $("div").each(function(index, value){      
        if (this.id >= 1 && this.id <= 9) {
            $(value).text("")
        }    
    }); 
    gameEnd = false;    
    batatahun();
                                    
}

function batatahun() {
    $.each(board, function(key, value){
        var counting = 0;
        $.each(value, function(key2, value2) {
            counting ++;
            if (counting === 1){
                board[key][key2] = false;
            }
            if (counting === 2){
                board[key][key2] = ""
            }
        });
    });  
}



