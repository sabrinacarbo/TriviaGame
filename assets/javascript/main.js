//=========================== GLOBAL VARIABLES ========================

var correctAnswerCounter = 0;
var incorrectAnswerCounter = 0;
var unansweredAnswerCounter = 0;

var questionObject = [{
    question: "The man in black is Westley",
    answer: true,
},{
    question: "Westley was the next door neighbor to Buttercup.",
    answer: false,
},{
    question: "Humperdinck is the Prince of Florin.",
    answer: true,
},{
    question: "R.O.U.S. stands for Rat of Unusual Shape.",
    answer: false,
},{
    question: "Buttercup nearly suffocated in the Fire Swamp.",
    answer: true,
},{
    question: "Domingo Montoya is the six-fingered man.",
    answer: false,
},{
    question: "The Dread Pirate Roberts is believed to have killed Westley while sailing to America.",
    answer: true,
},{
    question: "Westley poisoned Inigo.",
    answer: false,
},{
    question: "Inigo wanted to kill Count Rugen to avenge his father's death.",
    answer: true,
},{
    question: "Fezzik was made fun being the size of a teenager at the age of six when he was in school.",
    answer: false,
}
];

//============================= FUNCTIONS ==============================

//----------------------------- GAME START ----------------------------

//========================== CONDITIONALS ===========================


//Page loads

//User pushes the start button to begin the game

//Timer starts to count down ******* CHECK CODE ******  <================================ *****
    // Change the "display" id to "00:00."
    // $("#display").text("Time Remaining: " + "00:00" + "seconds");


//Random generator needed:
    //Random question is generated



    //User chooses either True or False

    //Next question populates randomly

    //User chooses either True or False

//User choice logic:
    //If keyPressed == true && answer == true, then correctAnswerCounter ++ 
    //and the next question is generated

    //If keyPress == true && answer == false, then incorrectAnswerCounter ++
    //and the next question is generated

    //If keyPress == false && answer == false, then correctAnswerCounter ++
    //and the next question is generated

    //If keyPress == false && answer == true, then incorrectAnswerCounter ++
    //and the next question is generated

//Game completion:
    //If questionArray < 1, then game is over
    //If timer == 0, then game is over

//Upon completion:
    //correctAnswerCounter = (total correct answers)
    //incorrectAnswerCounter = (total incorrect answers)
    //unansweredAnswerCounter  = (total unanswered questions)


//Listening event



//Option button to choose answer for question
//// Check #x
// $( "#x" ).prop( "checked", true );
 
// // Uncheck #x
// $( "#x" ).prop( "checked", false );