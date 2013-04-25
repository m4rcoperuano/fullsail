/*
	Name: Marco Ledesma
	Date: April 25, 2013
	Assignment: Conditional Industry
	Description: Getting the center of the webpage (coordinates)

*/

//validation namespace (or static class, works the same)
//i wanted to create it so i could use it like a static class
var Validation = function() {
	//public functions below
	return {
		//to validate integers
		Integer: function(value) {
			value = parseInt(value); //parse the value to an int
			var flag = (isNaN(value)) ? false : true; //if its NaN, then set flag to false
			while (!flag) //if flag is false
			{
				value = prompt("Please enter  a number!"); //get a number again from the user
				value = parseInt(value); //parse the value again to an int
				flag = (isNaN(value)) ? false : true; //set the flag to true if the number is actually a number
			}
			//finally return the value
			return value;

		},
		//to validate strings
		JString: function (value) {
			//if string is empty
			while (value == "")
			{
				//continue asking for a string
				value = prompt("Please enter some text!");				
			}
			//return string
			return value;
		}
	}
}();

function CalculateCenter()
{
	alert("This program will find the coordinates of the center of a web page..");
	alert("Assuming you know the width and height of the browser. Ideally, you would get this "+
		"using code (like pageX and pageY)");

	var name = prompt("What is your name?");
	name = Validation.JString(name);
	var widthOfBrowser = prompt("Please enter the width of the browser in pixels (approx)");
	widthOfBrowser = Validation.Integer(widthOfBrowser);
	var heightOfBrowser = prompt("Please enter the height of the browser");
	heightOfBrowser = Validation.Integer(heightOfBrowser);

	alert("Please check the console for the result");
	console.log("Awesome " + name);
	console.log("So using this width: "+widthOfBrowser + ", and this height: " +heightOfBrowser +"...");

	var result = {};
	result.xCoord = widthOfBrowser/2;
	result.yCoord = heightOfBrowser/2;

	console.log("We have the X Coordinate as " + result.xCoord + "px's from the left, and the Y Coordinate as "+result.yCoord+"px's from the top.");

}	
