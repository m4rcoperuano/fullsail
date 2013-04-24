/*
	Name: Marco Ledesma
	Date: April 23, 2013
	Assignment: Conditional Personal
	Description: How much money you make a year
*/

function DoProject() 
{
	alert("Here we go again..");
	var name = prompt("What's your name?");

	var areYouSalary = prompt("Are you salary? Enter Y or N");
	while (areYouSalary != "Y" || areYouSalary != "N")
	{
		areYouSalary = prompt("Are you salary? Enter Y or N!");
	}

	if (areYouSalary == "Y")
	{

	}
	else 
	{
		alert("Alright, assuming your salary..");
		var howMuchHourly = prompt("How much do you make per hour? Enter a number.");
		var howManyHours = prompt("How many hours do you make?");

		var hourlyNumber = parseInt(howMuchHourly);
		var howManyHoursNumber = parseInt(howManyHours);
		while (isNaN(hourlyNumber) || isNaN(howManyHoursNumber))
		{
			howMuchHourly = prompt("How much do you make per hour? Enter a number.");
			howManyHours = prompt("How many hours do you make?");

			hourlyNumber = parseInt(howMuchHourly);
			howManyHoursNumber = parseInt(howManyHours);
		}
	}
	
}