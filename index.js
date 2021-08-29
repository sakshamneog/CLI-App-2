var readlinesync = require('readline-sync')
const chalk = require('chalk');



console.log(chalk.redBright("Welcome to Saksham's Movie Quiz"  ));
var score = 0;


function play(question,Answer){
  var userAnswer= readlinesync.question(question);
  if(
    userAnswer== Answer

  )
  {
    console.log(chalk.blue("That is the correct answer"));
    score= score + 1;
    console.log(chalk.magenta("Your  Score:"  +  score));




  }
  else {
    console.log(chalk.redBright("Wrong!")); 
     console.log(chalk.magenta("Your Score:"  +  score));
     console.log("-----------")
     
    
  }

}

 var questions = [{
  question: "Which is the highest imdb rated movie of all time?",

  answer: "The Shawshank Redemption",





},
{
  question: "This director is known for films like fight club ,social network, Gone Girl",

  answer: "David Fincher",





},
{
  question: "This director is the only Indian to win an honorary oscar award",

  answer: "Satyajit Ray",





},
{
  question: "This director is considered the greatest of all time, , some of his films are Full Metal Jacket, Eyes Wide Shut",

  answer: "Stanley Kubrick",





},
{
  question: "This film won best international film at the Academy in 2021",

  answer: "Another Round",





}







 ];
 

 for(i=0;i< questions.length ; i++){

   var currentQuestion= questions[i]
   play(currentQuestion.question, currentQuestion.answer )
   
 }
 
 console.log("your final score", score)
 console.log("Highest Score till now : 5 ")









