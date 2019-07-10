let pet = {
    name: "Thari",
    age: 27,
    pronoun: "she",
    mood: "Neutral",
    moodRating: 50,
    outfit: ["blue shorts","black bra", "white undies", "yellow t-shirt", "white socks", "black shoes" ],
    hungery: false,
    hungerRating: 50,
    cute: true,
    thought: "",
    pet() {
        pet.mood = "Happy";
        pet.thought = "This makes " + pet.name + " happy!"
        document.getElementById("thoughts").innerHTML = pet.thought;
    },
    ignore() {
        if (pet.mood == "Happy") {
            pet.mood = "Neutral"
            pet.thought = pet.name + " feels ignored!"
            document.getElementById("thoughts").innerHTML = pet.thought;
 
    
        }
        else if (pet.mood == "Neutral") {
            pet.mood = "Sad"
            pet.thought = pet.name + " feels ignored and sad! :("
            document.getElementById("thoughts").innerHTML = pet.thought;
        }
    },
    hello() {
        pet.thought = pet.name + " says hello back!"
        document.getElementById("thoughts").innerHTML = pet.thought;
    }
}
function gfStatistics() {// function to update statistics in HTML. Call on any statistic change
    document.getElementById("mood").innerHTML = pet.mood;
}
gfStatistics();

function button(x) {// the function attaching methods to buttons on HTML page

    if  (x == "1") {
        pet.hello();
        console.log(pet.thought);
        
    }
    else if  (x == "2") {
        pet.pat();
        console.log(pet.thought);
        gfStatistics();
    }
    else if  (x == "3") {
        pet.ignore();
        console.log(pet.thought);
        gfStatistics();
    }

}

