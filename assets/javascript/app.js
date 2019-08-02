$( document ).ready(function() {
    $('#quiz').hide()

$("#button").on("click", function(){
    check()
})

$("#startBtn").on("click", function(){
    var counter=setInterval(timer, 1000);
    $("#startBtn").hide()
    $("#quiz").show()
})
function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var correct = 0;

        if (question1 == "1958") {
            correct++;
        }
        if (question2 == "6") {
            correct++;
        }
        if (question3 == "For the Benefit of All") {
            correct++;
        }
        if (question4 == "Apollo 12") {
            correct++;
        }
        if (question5 == "2009") {
            correct++;
        }
        if (question6 == "Explorer") {
            correct++;
        }

var messages = ["Great", "Awesome", "Well Done!"]

var range;

if (correct == 0) {
    range = 2;
}

if (correct > 0 && correct < 3) {
    range = 1;
}

if (correct == 3) {
    range = 0;
}

    document.getElementById('number_correct').style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}

// This counter works but is not dependent on the start button. I had lots of trouble here. 
var count=45;


    
function timer()
    {
      count=count-1;
      if (count <= -1)
      {
         clearInterval(counter);
         alert('Out of Time!');
         return;
      }
    
      document.getElementById("timer").innerHTML=count + " seconds remaining";
      
    }
})
