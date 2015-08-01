/*
Adrienne Crawford
PWA1 
Week 3, Duel 2
July 17 2015
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");

    var fighter1_txt = document.querySelector("#kabal").querySelector("#scores");
    var fighter2_txt = document.querySelector("#kratos").querySelector("#scores");
    var round_txt = document.querySelector("h4");
    var button = document.getElementById("fight_btn");

    /* old array not needed
    var playerOne = ["Spiderman", 20, 100];
    var playerTwo = ["Batman", 20, 100];


    var names = ["Spiderman", "Batman"];	
    var hero1 = names[0];
    var hero2 = names[1];               		 

    player health & damage[{
    var healthDamage = [100, 100];				
    var heroHealth1 = healthDamage[0];
	var heroHealth2 = healthDamage[1];
	
	var threshold = [20, 20];
	var heroHealth3 = minDamage[0];
	var heroHealth4 = minDamage[1]; */

    button.addEventListener("click",fight, false);

    //new arrays w objects

    var fighters;
    fighters = [
        {
            name: "Kabal",
            damage: 20,
            health: 100

        },
        {
            name: "Kratos",
            damage: 20,
            health: 100

        }];

    //initiate round
    var round = 1;

    round_txt.innerHTML ="Click Fight Button to Start!";
    fighter1_txt.innerHTML = fighters[0].name+ ":  " + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name+ ":  " + fighters[1].health;

    function fight(){
        /*old alert(playerOne[0]":"+playerOne[2]+"  *START*  "+playerTwo+":"+playerTwo[2]);
        for (var i = 0; i < 10; i++){*/
        //utilize new array with vars
     fighter1_txt.innerHTML = fighters[0].name+ ":  " + fighters[0].health;
     fighter2_txt.innerHTML = fighters[1].name+ ":  " + fighters[1].health;

     var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage *.5;
     var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage *.5;
     fighters[0].health -= f1;
     fighters[1].health -= f2;

     var results = winnerCheck();
     round_txt.innerHTML = "ROUND #" + round + "Results;";
        round++;
        if(results === "no winner"){
            fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
            fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;
        }else{
            fighter1_txt.innerHTML = results;
            fighter2_txt.innerHTML = "";

            button.removeEventListener("click",fight,false );

            document.querySelector(".buttonblue").innerHTML = "DONE!!!";
        }
    }

    function winnerCheck(){
        var results = "no winner";
        if(fighters[0].health <1 && fighters [1].health <1){
           results = "You Both Die - GAME OVER!";
        }
    }
    /*old formula comment out random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne[1] * .5;                                     minimum damage can be half of 20, max is 20 each round
            var minDamage2 = playerTwo[1] * .5;
            var f1 = Math.floor(Math.random()*(playerOne[1])- minDamage1);   generate the random damage numbers between 10 and 20 for each player
            var f2 = Math.floor(Math.random()*(playerTwo[1]- minDamage2 );  use formula with math.down to round down and math.random to generate number

            //inflict damage
            playerOne[2]-=f1;                generate new health numbers for players using variables from prior formula
            playerTwo[2]-=f2;

            console.log(playerOne[0]+":"+playerOne[2]+" "+playerTwo[0]+":"+playerTwo[2]);            

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner") if else statement that will work with if else below to determine
            {						   outcome. no match results in jump to program start or repeat at bottom
                round++;
                alert(playerOne[2]+":"+playerOne[2]+"  *ROUND "+round+" OVER*  "+playerTwo[0]+":"+playerTwo[2]);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOne[2]<1 && playerTwo]<1) /*both players fall below 1 and no winner
        {
            result = "You Both Die";
        } else if(playerOne[0]<1){				one player falls below, 2 wins
            result =playerTwo
            Name+" WINS!!!"
        } else if (playerTwo[2]<1)				two player falls below, 1 wins
        {
            result =playerOne[0]+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();											/*program restart*/ 

})();