/*
	Name: Marco Ledesma
	Date: 4/29/2013
	Assignment: Functions_Wacky
	Description: This program will tell you what kind of person you are based on
	arbitrary values!
*/

function Wacky() {
	//quick intro
	alert("Welcome..Let me ask you a few questions and I'll try to figure out what kind of person you are");
	//get the year the person was born
	var year = parseInt(prompt("What year were you born?"));
	//get the month they were born
	var month = parseInt(prompt("What month were you born on?"));
	//get a random number from the user
	var randomNum = parseInt(prompt("Enter your favorite number"));
	//tell the user to check the console
	alert("check the console for results");
	//begin calculations!
	calculations(year, month, randomNum);
}

/*
	Summary: This will use a short math formula to calculate what kind of person you are!

	@year = year user was born
	@month = month user was born
	@rand = a random number
*/
function calculations(year, month, rand)
{
	//does a crazy math formula to come up to an arbitrary number
	var result = (((year + month)/rand)*year- (month*year*rand))/950;	

	//if that number is very negative
	if (result <= -1000)
	{		
		//tell the user they are negative person..
		console.log("You are one negative person!");
	}
	else if (result < 0)
	{
		//if only a little negative, then tell the user that
		console.log("Hmm..seems like your a little negative.");
	}
	else if (result >= 0)
	{
		//otherwise the user is a positive..human
		console.log("You seem like a positive fella!");		
	}
}
