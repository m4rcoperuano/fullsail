/*
	Name: Marco Ledesma
	Date: 4/18/2013
	Assignment: Expressions_Industry
	Description: What this program does is calculate how much time you waste reading emails while at work!
	Due to the vast amount of emails a person can get at work, it can take up a significant amout of time
*/

//defined function that will be used when the button is clicked
var WastedTime = function() {
	//alert a description of what this program is about
	alert("Hello! In the Web Development industry, other than doing your coding/designing, you spend a lot of your "+
		"time reading and answering emails. It becomes a pain and a huge time waster. I made this calculator to "+
		"find out how much of your time you actually waste reading emails.");

	//get the number of emails at work the user receives per day, the number of hours at work, and
	//how much time they spend reading (in seconds)
	var numberOfEmailsAtWorkPerDay = prompt("Enter an approximation of how many emails you read at work per day."),
		numberOfHoursAtWork = prompt("Now enter the number of hours you work per day."),
		howMuchTimeSpentReading = prompt("Lastly, enter the amount of time you roughly spend reading/replying to a single email. Please enter it in seconds.");


	numberOfHoursAtWork = parseInt(numberOfHoursAtWork); //extract the number value from the string, i do this for each variable since they are strings
	numberOfEmailsAtWorkPerDay = parseInt(numberOfEmailsAtWorkPerDay); //same as above
	howMuchTimeSpentReading = parseInt(howMuchTimeSpentReading); //same as above

	//this if statement is used for error checking. Making sure that the value the user
	//entered is a number, not a string, character, etc.
	if (isNaN(numberOfHoursAtWork) || isNaN(numberOfEmailsAtWorkPerDay) || isNaN(howMuchTimeSpentReading))
	{
		var conf = confirm("Whoah! Apperantly you entered a value that was not a number. Would you like to restart this program?");
		//alert the user if they entered a value that was not a number, and ask them if they would like to restart
		//the program. If they do, call the function again to restart this program
		if (conf === true)
		{
			//call the function again below
			WastedTime();
			return;
		}
		return;
	}	

	//convert the hours the user entered (for how many hours they work) into seconds
	var numberOfSecondsAtWork = parseInt(numberOfHoursAtWork * 60 *60);

	//start displaying data in the console. basically recapping. All im doing is recapping what they
	//entered in the next 5 lines
	alert("Alright! Lets see our results in the console");
	console.log("The data you entered is displayed below");
	console.log("Number of hours at work: " + numberOfHoursAtWork);
	console.log("Number of emails you receive at work: " + numberOfEmailsAtWorkPerDay);
	console.log("How much time you spend reading a single email: " + howMuchTimeSpentReading + " seconds");
	console.log("--------------------------------------------------------------");

	//set the variable "howmuchtimespentreading" to a new value, this value is set by multiplying the 
	//number of emails the user gets and the amoung of time (in seconds) they spend reading these emails
	howMuchTimeSpentReading = numberOfEmailsAtWorkPerDay * howMuchTimeSpentReading;
	//the below divides the time they spend reading all emails, by how long they are at work (in seconds), and multiplies it by 100 to get the 
	//percentage
	var wastedTime = (howMuchTimeSpentReading / numberOfSecondsAtWork) * 100; //get percentage	

	//output is a string that will display the result.
	//the Math.round function is used so i can round the wastedTime variable to 2 decimal places. 
	var output = "In the end, you spend about " + Math.round(wastedTime * 100)/100 +  "% of your time at work reading emails!";
	console.log(output);
}