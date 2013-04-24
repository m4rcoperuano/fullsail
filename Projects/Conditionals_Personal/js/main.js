/*
	Name: Marco Ledesma
	Date: April 23, 2013
	Assignment: Conditional Personal
	Description: How much money you make a year
*/

function log(message) {
	console.log(message);
}

function DoProject() 
{
	alert("Here we go again..");
	alert("So this program will calulate how much money (gross) you make a year. So. Lets do this....");
	var name = prompt("What's your name?");

	var areYouSalary = prompt("Are you salary? Enter Y or N");
	while (areYouSalary.toLowerCase() != "y" && areYouSalary.toLowerCase() != "n")
	{
		areYouSalary = prompt("Are you salary? Enter Y or N!");
	}

	if (areYouSalary == "Y")
	{

	}
	else 
	{
		alert("Alright, assuming your hourly..");
		var howMuchHourly = prompt("How much do you make per hour? Enter a number.");
		var howManyHours = prompt("How many hours do you work a week? Enter a number.");

		var hourlyNumber = parseInt(howMuchHourly);
		var howManyHoursNumber = parseInt(howManyHours);

		while (isNaN(hourlyNumber))
		{
			howMuchHourly = prompt("How much do you make per hour? Enter a number!");
			hourlyNumber = parseInt(howMuchHourly);
		}
		while (isNaN(howManyHoursNumber))
		{
			howManyHours = prompt("How many hours do you work a week? Enter a number.");
			howManyHoursNumber = parseInt(howManyHours);
		}

		var result = hourlyNumber * (howManyHoursNumber * 52);

		alert("Please check the console for the results");
		log("Hello " + name + "! Here are your results..");

		if (result <= 25000)
		{
			log("Cool! You make a decent wage. You make $" + result + " a year!");
		}
		else if (result <= 40000)
		{
			log("Not bad! You make a good wage. You make $"+result + " a year!");
		}
		else if (result <= 60000)
		{
			log("Now we're cooking! You make a pretty good wage (in most places). You make $" + result+ " a year!");
		}
		else
		{
			log("You must be doing pretty good. Very cool. You make $" + result + " a year!");
		}
	}
	
}