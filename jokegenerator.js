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

//console.log(Object.keys(jokes_bank).length);

//jokes_bank.forEach(element => {console.log(element)});

function random(dict){
    a = Math.floor(Math.random()* Object.keys(dict).length + 1)
    console.log(a);
    console.log(Object.entries(dict)[a]);
}

random(jokes_bank);