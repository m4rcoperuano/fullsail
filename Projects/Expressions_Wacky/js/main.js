/*
	Name: Marco Ledesma
	Date: 4/18/2013
	Assignment: Expressions_Wacky
	Description: 
*/

//Shapes static class (or namespace..not really sure what javascript calls this)
var Shapes = function() {
	var Square = function (options) {

	},
	Circle = function (options) {

	};

	return {
		Square: Square,
		Circle: Circle
	}
}();


var Wacky = function() {
	var errorCheckNumber = function(num, msg) {
		if (num !== null) {			
			num = parseInt(num);
			while (isNaN(num))
			{			
				num = prompt(msg);
				if (num === undefined) return undefined;
				num = parseInt(num);
			}
			return num;
		}		
		return undefined;
	}



	var alertMessage = "Ideally, this would be handled better through a nice HTML GUI, but due to the requirements of this project, prompts will be used instead. ";
	alertMessage += "What are we going to create is shapes. As many as you want. These shapes will be created on the page. So here we go!" 
	alert(alertMessage);

	var numberOfShapes = prompt("Alrighty, how many shapes do you want to create?");
	numberOfShapes = errorCheckNumber(numberOfShapes, "Well, that wasn't a number. Your stuck in an infinite loop until you enter a number!");
	
	if (numberOfShapes === undefined) 
		return;
	var arrayOfShapes = []; //this will hold an array of objects
	alert("Thanks! Now, since you asked for " + numberOfShapes + " number of shapes, we are going to enter data for each of these shapes. ");
	for (var i = 0; i<numberOfShapes; i++)
	{
		var shapeObj = {};
		var shapeType = prompt("Shape #" + (i + 1) + ": I'll need a shape type. This program only supports circles and rectangles for now. So, enter 1 for circle or enter 2 for rectangle");		
		shapeType = errorCheckNumber(shapeType, "Error, only accepted values are 1 or 2!");		
		if (shapeType === undefined)
			return;		
		while (shapeType != 1 && shapeType != 2)
		{
			shapeType = prompt("Error, you must enter the number 1 or 2. 1 for Circle and 2 for Rectangle.");
			shapeType = errorCheckNumber(shapeType, "Error, you must enter the number 1 or 2. 1 for Circle and 2 for Rectangle.")
			if (shapeType === undefined)
				return;		
		}		


		switch (shapeType) 
		{
			case 1:
				//for circle

				break;
			case 2:
				//for square				
				var x = prompt("Enter width");
				var y = prompt("Enter height");
				break;

		}
	}
}

