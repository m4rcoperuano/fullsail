/*
	Name: Marco Ledesma
	Date: April 17, 2013
	Assignment: Expressions_Personal
*/


var startProgram = function() {
	alert("This personal program of mine will calculate how much money in gas you will spend in a year");
	var mpg = prompt("Enter your car's mpg (miles per gallon)");
	var estimatedFuelPrice = prompt("Enter the current price for today's gas (i.e. if gas is 3.95/gal, then enter 3.95)");
	var milesPerYear = prompt("Finally, enter the number of miles you may drive in a year");

	mpg = parseInt(mpg);
	estimatedFuelPrice = parseFloat(estimatedFuelPrice);
	milesPerYear = parseInt(milesPerYear);

	//error checking
	if (isNaN(mpg) || isNaN(estimatedFuelPrice) || isNaN(milesPerYear))
	{
		var conf = confirm("Whoah! One of your entries was not a number. Please do not enter characters, only numbers. Click OK to restart this program");
		if (conf == true) {
			startProgram();
			return;
		}
		else {
			return;
		}
	}

	alert("Please check the console for the result, plus additional info (F12)");
	console.log("MPG you entered: " +mpg);
	console.log("Fuel price you entered: " +estimatedFuelPrice);
	console.log("And the total miles you will drive in the year: "+milesPerYear);
	console.log("----------------------------------------------");
	
}