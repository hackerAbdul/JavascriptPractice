jokes_bank = {
    "How do you get a squirrel to like you?": "Act like a nut.",
    
    "What do you call two birds in love?" : "Tweethearts",
    
    "How does a scientist freshen her breath?" : "With experi-mints.",
    
    "How are false teeth like stars?" : "They come out at night.",
    
    "What building in your town has the most stories?" : "The public library.",
    
    "What’s worse than finding a worm in your apple?" : "Finding half a worm.",
    
    "What is a computer’s favorite snack?" : "Computer chips.",
    
    "What did one volcano say to the other?" : "I lava you.",
    
    "How do we know that the ocean is friendly?" : "It waves.",
    
    "What is a tornado’s favorite game to play?" : "Twister.",
    
    "How does the moon cut his hair?": "Eclipse it.",
    
    "How do you talk to a giant?": "Use big words."};




//random generator function 
function random(dict){
    //create the randomiser
    randomiser = Math.floor(Math.random()* Object.keys(dict).length)
    console.log(randomiser);
    //will store the joke as an array
    joke_made = (Object.entries(dict)[randomiser]);
    //finally calls on the joke via the position of its key value pair
    console.log(`${joke_made[0]}: ${joke_made[1]}`)
}

random(jokes_bank);