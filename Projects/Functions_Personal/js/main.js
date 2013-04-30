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
	console.log(addMoney());
	console.log(addMoney());
}

function addMoney() {
	var money = prompt("Add money (enter a value)");
	if (money !== null) {
		alert(money);
		__moneyThisMonth.push(money);
		return "success";
	}
	else {
		return "error";
	}

}

