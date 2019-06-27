/* let recentThought = "nothing"
let currentMood = ""
*/

let girlFriend = {
    name: "Thari",
    age: 26,
    pronoun: "she",
    mood: "Neutral",
    hunger: 50,
    hogwardsHouse: "Ravenclaw",
    cute: true,
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
        girlFriend.thought = girlFriend.name + " says hello back!"
        document.getElementById("thoughts").innerHTML = girlFriend.thought;
    }
}
function gfStatistics() {// function to update statistics in HTML. Call on any statistic change
    document.getElementById("mood").innerHTML = girlFriend.mood;
}
gfStatistics();
function button(x) {// the function attaching methods to buttons on HTML page

    if  (x == "1") {
        girlFriend.hello();
        console.log(girlFriend.thought);
        
    }
    else if  (x == "2") {
        girlFriend.giveHug();
        console.log(girlFriend.thought);
        gfStatistics();
    }
    else if  (x == "3") {
        girlFriend.ignore();
        console.log(girlFriend.thought);
        gfStatistics();
    }

}

