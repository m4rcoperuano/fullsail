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
			var flag = false;
			while (!flag)
			{
				value = prompt("Please enter a number!");
				value = parseInt(value);
				flag = (isNaN(value)) ? false : true;

			}
		},
		JString: function (value) {
			while (value == "")
			{
				value = prompt("Please enter some text!");				
			}
		}
	}
}();

function CalculateCenter()
{
	alert("This program will find the coordinates of the center of a web page..");
	alert("Assuming you know the width and height of the browser. Ideally, you would get this "+
		"using code (like pageX and pageY)");

	var name = promp("What is your name?");
	name = Validation.JString(name);
	var widthOfBrowser = prompt("Please enter the width of the browser in pixels (approx)");
	widthOfBrowser = Validation.Integer(widthOfBrowser);
	var heightOfBrowser = prompt("Please enter the height of the browser");
	heightOfBrowser = Validation.Integer(heightOfBrowser);


}	
