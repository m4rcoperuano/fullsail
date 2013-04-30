/*
	Name: Marco Ledesma
	Date: 4/29/13
	Assignment: Functions_Personal
	Description: Calculate the total profit you'll make
	this month.
*/

var __moneyThisMonth = [];
var __lessMoneyThisMonth = [];

function startProgram() {
	alert("This program will calculate the total amount of money you'll have by the end of this month.");
	alert("Alright, lets start with your income this month");
	var askForMoney = addMoney();	
	while (askForMoney !== "error")
	{
		askForMoney = addMoney();
	}
	alert("Awesome! Now to enter your costs");
	var lessMoney = reduceMoney();
	while (lessMoney !== "error")
	{
		lessMoney = reduceMoney();
	}
	console.log(__moneyThisMonth);
	console.log(__lessMoneyThisMonth);

	var grossIncome = calculate("gross");
	var costs = calculate("cost");

	alert("please check the console for the result");
	console.log("-------------------------------");
	console.log("Your total income this month is: ");
	console.log("$" + grossIncome);
	console.log("-------------------------------");
	console.log("The total less money you'll have this month is: ");
	console.log(costs);

	
}

function calculate(grossOrCosts) {
	var theArray;
	var subtract = false;
	switch(grossOrCosts) {
		case "gross":
			theArray = __moneyThisMonth;
		break;
		case "cost":
			subtract = true;
			theArray = __lessMoneyThisMonth;
		break;		
	}

	var outcome = 0;
	for (var index in theArray)
	{
		if (!subtract)
			outcome += parseInt(theArray[index]);
		else
			outcome -= parseInt(theArray[index]);
	}

	return outcome;
}

function addMoney() {
	var money = prompt("Enter some income (basically, if this week your making 500 from something, then enter 500. You can add multiple entries. To stop these prompts, just click cancel)");
	if (money !== null) {		
		__moneyThisMonth.push(money);
		return "success";
	}
	else {
		return "error";
	}
}

function reduceMoney() {
	var lessMoney = prompt("Enter your costs (one at a time. So your phone bill would be one entry. Rent would be another, and so on. Click cancel to stop these prompts)");
	if (lessMoney !== null) {		
		__lessMoneyThisMonth.push(lessMoney);
		return "success";
	}
	else {
		return "error";
	}	
}

