
  var correctGuess = 0

    alert("Welcome to this REALLY cool page!!!  Let's play some games shall we?");
    alert("To view this page you must first guess my age.");

// // Age guess while loop //
  var myAge = 28
  var ageCounter = 0
while (myAge) {
    var guessAge = parseInt(prompt ("How old am I?"));
    console.log("User has entered the number" + " " + guessAge);

if (guessAge == 28 ) {
    correctGuess += 1;
    ageCounter += 1;
    alert("Alright hot shot, good job.  That only took you " + ageCounter + " guesses!\nNow I'm thinking of a number between 1 and 10.  Can you guess it?");
    console.log("User guessed correct");
    break;

} else if (guessAge > 32) {
    alert("Your guess is way too high!  I'm not the Crypt Keeper...");
    ageCounter += 1;
    console.log("User guessed way too high");

} else if (guessAge >= 29 && guessAge <= 32) {
    alert("Your guess is too high but very close.  Try a lower number!");
    ageCounter += 1;
    console.log("User guessed too high");

} else if (guessAge < 23) {
    alert("Your guess is way too low!  Although I have been using a new face cream, so thanks for noticing...");
    ageCounter += 1;
    console.log("User guessed way too low");

} else if (guessAge >= 23 && guessAge <= 27) {
    alert("Your guess is too low but very close.  Try a higher number!");
    ageCounter += 1;
    console.log("User guessed too low");

} else if (guessAge = isNaN) {
    alert("That answer is downright wrong.  Try guessing with an integer!");
    ageCounter += 1;
    console.log("User guessed with a string");
  }
}

// // My number while loop //
  var chances = 3
  var myNumber = 8

while (myNumber && chances > 0){
    var guessNumber =prompt("What is my number?  You have " + chances + " guesses remaining.");

if (guessNumber == 8 ) {
    alert("Right you are!  8 is the greatest number in all of the land!");
    console.log("User correctly guessed the number 8");
    correctGuess += 1;
    break;

} else if ( chances == 1) {
    alert("Bummer!  Looks like you're out of chances...Better luck next time.");
    chances -=1;

} else if (guessNumber < 8 || guessNumber > 8) {
    alert("Oh dear...That's not right at all.  Try again!");
    console.log("User guessed wrong");
    chances -= 1;

} else if (guessNumber = isNaN) {
    alert("That answer is downright wrong.  Try guessing with an integer!");
    chances -=1;
    console.log("Use guessed with a string");
  }
}

  var answerArr = []
// Function practice //

  function monthPythonGame(question){
  var answer = prompt(question).toLowerCase();

while (answer != "" || answer != 0) {
  if (answer == "") {
    alert("What are you doing!?  You have to enter SOMETHING!");

  } else if (answer >= 0 || answer <= 0) {
    alert("The number games are over - Use your words!");
    return prompt(question)

  } else {
    correctGuess +=1;
  }
  answerArr.unshift(answer);
  console.log("User has entered " + answerArr[0])
  break;
  }
}

monthPythonGame("What...is your name?")
monthPythonGame("What...is your quest?")


  var favColor = prompt("What...Is your favorite color?");
      console.log(answerArr[1] + "'s favorite color is " + favColor.toLowerCase());

if (favColor.toLowerCase() === "purple") {
    correctGuess += 1
    document.title = (answerArr[0].toUpperCase()+("!!!"));
    alert("Excellent work " + answerArr[1] + ", you have chosen wisely!\nYou have guessed " + correctGuess + " out of 5 questions right!\nNow enjoy this pleasantly purple page!");
    console.log(answerArr[1] + " has amazing taste and will now be shown this awesome page");
    document.getElementById('hiddenContent').style.display= "block";
    document.getElementById("name").innerHTML = ("CONGRATULATIONS " + answerArr[1].toUpperCase() + "!!!");

} else {
    console.log(answerArr[1] + " has poor taste and will now be ejected from the website");
    alert("Okay " + answerArr[1] + " , that's nice, but " + favColor.toLowerCase() +  " is a terrible color so get off my page!");
    window.close(); }
