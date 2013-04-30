/*
	Name: Marco Ledesma
	Date: 4/29/2013
	Assignment: Functions_Wacky
	Description: Random!
*/

function Wacky() {
	alert("Welcome..Let me ask you a few questions and I'll try to figure out what kind of person you are");
	var year = parseInt(prompt("What year were you born?"));
	var month = parseInt(prompt("What month were you born on?"));
	var randomNum = parseInt(prompt("Enter your favorite number"));
	calculations(year, month, randomNum)
}

function calculations(year, month, rand)
{
	var result = (((year + month)/rand)*year- (month*year*rand))/950
	console.log(result);
}
