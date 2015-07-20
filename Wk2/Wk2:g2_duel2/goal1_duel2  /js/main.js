/*
Adrienne Crawford
PWA1 
Week 2, Duel 2
July 17 2015
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name
    var names = ["Spiderman", "Batman"];	
    var hero1 = names[0];
    var hero2 = names[1];               		 /* present names of the players */

    //player health & damage
    var healthDamage = [100, 100];				/* create decrement numbers to use on health */
    var heroHealth1 = healthDamage[0];
	var heroHealth2 = healthDamage[1];
	
	var threshold = [20, 20];
	var heroHealth3 = minDamage[0];
	var heroHealth4 = minDamage[1];
	
    //initiate round
    var round=0;						/* create rounds */

    function fight(){
        alert(hero1+":"+heroHealth1+"  *START*  "+hero2+":"+heroHealth2);     /*prompt the stats and names of players to start*/
        for (var i = 0; i < 10; i++)															
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var heroHealth1 = heroHealth3 * .5;                                    /* minimum damage can be half of 20, max is 20 each round*/
            var heroHealth2 = heroHealth4 * .5;
            var f1 = Math.floor(Math.random()*(heroHealth1-heroHealth3)+heroHealth3);  /* generate the random damage numbers between 10 and 20 for each player*/
            var f2 = Math.floor(Math.random()*(heroHealth2-heroHealth4)+heroHealth4);  /*use formula with math.down to round down and math.random to generate number*/

            //inflict damage
            heroHealth1-=f1;                /*generate new health numbers for players using variables from prior formula*/
            heroHealth2-=f2;

            console.log(hero1+":"+heroHealth1+" "+hero2+":"+herohealth2);            

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner") /*if else statement that will work with if else below to determine */
            {						  /* outcome. no match results in jump to program start or repeat at bottom */
                round++;
                alert(hero1+":"+heroHealth1+"  *ROUND "+round+" OVER"+"*  "+hero2+":"+heroHealth2);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (heroHealth1<1 && heroHealth2<1) /*both players fall below 1 and no winner*/
        {
            result = "You Both Die";
        } else if(heroHealth1<1){				/*one player falls below, 2 wins*/
            result =hero2+" WINS!!!"
        } else if (heroHealth2<1)				/*two player falls below, 1 wins*/
        {
            result = hero1+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();											/*program restart*/ 

})();