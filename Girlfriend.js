/* let recentThought = "nothing"
let currentMood = ""
*/

let girlFriend = {
    name: "Thari",
    age: 26,
    pronoun: "She",
    mood: "Neutral",
    hunger: 50,
    hogwardsHouse: "Ravenclaw",
    thought: "",
    giveHug() {
        girlFriend.mood = "Happy";
        currentMood = "Happy";
        girlFriend.thought = "This makes " + girlFriend.name + " happy!"
        document.getElementById("thoughts").innerHTML = girlFriend.thought;
    },
    ignore() {
        if (girlFriend.mood == "Happy") {
            girlFriend.mood = "Neutral"
            girlFriend.thought = girlFriend.name + " feels ignored and is no longer happy!"
            document.getElementById("thoughts").innerHTML = girlFriend.thought;
 
    
        }
        else if (girlFriend.mood == "Neutral") {
            girlFriend.mood = "Sad"
            girlFriend.thought = girlFriend.name + " feels sad! :("
            document.getElementById("thoughts").innerHTML = girlFriend.thought;
        }
    },
    hello() {
        girlFriend.thought = girlFriend.name + " says hello!"
        document.getElementById("thoughts").innerHTML = girlFriend.thought;
    }
}
function mood() {// Updates gf mood
    document.getElementById("mood").innerHTML = girlFriend.mood;
}
mood();
function myFunction(x) {

    if  (x == "1") {
        girlFriend.hello();
        console.log(girlFriend.thought);
        
    }
    else if  (x == "2") {
        girlFriend.giveHug();
        console.log(girlFriend.thought);
        mood();
    }
    else if  (x == "3") {
        girlFriend.ignore();
        console.log(girlFriend.thought);
        mood();
    }

}

/*function setMood() {
    currentMood = girlFriend.mood;
    document.getElementById("mood").innerHTML = currentMood;
}
setMood()
function myFunction(x) {
    switch (myFunction(x)) {
        case "Hello":
            girlFriend.giveHug();
            document.getElementById("thoughts").innerHTML = recentThought;
            break;
        case "Hug":
            break;
        case "Ignore":
            
    }
    girlFriend.giveHug();
    /* if (x == "hello") {
    girlFriend.giveHug()
    //
    }
    else if (x == "ignore") {
    girlFriend.ignore()
    //
    }
    
    girlFriend.giveHug();
    document.getElementById("thoughts").innerHTML = girlfriend.recentThought;
    }
    document.getElementById("thoughts").innerHTML = recentThought
}
console.log(currentMood);
girlFriend.giveHug();
myFunction("hug");
console.log(currentMood);

switch (new Date().getDay()) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  } 
*/
