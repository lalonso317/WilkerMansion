

alert("Hi, Welcome to the Wilker Mansion, You were selected out of all contestants. Your goal is simple make it to the Sir Wilker's treasary. In doing so, you will find the wildest of riches.")
alert("However, this task WILL NOT be the easiest.");
var yesno = confirm("Do you Wish to part take in the hunt for riches?");
if(yesno){
    alert("Excellent, proceed to the front door")
    wind()
}else if(!yesno) {
    alert("Well then, you are not the mighty one, please leave and live with that decision")
    alert("GAME OVER!")
    gameStart()
}


function wind(){
alert("You look towards the house, it is an old colonial build, windows merely barred up, the greenery has not been kept, it looks like no one has stepped foot in years.")
var question = prompt("Will you enter through the: side window or front door")
if(question == "front door"){
    alert("Looks like they left it unlocked, please proceed")
    hallway()
} else if(question =="side window"){
    alert("The Window, you fool, it's locked please return to the door")
    confirm("You go back to the front, Will you go through the door?") 
    hallway()
} else{
    alert("GAME OVER")
    gameStart()
}
}


function hallway(){
alert("You enter the the mansion and see 3 hallways. The Common Room, Staircase, or Dining Room.")
var hall = prompt("You have the choice, will you go through the: Common Room, Staircase, or Dining Room") 
if (hall == "Common Room"){
  commonRoom()
}else if(hall== "Staircase"){
    stairCase()
}else if(hall =="Dining Room"){
    diningRoom()
}
}
 function commonRoom(){
    alert(" You went for the Common Room. As you enter, you see there is a door at the end of the hallway.")
    alert(" It has a math problem, this is how it goes.")
    var correct =prompt("Find the value of 'x': 5x - (x+2)= 5x")
      if(correct =='0.5'){
        alert("Correct Answer. Please proceed to the next door")
        commonBox()
        }else{
       alert("Wrong Answer, the floor opens up beneath you and fall to your death.")
       alert("Try Again.")  
       commonRoom() 
    }
}    
function commonBox(){
    alert("The door slides open connecting to the den.")
    alert("You enter the den to find a box, it has a question")
    var correct2 =prompt("How many elements are in the periodic table of elements?")
    if(correct2 == 118){
    alert("Correct Answer")
    alert("The box opens and it there is a key, on the key a note: 'This key is 1 of 2 needed for your quest. The other is closer to the level of seas. Goodluck")
    alert("You head back to the entrance.")
    hallway()   
} else{
    alert("Wrong Answer. The box detonates in your hands.")
    alert("Try Again.")
    commonBox()
    }
}

function diningRoom(){
    alert("You enter the room and are confronted by a door with a problem.")
    alert("Which states")
    var math2 = prompt("A sign by a bridge says it can safely hold 6.5 cars that each weigh 2750 pounds. Assume there are no cars on the bridge. How many 150 pound people can safely stand on the bridge")
    if(math2 == 119){
        alert("Correct Answer")
        alert("Continue, to the next room")
        diningBox()
    }else{
        alert("Wrong Answer, You hear a machine start whirling and darts begin to head start for you, you get impaled")
        alert("Try Again.")
        diningRoom()
    }
}
function diningBox(){
    alert("You made it to the kitchen, where you find a box.")
    alert("The box has a scrabbled word.")
    var word2= prompt("Rearrange the letters to form a word: htecpmacit")
    if(word2 =="techimpact"){
        alert("Correct Answer. The box opens revealing a key with a note.")
        alert("'You have found 1 of 2 keys needed for your quest, you will need to find one more in order find the treasury.'")
        alert("GoodLuck.")
        hallway()
    }else{
        alert("Wrong Answer. The box begins to get warmer, you try to move your hands but they stuck to box until they began to melt.")
        alert("Try Again.")
        diningBox()
    }

}

function stairCase(){
    alert("Before you climb the stairs, it is necessary to find the keys of Wilker's mansion.")
    var note = prompt("Have you found the keys for the mansion?")
    if(note == "yes"){
        alert("Great both of the keys were found, you may proceed.")
        stairVault()
    }else{
        alert("Well, those keys won't find themselves.")
        alert("Shall I suggest somewhere cozy.")
        hallway()
    }
}

function stairVault(){
    alert("You made it to the top of the mansion, facing down the vault door.")
    alert("One final puzzle, you put both keys in and it opens")
    var final= prompt("Turn me on my side and I am everything. Cut me in half and I am nothing. What am I?")
    if(final == "8"){
        alert("Congraulations!")
        alert("The door opens, it reveals a podeum with what is only a sheet ofpaper.")
        alert("'You have made it to the end, you win... however this was just the begining of the end. Your reward: + Respect'")
    }else{
        alert("Unforunately, the answer was incorrect, a wall slams down from the ceiling behind you and begins to push closer to you, resulting in it pressing you together.")
        alert("Try Again")
        stairVault()
    }
} 




