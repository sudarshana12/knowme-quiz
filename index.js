var readlineSync = require("readline-sync");
// var userInput = readlineSync.question()

questionOne = {
  q : "What is my nickname?",
  a : "Orki" 
}
questionTwo = {
  q : "Dogs or cats?",
  a : "cats"
}
questionThree = {
  q : "Beer or wine?",
  a : "wine"
}
questionFour = {
  q : "Mountains or beaches?",
  a : "beaches" 
}
var score = 0;
var quiz = [questionOne, questionTwo, questionThree, questionFour];

for(var i=0; i<quiz.length; i++  ){
  // console.log(quiz[i].question);
  var userAnswer = readlineSync.question(quiz[i].q)
  if(userAnswer.toLowerCase() == quiz[i].a.toLowerCase()){
    console.log("You are right!");
    score += 1;
    console.log("Your score is: ",score);
  }else{
    console.log("You are wrong!");
  }

}


