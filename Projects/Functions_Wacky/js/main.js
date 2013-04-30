/*
	Name: Marco Ledesma
	Date: 4/29/2013
	Assignment: Functions_Wacky
	Description: This program will tell you what kind of person you are based on
	arbitrary values!
*/

function Wacky() {
	alert("Welcome..Let me ask you a few questions and I'll try to figure out what kind of person you are");
	var year = parseInt(prompt("What year were you born?"));
	var month = parseInt(prompt("What month were you born on?"));
	var randomNum = parseInt(prompt("Enter your favorite number"));
	alert("check the console for results");
	calculations(year, month, randomNum);
}

function calculations(year, month, rand)
{
	var result = (((year + month)/rand)*year- (month*year*rand))/950;	

	if (result <= -1000)
	{		
		console.log("You are one negative person!");
	}
	else if (result < 0)
	{
		console.log("Hmm..seems like your a little negative.");
	}
	else if (result >= 0)
	{
		console.log("You seem like a positive fella!");		
	}
}
