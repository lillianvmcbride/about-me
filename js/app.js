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
  alert('Your score on this quiz was ' + score + '/4!');
  

