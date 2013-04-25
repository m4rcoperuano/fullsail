/*
	Name: Marco Ledesma
	Date: April 25, 2013
	Assignment: Conditional Industry
	Description: Getting the center of the webpage (coordinates)

*/
var Validation = function() {
	return {
		Integer: function(value) {
			value = parseInt(value);
			var flag = (isNaN(value)) ? false : true;
			while (!flag)
			{
				value = prompt("Please enter a number!");
				value = parseInt(value);
				flag = (isNaN(value)) ? false : true;
			}
			return value;
		},
		JString: function (value) {
			while (value == "")
			{
				value = prompt("Please enter some text!");				
			}
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

	console.log("We have the X Coordinate as " + result.xCoord + "px's from the left, and the Y Coordinate as "+result.yCoord+"px from the top.");

}	
