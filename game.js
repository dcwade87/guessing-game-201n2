function insertText(insertString) {
  return document.getElementById("answerLog").innerHTML = insertString;
}
  insertText("Welcome to this REALLY cool page!!!  Let's play some games shall we?  To view this page you must first guess my age.");
// Age guess while loop // 
var correctGuess = 0
var myAge = 28
var chances = 5
  var ageArray = ["Alright hot shot, not bad.  Now lets see if you can answer some questions about me.", "Your guess is way too high!  I'm not the Crypt Keeper...", "Your guess is too high but very close.  Try a lower number!", "Your guess is way too low!  I know, I have such a baby face...", "Your guess is too low but very close.  Try a higher number!", "That answer is downright wrong.  Try guessing with an integer!", "Sorry buddy, looks like you're out of guesses.  Now lets see if you can answer some questions about me."]

while (myAge && chances > 0) {
  var guessAge = parseInt(prompt ("How old am I?  You have " + chances + " guesses left."));

if (guessAge == 28 ) {
    correctGuess += 1;
    insertText(ageArray[0]);
    break;

  } else if (chances == 1) {
    insertText(ageArray[6]);
    break;

  } else if (guessAge > 32) {
    insertText(ageArray[1]);
    chances -= 1;

  } else if (guessAge >= 29 && guessAge <= 32) {
    insertText(ageArray[2]);
    chances -= 1;

  } else if (guessAge < 23) {
    insertText(ageArray[3]);
    chances -= 1;

  } else if (guessAge >= 23 && guessAge <= 27) {
    insertText(ageArray[4]);
    chances -= 1;

  } else if (guessAge = isNaN) {
    insertText(ageArray[5]);
    chances -= 1;
  }
}
// For loop //
var questionsThree = ["What is my favorite drink?  Coffee, water, or tea?", "What state am I originally from?  Alaska, Arizona, or Washington?", "Can you guess my favorite color?"]
var questionAnswers = ["water", "alaska", "purple"]
var threeAnswersCorrect = ["Water is indeed my favorite drink!  Vodka would have also been acceptable.", "It's true, I'm from Alaska...Pre Sarah Palin, of course.", "Kind of obvious, isn't it?"]
var threeAnswersWrong = ["Water - duh!  It's the best drink in the world.", "Nah, AK represent yo.", "Hm...You might want to look more closely at this page and re-think your answer..."]
var answerArr = []

function aboutMe(question, answers, correct, incorrect) {
  var play = prompt(question).toLowerCase();
if (play === answers) {
    insertText(threeAnswersCorrect[i]);
    correctGuess += 1;

  } else {
    insertText (threeAnswersWrong[i]);
  }
}

for (var i = 0; i < questionsThree.length; i++) {
  aboutMe(questionsThree[i], questionAnswers[i], threeAnswersCorrect[i], threeAnswersWrong[i]);
}
// Silly stuff //
function monthPythonGame(question){
  var answer = prompt(question).toLowerCase();

if (answer == "holy grail" || answer == "to seek the holy grail") {
    insertText("You sure do know your Monty Python references.  You get the bonus point!");
    correctGuess +=2;
  } else {
    correctGuess +=1;
    insertText(" ");
  }
  answerArr.unshift(answer);
}
monthPythonGame("Now tell me something about yourself...\nWhat...is your name?")
monthPythonGame("What...is your quest?")
  var favColor = prompt("What...Is your favorite color?");
      console.log(answerArr[1] + "'s favorite color is " + favColor.toLowerCase());

if (favColor.toLowerCase() === "purple") {
    correctGuess += 1
    document.title = (answerArr[0].toUpperCase()+("!!!"));
    insertText("Excellent work, you have chosen wisely!  You got " + correctGuess + " out of 8 points!  Now enjoy this pleasantly purple page!");
    document.getElementById('hiddenContent').style.display= "block";
    document.getElementById("name").innerHTML = ("CONGRATULATIONS " + answerArr[1].toUpperCase() + "!!!");

  } else {
    insertText("Okay " + answerArr[1] + " , that's nice, but " + favColor.toLowerCase() +  " is a terrible color so you don't get to see this REALLY cool page...!");
  }
