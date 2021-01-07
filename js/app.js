'use strict';
var score = 0;
var questions = ['Hi! What\'s your name?', 'With that information can you guess what year I graduated high school?', 'How many pets do you think I have?', 'Would you guess that I\'m a Mac or a Windows user?', 'Is Coke or Pepsi my preferred cola?'];
var answers = ['29','2010','2','windows', 'coke'];

var name = prompt('Hi! What\'s your name?');
alert('Hi' + name + '!');
function age() {
  var age = prompt(questions[0]);
  if (age == answers[0]){
    alert('That\'s correct!');
    score++ ;
  }
  else {
    alert('Sorry, that\'s not correct. I\'m actuallly 29.');
  }
}
  function school() {
var year = prompt(questions[1]);
  if (year == answers[1]){
    alert('That\'s correct!');
    score++ ;
  }
  else {
    alert('Sorry that\'s not correct. I graduated high school in 2010');
  }
}
  function pets() {
  var pets = prompt(questions[2]);
    pets = pets.toLowerCase();
    if (pets == answers[2]){
      alert('That\'s correct!');
      score++ ;
    }
    else {
      alert('Sorry, the correct answer was 2.');
    }
  }
  function os() {
  var os = prompt(questions[3]);
    os = os.toLowerCase();
    if (os == answers[3]){
      alert('That\'s correct!');   
      score++ ;       
    }
    else {
      alert('Sorry, I don\'t really know how to use any operating systems besides Windows unfortunately.');
      }
    }
  function cola() { 
  var cola = prompt(questions[4]);
      cola = cola.toLowerCase();
      if (cola == answers[4]){
        alert('That\'s correct!');   
        score++ ;       
      }
      else {
        alert('Sorry, my cousin told me that Pepsi is made from rat tails when I was very young.');
        }
      }
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
  

age();
school();
pets();
os();
cola();