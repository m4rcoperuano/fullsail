/*
	Name: Marco Ledesma
	Date: April 17, 2013
	Assignment: Expressions_Personal
	Description: What this program does is calculate the amount of money you will spend 
	on gas by driving x amount of miles in the year. It asks your MPG of your vehicle,
	the current gas price right now, and the miles you'll drive in the year
*/

//this function is inside the onclick attribute of the button in my html page
var startProgram = function() {
	//introduction to the program
	alert("This personal program of mine will calculate how much money in gas you will spend in a year");
	//get miles per gallon from the user's vehicle
	var mpg = prompt("Enter your car's mpg (miles per gallon)");
	//get the fuel price per gallon right now (an approximation)
	var estimatedFuelPrice = prompt("Enter the current price for today's gas (i.e. if gas is 3.95/gal, then enter 3.95)");
	//get the total miles in the year they drive
	var milesPerYear = prompt("Finally, enter the number of miles you may drive in a year");

	//start parsing some strings
	mpg = parseInt(mpg); //get mpg int value
	estimatedFuelPrice = parseFloat(estimatedFuelPrice); //get float value
	milesPerYear = parseInt(milesPerYear); //get int value 

	//error checking
	if (isNaN(mpg) || isNaN(estimatedFuelPrice) || isNaN(milesPerYear))
	{
		//if any of these are not numbers (if user has entered characters) execute the following
		var conf = confirm("Whoah! One of your entries was not a number. Please do not enter characters, only numbers. Click OK to restart this program");
		//If user clicks OK in the confirm box, then restart the program, else, do nothing
		if (conf == true) {
			startProgram(); //restart program
			return; //must be here otherwise it'll continue executing the code below after it already restarts the program
		}
		else {
			return; //exit function
		}
	}

	//tell the user that the results will be displayed in the console
	alert("Please check the console for the result, plus additional info (F12)");
	//recap
	console.log("MPG you entered: " +mpg); //display mpg
	console.log("Fuel price you entered: " +estimatedFuelPrice); // display fuel price that they entered
	console.log("And the total miles you will drive in the year: "+milesPerYear); // display the total miles they entered
	console.log("----------------------------------------------");

	//round the results of milesPerYear/mpg, otherwise the result has 6 decimal places
	//round the total cost as well
	var totalGallonsUsedInYear = Math.round((milesPerYear/mpg) * 100)/100,
		totalCost = Math.round((totalGallonsUsedInYear * estimatedFuelPrice) * 100)/100;

	//output text variable will hold a long string, concatenating and also adding new line 
	//escape character
	var outputText = "Using very simplistic math, i came up with the following:\n";
	outputText += "In a year, you will use " + totalGallonsUsedInYear + " gallons of fuel.\n";
	outputText += "This means, at $" + estimatedFuelPrice + " a gallon, you will spend about $" + totalCost + "!\n";
	console.log(outputText);
}