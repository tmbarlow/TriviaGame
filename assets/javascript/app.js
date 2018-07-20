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
	correctAnswers: 50
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
	correctAnswers: "John F. Kennedy Airport"
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
	answers: ["Cleopatra\'s Needle", "Cleopatra's Monument", "Washington Monument", "Washington Needle"],
	correctAnswers: "Cleopatra\'s Needle"
}, {
	question: "How many boroughs is New York made up of?", 
	answers: ["2", "3", "4", "5"],
	correctAnswers: 5
}];

var game = {
	//sets answers to 0 and starts time to 120
	correct: 0, 
	incorrect: 0, 
	counter: 120, 
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
	    			$("#subwrapper").append("<input type='radio' style='margin-left: 10px;' name='question-"+i+"' data-index='" + j +"' value= '"+questions[i].answers[j]+ " '>" +questions[i].answers[j]);
	    		}
	    	}
		//done button to submit answers when done
		$("#subwrapper").append('<br><br><button id="end">DONE</button>');
	}, 

	done: function(){
		
		$.each($('input[name="question-0"]:checked'), function(){
			var userPicked = $(this).attr("data-index")
			console.log(questions[0].correctAnswers)
			if( questions[0].answers[userPicked] == questions[0].answers[2]){
				console.log("hey you got it right")
				game.correct++;
			} else {
				game.incorrect++;
			}
			console.log(game.incorrect);
		});
		$.each($('input[name="question-1"]:checked'), function(){
			console.log($(this).val())
			console.log(questions[1].correctAnswers)
			var userPicked = $(this).attr("data-index")
			if(questions[1].answers[userPicked] == questions[1].answers[1]){
				console.log("hey you got it right")
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-2"]:checked'), function(){
			console.log($(this).val())
			console.log(questions[2].correctAnswers)
			var userPicked = $(this).attr("data-index")
			if(questions[2].answers[userPicked] == questions[2].answers[0]){
				console.log("hey you got it right")
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-3"]:checked'), function(){
			console.log($(this).val())
			console.log(questions[3].correctAnswers)
			var userPicked = $(this).attr("data-index")
			if(questions[3].answers[userPicked] == questions[3].answers[3]){
				console.log("hey you got it right")
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-4"]:checked'), function(){
			console.log($(this).val())
			console.log(questions[4].correctAnswers)
			var userPicked = $(this).attr("data-index")
			if(questions[4].answers[userPicked] == questions[4].answers[2]){
				console.log("hey you got it right")
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-5"]:checked'), function(){
			console.log($(this).val())
			console.log(questions[5].correctAnswers)
			var userPicked = $(this).attr("data-index")
			if(questions[5].answers[userPicked] == questions[5].answers[1]){
				console.log("hey you got it right")
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-6"]:checked'), function(){
			console.log($(this).val())
			console.log(questions[6].correctAnswers)
			var userPicked = $(this).attr("data-index")
			if(questions[6].answers[userPicked] == questions[6].answers[0]){
				console.log("hey you got it right")
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-7"]:checked'), function(){
			console.log($(this).val())
			console.log(questions[7].correctAnswers)
			var userPicked = $(this).attr("data-index")
			if(questions[7].answers[userPicked] == questions[7].answers[3]){
				console.log("hey you got it right")
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
		$('#subwrapper').append("<h3>Correct Answers: "+ this.correct +"</h3>");
		$('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
		$('#subwrapper').append("<h3>Unanswered: " +(questions.length-(this.incorrect+this.correct))+"</h3>");
	}
}	