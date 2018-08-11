$(document).ready(function() {

var questTime = 10;
var correctGuesses = 0;
var incorrectGuesses =0;






 // question & answer array
 var questions = [
    {
      question: "The South Park animated series takes place in which state?",
      choices: ["Washington", "Colorado", "California", "Montana"],
      correctAnswer: "Colorado",
      
    }, 
    {
      question: "The character famous for dying each episode is??",
      choices: ["Cartman", "Kyle", "Kenny", "Stan"],
      correctAnswer: "Kenny"
      
    }, 
    {
      question: "After Kenny died for good, this character was the gang's first replacement?",
      choices: ["Token", "Butters", "Jimmy", "Timmy"],
      correctAnswer: "Butters"
      
    }, 
    {
      question: "Cartman discovers the identity of his father and is shocked to learn it's?",
      choices: ["Chef", "Big Gay Al", "His Mother", "Mr. Garrison"],
      correctAnswer: "His Mother"
      
    }, 
    {
      question: "True or False: Kyle is in love with Wendy and vomits whenever she speaks to him",
      choices: ["True", "False","", ""],
      correctAnswer: "True"
      
    },
    {
      question: "In the episode Cartman gets an Anal Probe who was taken by aliens?",
      choices: ["Stan", "Shelly", "Cartman", "Ike"],
      correctAnswer: "Ike"
      
    },
    {
      question: "What cartoon is the gang's favorite?",
      choices: ["Tom and Jerry", "Ichy and Scratchy", "Terrance and Phillip", "The Simpsons"],
      correctAnswer: "Terrance and Phillip"
      
    },
    {
      question: "In the episode Chicken lover, Officer Barbrady is removed from duty because he can't read. Who takes his place?",
      choices: ["Chef", "Cartman", "Mr. Garrison", "Stan's Uncle Jimbo"],
      correctAnswer: "Cartman"
      
    },
    {
      question: "Who is the school's counselor, mmkay?",
      choices: ["Mr. Garrison", "Mr. Mackey", "Mrs. Crabtree", "PC Principle"],
      correctAnswer: "Mr. Mackey"
      
    }];
   var count = 0;
   var timerId = setInterval(countdown, 1000);

    
   
function renderQuestion () { 
  $("#answerDisplay").hide();
  $("#game").show();
    $("#questionHolder").text(questions[count].question);
    $("#answer1").text(questions[count].choices[0]);
    $("#answer2").text(questions[count].choices[1]);
    $("#answer3").text(questions[count].choices[2]);
    $("#answer4").text(questions[count].choices[3]);
}
renderQuestion ();




$(".answers").on("click", function() {
  var userChoice = $(this).html();
  $("#game").hide();
  $("#answerDisplay").show();
  if (userChoice === questions[count].correctAnswer) {
    $("#answerDisplay").text(questions[count].correctAnswer + " Is the correct choice!");
    correctGuesses++;
    $("#rGuess").text("Right Guesses: " + correctGuesses);
    clearTimeout(timerId);
    
    
  } else {
    $("#answerDisplay").text("Wrong Choice");
    incorrectGuesses++;
    $("#wGuess").text("Wrong Guesses: " + incorrectGuesses);
    
  }
  count++;
  setTimeout(renderQuestion, 3000);

  
  
  
  

});
 
    function countdown() {
          
      if (questTime == -1) {
          clearTimeout(timerId);
          
          
      } else {
        $("#qTimer").text("Question Timer: " + questTime);
          questTime--;
        
          
          
      }
    }
  
console.log(correctGuesses);








});