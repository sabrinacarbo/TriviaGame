//=========================== GLOBAL VARIABLES ========================

var correctAnswerCounter = 0;
var incorrectAnswerCounter = 0;
var unansweredAnswerCounter = 0;

var questionArray = [{
    question: "The man in black is Westley.",
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

console.log(questionArray[0].question);
console.log(questionArray[0].answer);

//Variable to hold the random question from the array
var randomQuestion = [];

//============================= FUNCTIONS ==============================

//Page loads
$(document).ready(function(){

//----------------------------- GAME START ----------------------------

function pageLoads (resetGame){

    //Resets all counters
    correctAnswerCounter = 0;
    incorrectAnswerCounter = 0;
    unansweredAnswerCounter = 0;

};

//User pushes the start button to begin the game
    $("#startBtn").click(function(startGame){
        alert("Ready!");

        //Timer starts to count down ******* CHECK CODE ******  <================================ *****
        // Change the "display" id to "00:00."
        //$("#display").text("Time Remaining: " + "00:00" + "seconds");
    });



//========================== CONDITIONALS ===========================
function answerChoice(){

//Loop for questions displayed
    for (var i = 0; i < questionArray.length;i++){

    //Random question is generated
    randomQuestion = Math.floor(Math.random(questionArray[i]));

    console.log(randomQuestion);

    //User chooses either True or False

    //Next question populates randomly

    //User chooses either True or False

    // $("#trueBtn").prop("checked", true);  //May not need true or false after checked ****
    // $("#falseBtn").prop("checked", false);

    }
    
//User choice logic:
    //If keyPressed == true && answer == true, then correctAnswerCounter ++ 
    //and the next question is generated

    //If keyPress == true && answer == false, then incorrectAnswerCounter ++
    //and the next question is generated

    //If keyPress == false && answer == false, then correctAnswerCounter ++
    //and the next question is generated

    //If keyPress == false && answer == true, then incorrectAnswerCounter ++
    //and the next question is generated
};
 answerChoice();




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








});