'use strict';
var score = 0;
var name = prompt('Hi! What\'s your name?');
  var age = prompt('Hi, ' + name + '!' + ' Can you guess how old I am?');
  if (age == 29){
    alert('That\'s correct!');
    score++ ;
  }
  else {
    alert('Sorry, that\'s not correct. I\'m actuallly 29.');
  }
var year = prompt('With that information can you guess what year I graduated high school?')
  if (year == 2010 || year == '\'10'){
    alert('That\'s correct!');
    score++ ;
  }
  else {
    alert('Sorry that\'s not correct. I graduated high school in 2010');
  }
  var pets = prompt('How many pets do you think I have?')
    pets = pets.toUpperCase();
    if (pets == 2 || pets == 'TWO'){
      alert('That\'s correct!');
      score++ ;
    }
    else {
      alert('Sorry, the correct answer was 2.');
    }
  var os = prompt('Would you guess that I\'m a Mac or a Windows user?')
    os = os.toUpperCase();
    if (os == 'WINDOWS'){
      alert('That\'s correct!');   
      score++ ;       
    }
    else {
      alert('Sorry, I don\'t really know how to use any operating systems besides Windows unfortunately.');
      }
  var cola = prompt('Is Coke or Pepsi my preferred cola?')
      cola = cola.toUpperCase();
      if (cola == 'COKE'){
        alert('That\'s correct!');   
        score++ ;       
      }
      else {
        alert('Sorry, my cousin told me that Pepsi is made from rat tails when I was very young.');
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
  

