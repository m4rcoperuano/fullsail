/*
	Name: Marco Ledesma
	Date: April 25, 2013
	Assignment: Conditional Industry
	Description: Getting the center of the webpage (coordinates)

*/
function Validate(type, value)
{
	switch (type) 
	{
		case "int":
			value = parseInt(value);
			while (isNaN(parseInt(value))
			{
				value = prompt("Please enter a number!");
				value = parseInt(value);
			}
		break;
	}
}

function CalculateCenter()
{
	alert("This program will find the coordinates of the center of a web page..");
	alert("Assuming you know the width and height of the browser. Ideally, you would get this "+
		"using code (like pageX and pageY)");

	var widthOfBrowser = prompt("Please enter the width of the browser in pixels (approx)");
	var heightOfBrowser = prompt("Please enter the height of the browser");

}	
