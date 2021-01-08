'use strict';
var score = 0;

var questions = ['How old do you think I am?', 'With that information can you guess what year I graduated high school?', 'How many pets do you think I have?', 'Would you guess that I\'m a Mac or a Windows user?', 'Is Coke or Pepsi my preferred cola?'];
var answers = ['29','2010','2','windows', 'coke'];

function takeQuiz() {
function askQuestions() {
  for (var i = 0; i < 5; i++){
  var input = prompt(questions[i]);
  if (input == answers[i]){
    alert('That\'s correct!');
    score++ ; } 
    else if (input){
      input = input.toLowerCase();
      if (input == answers[i]){
        alert('That\'s correct!');
        score++ ;
      }
    }
  else {
    alert('Sorry, that\'s not correct.');
  }
}
}
askQuestions();
  var randomNumber = (Math.floor(Math.random()*10)) + 1;
    for(var i=0; i<4; i++){
    var number = prompt('Guess a number between 1 and 10');
      number = parseInt(number);
        if (number === randomNumber) {
          alert('That\'s correct!');
          score++;
          break;
        }
        else if (number > randomNumber){
          alert('That\'s too high!');
        }
        else if (number < randomNumber){
          alert('That\'s too low!');
        }
      }
      if (number !== randomNumber){
        alert('Actually, the number was ' + randomNumber + '.');
      }
  var answers = ['GREEN', 'TAUPE', 'PINK', 'ORANGE'];
    for (var x=0; x<6; x++){
      var color = prompt('Can you guess one of the four most influential colors of the day?');
        if (color.toUpperCase() === answers[0]){
          alert('That\'s a correct answer!');
          score++;
          break;
        }
        else if (color.toUpperCase() === answers[1]){
          alert('That\'s a correct answer!');
          score++;
          break;
        }
        else if (color.toUpperCase() === answers[2]){
          alert('That\'s a correct answer!');
          score++;
          break;
        }
        else if (color.toUpperCase() === answers[1]){
          alert('That\'s a correct answer!');
          score++;
          break;
        }
        else{
          alert('Sorry, that is not a correct answer!');
        }
      }
      alert('The correct answers were: green, taupe, pink, and orange!');
  alert('Your final score on this quiz was ' + score + '/7!');
 }

