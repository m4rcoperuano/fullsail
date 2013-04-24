/*
	Name: Marco Ledesma
	Date: April 23, 2013
	Assignment: Conditional Personal
	Description: How much money you make a year
*/

//using this function because I'm tired of typing console.log
function log(message) {
	console.log(message);
}

//this function executes when the button is clicked
function DoProject() 
{
	alert("Here we go again.."); //project begin! and description below
	alert("So this program will calulate how much money (gross) you make a year. So. Lets do this....");
	var name = prompt("What's your name?"); //get user's name
	while(name.replace(" ", "") == "") //basically the jquery $.trim function
		//however, regular expressions would validate better since this
		//only looks for one space character, not multiple
	{
		name = prompt("What's your name?!"); //while the name entered is blank, keep asking for the user's name till we get something
	}

	//is the user getting salary
	var areYouSalary = prompt("Are you salary? Enter Y or N");
	//error checking. Was the value entered either y or n
	while (areYouSalary.toLowerCase() != "y" && areYouSalary.toLowerCase() != "n")
	{
		//keep asking till we get the proper value
		areYouSalary = prompt("Are you salary? Enter Y or N!");
	}

	//if the user does receive salary
	if (areYouSalary == "Y")
	{
		//unfortunately, we have no implemented functionality for salary
		//odds are, the user already knows how much they make a year this way
		var salary = confirm("Fantastic, your salary. Unfortunately this program doesn't support salary. Please click 'OK' to run this program again. Make sure you type N when the salary prompt appears");
		if (salary == true)
		{
			//the user can choose to re-run the program if they choosed salary.
			//they can type N to see what the program does if they are not salary
			DoProject();
			return;
		}
	}
	else 
	{
		//quick intro of hourly
		alert("Alright, assuming your hourly..");
		//ask how much they make hourly and how many hours a week they work
		var howMuchHourly = prompt("How much do you make per hour? Enter a number.");
		var howManyHours = prompt("How many hours do you work a week? Enter a number.");

		//parse these strings into int's
		var hourlyNumber = parseInt(howMuchHourly);
		var howManyHoursNumber = parseInt(howManyHours);

		//if the parse variables are NaN
		while (isNaN(hourlyNumber))
		{
			//continue asking until we get a number
			howMuchHourly = prompt("How much do you make per hour? Enter a number!");
			hourlyNumber = parseInt(howMuchHourly);
		}
		//same functionality as the above while statement
		while (isNaN(howManyHoursNumber))
		{
			//same
			howManyHours = prompt("How many hours do you work a week? Enter a number.");
			howManyHoursNumber = parseInt(howManyHours);
		}

		//get the result by multiple how much they make hourly
		//times how many hours they work a week times 52 
		//52 because 52 weeks in a year (duh)
		var result = hourlyNumber * (howManyHoursNumber * 52);

		//notify user to check console
		alert("Please check the console for the results");
		//quick friendly greeting
		log("Hello " + name + "! Here are your results..");

		//if they make less than 25k a year
		if (result <= 25000)
		{
			//output this message, concatenate the amount they make a year
			log("Cool! You make a decent wage. You make $" + result + " a year!");
		}
		else if (result <= 40000)
		{
			//same as the first if statement on line 87
			log("Not bad! You make a good wage. You make $"+result + " a year!");
		}
		else if (result <= 60000)
		{
			//same as the first if statement on line 87
			log("Now we're cooking! You make a pretty good wage (in most places). You make $" + result+ " a year!");
		}
		else
		{
			//same as the first if statement on line 87
			log("You must be doing pretty good. Very cool. You make $" + result + " a year!");
		}
	}
	
}