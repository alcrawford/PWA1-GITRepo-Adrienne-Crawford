/*
Adrienne Crawford
PWA1 
June 2015
Week 1
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman";	/* present names of the players */
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;				/* create decrement numbers to use on health */
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;			/* create starting health numbers */
    var playerTwoHealth = 100;

    //initiate round
    var round=0;						/* create rounds */

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);     /*prompt the stats and names of players to start*/
        for (var i = 0; i < 10; i++)																/*use 
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;                                    /* minimum damage can be half of 20, max is 20 each round*/
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);  /* generate the random damage numbers between 10 and 20 for each player*/
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);  /*use formula with math.down to round down and math.random to generate number*/

            //inflict damage
            playerOneHealth-=f1;                /*generate new health numbers for players using variables from prior formula*/
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); /*present new health numbers for players*/

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner") /*if else statement that will work with if else below to determine */
            {						  /* outcome. no match results in jump to program start or repeat at bottom */
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1) /*both players fall below 1 and no winner*/
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){				/*one player falls below, 2 wins*/
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)				/*two player falls below, 1 wins*/
        {
            result = playerOneName+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();											/*program restart*/ 

})();