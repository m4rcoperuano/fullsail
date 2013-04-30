/*
	Name: Marco Ledesma
	Date: 4/29/13
	Assignment: Functions_Personal
	Description: Calculate the total profit you'll make
	this month.
*/

var __moneyThisMonth = []; //this will hold an array of income values
var __lessMoneyThisMonth = []; //this will hold an array of cost values

function startProgram() {
	//short little intro
	alert("This program will calculate the total amount of money you'll have by the end of this month.");
	alert("Alright, lets start with your income this month");
	//use a function to continue to ask for money
	var askForMoney = addMoney();	
	while (askForMoney !== "error") //while the return value of that function is not "error"
	{
		askForMoney = addMoney(); //keep asking for money
	}
	//letting the usernow that we are entering his costs
	alert("Awesome! Now to enter your costs");
	//ask the user to enter their costs
	var lessMoney = reduceMoney();
	while (lessMoney !== "error")
	{
		//while the function that asks for the costs does not return an error
		//keep asking for dat money
		lessMoney = reduceMoney();
	}

	//use a function to calculate the gross and costs	
	var grossIncome = calculate("gross");
	var costs = calculate("cost");

	//start outputting results
	alert("please check the console for the result");
	console.log("-------------------------------");
	console.log("Your total income this month is: ");
	console.log("$" + grossIncome); //display income
	console.log("-------------------------------");
	console.log("The total less money you'll have this month is: ");
	console.log(costs); //display costs
	console.log("By the end of the month, you'll have this much money left: ");
	//display total money
	console.log("$" + (grossIncome + costs));
}

/*
	Summary: Calculates the total cost or total income using the global array variables

	@grossOrCosts: This parameter is used in a switch statement. It this value is "gross"
	then it will use the array __moneyThisMonth, if its cost, then it will use the 
	__lessMoneyThisMonth array.
*/
function calculate(grossOrCosts) {
	var theArray; //set a variable
	var subtract = false; //used later in the for-in loop
	switch(grossOrCosts) { 
		case "gross"://if grossOrCosts is "gross", use the __moneyThisMonth array
			theArray = __moneyThisMonth;
		break;
		case "cost"://if its "cost", then 
			subtract = true; //set the subtract variable to true
			theArray = __lessMoneyThisMonth; //use the __lessMoneyThisMonth array
		break;		
	}

	//this variable is what will be returned
	var outcome = 0;
	for (var index in theArray)
	{
		//if subtract is false, then it will use the addition-equals operator
		if (!subtract)
			outcome += parseInt(theArray[index]);
		else //else if will use the minus-equal operator
			outcome -= parseInt(theArray[index]);
	}

	return outcome;
}

/*
	Summary: This function will ask for the user to enter money, it will then push it to 
	the array __moneyThisMonth.

*/
function addMoney() {
	//ask for money
	var money = prompt("Enter some income (basically, if this week your making 500 from something, then enter 500. You can add multiple entries. To stop these prompts, just click cancel)");
	if (money !== null) { //if the user didnt click on cancel
		__moneyThisMonth.push(money); //add that value to the __moneyThisMonth array
		return "success"; //return success if they entered money
	}
	else { //else return error
		return "error";
	}
}

function reduceMoney() {
	//ask for a cost
	var lessMoney = prompt("Enter your costs (one at a time. So your phone bill would be one entry. Rent would be another, and so on. Click cancel to stop these prompts)");
	if (lessMoney !== null) { //if user didnt click on cancel
		__lessMoneyThisMonth.push(lessMoney); //add the cost value to the __lessMoneyThisMonth array
		return "success";//return success if they entered money
	}
	else { //else return error
		return "error";
	}	
}

