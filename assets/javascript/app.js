// start button
$("#start").on("click", function(){
   //calls the start function and timer begins wonce start button is clicked
    game.start();
    		
})

$(document).on('click', '#end', function(){
	//done button submits answers 
	game.done();
})

//questions, answers, and correct answers to game.
var questions = [{
	question: "About how many islands does New York City consist of?", 
	answers: ["5", "10", "50", "100"],
	correctAnswers: "50"
}, {
	question: "Times Square centers on the intersection of Broadway, 7th Avenue, and _______.", 
	answers: ["24th Street", "42nd Street", "56th Street", "65th Street"], 
	correctAnswers: "42nd Street"
}, {
	question: "Ellis Island was the famous entry point to New York for many million immigrants.", 
	answers: ["True", "False"],
	correctAnswers: "True"
}, {
	question: "What is the name of the main international airport at New York?", 
	answers: ["Ronald Reagan Airport", "Thomas Jefferson Airport", "Abraham Lincoln Airport", "John F. Kennedy Airport"], 
	correctAnswers: "John F. Kennedy"
}, {
	question: "New York is often referred to as the ...", 
	answers: ["Big Orange", "Small Cherry", "Big Apple", "Small Grape"],
	correctAnswers: "Big Apple"
}, {
	question: "Name the famous New York City building whose construction was completed in 1931", 
	answers: ["World Trade Center", "Empire State", "Mew York Times", "Rockefeller"], 
	correctAnswers: "Empire State"
}, {
	question: "What is the red granite obelisk in Central Park of New York called?", 
	answers: ["Cleopatra's Needle", "Cleopatra's Monument", "Washington Monument", "Washington Needle"],
	correctAnswers: "Cleopatra's Needle"
}, {
	question: "How many boroughs is New York made up of?", 
	answers: ["2", "3", "4", "5"],
	correctAnswers: "5"
}];

var game = {
	//sets answers to 0 and starts time to 120
	correct: 0, 
	incorrect: 0, 
	counter: 15, 
	//
	countdown: function(){
		game.counter--;
		$("#counter").html(game.counter);
		if (game.counter <= 0) {
			//calls done function
			game.done();		
		}
	},

	//function starts the game
	start: function(){
		//countdown timer every second. 120 sec to play the game
		timer = setInterval(game.countdown, 1000);
		//inserts element to add counter of time remaining
		$("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>')
		//removes tsrt button and inserts the qeustions. 
		$("#start").remove();
	    //lists all the questions and multipule choice answers 
	    for (var i = 0; i < questions.length; i++) {
	    	$("#subwrapper").append("<h4> "+questions[i].question+" </h4>");
	    		for (var j = 0; j < questions[i].answers.length; j++) {
	    			//adding radio buttons so player can only choose one answer
	    			$("#subwrapper").append("<input type='radio' style='margin-left: 10px;' name='question-"+i+"' value= '"+questions[i].answers[j]+ " '>" +questions[i].answers[j]);
    		}
		}
		//done button to submit answers when done
		$("#subwrapper").append('<br><br><button id="end">DONE</button>');
	}, 

	done: function(){
		
		$.each($('input[name="question-0"]:checked'), function(){
			if($(this).val()==questions[0].correctAnswers){
				game.correct++;
			} else {
				game.incorrect++;
			}
			console.log(game.incorrect);
		});
		$.each($('input[name="question-1"]:checked'), function(){
			if($(this).val()==questions[1].correctAnswers){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-2"]:checked'), function(){
			if($(this).val()==questions[2].correctAnswers){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-3"]:checked'), function(){
			if($(this).val()==questions[3].correctAnswers){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-4"]:checked'), function(){
			if($(this).val()==questions[4].correctAnswers){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-5"]:checked'), function(){
			if($(this).val()==questions[5].correctAnswers){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-6"]:checked'), function(){
			if($(this).val()==questions[6].correctAnswers){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-7"]:checked'), function(){
			if($(this).val()==questions[7].correctAnswers){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
	//calls result function
	this.result();			
	},

	result: function(){
		//function desplays incorrect and correct answers
		clearInterval(timer);
		$('#subwrapper h2').remove();
		$('#subwrapper').html("<h2>All done!</h2>");
		$('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
		$('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
		$('#subwrapper').append("<h3>Unanswered: " +(questions.length-(this.incorrect+this.correct))+"</h3>");
	}
}	