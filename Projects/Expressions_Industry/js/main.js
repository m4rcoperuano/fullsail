/*
	Name: Marco Ledesma
	Date: 4/18/2013
	Assignment: Expressions_Industry
	Description: What this program does is calculate how much time you waste reading emails while at work!
	Due to the vast amount of emails a person can get at work, it can take up a significant amout of time
*/

var WastedTime = function() {

	alert("Hello! In the Web Development industry, other than doing your coding/designing, you spend a lot of your "+
		"time reading and answering emails. It becomes a pain and a huge time waster. I made this calculator to "+
		"find out how much of your time you actually waste reading emails.");

	var numberOfEmailsAtWorkPerDay = prompt("Enter an approximation of how many emails you read at work per day."),
		numberOfHoursAtWork = prompt("Now enter the number of hours you work per day."),
		howMuchTimeSpentReading = prompt("Lastly, enter the amount of time you roughly spend reading/replying to a single email. Please enter it in seconds.");

	numberOfHoursAtWork = parseInt(numberOfHoursAtWork);
	numberOfEmailsAtWorkPerDay = parseInt(numberOfEmailsAtWorkPerDay);
	howMuchTimeSpentReading = parseInt(howMuchTimeSpentReading);

	if (isNaN(numberOfHoursAtWork) || isNaN(numberOfEmailsAtWorkPerDay) || isNaN(howMuchTimeSpentReading))
	{
		var conf = confirm("Whoah! Apperantly you entered a value that was not a number. Would you like to restart this program?");
		if (conf === true)
		{
			WastedTime();
			return;
		}
		return;
	}	

	var numberOfSecondsAtWork = parseInt(numberOfHoursAtWork * 60 *60);


	alert("Alright! Lets see our results in the console");
	console.log("The data you entered is displayed below");
	console.log("Number of hours at work: " + numberOfHoursAtWork);
	console.log("Number of emails you receive at work: " + numberOfEmailsAtWorkPerDay);
	console.log("How much time you spend reading a single email: " + howMuchTimeSpentReading + " seconds");
	console.log("--------------------------------------------------------------");

	howMuchTimeSpentReading = numberOfEmailsAtWorkPerDay * howMuchTimeSpentReading;
	var wastedTime = (howMuchTimeSpentReading / numberOfSecondsAtWork) * 100; //get percentage	


	var output = "In the end, you spend about " + Math.round(wastedTime * 100)/100 +  "% of your time at work reading emails!";
	console.log(output);
}