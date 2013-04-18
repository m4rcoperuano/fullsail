/*
	Name: Marco Ledesma
	Date: 4/18/2013
	Assignment: Expressions_Wacky
	Description: 
*/

//The below uses a javascript design pattern I adopted a long time ago. It's called
//The Module Pattern (basically a static class)
var Shapes = function() {
	//the Square function below is executed by typing Shapes.Square()
	//options variable is an object, that has an "itsX" and "itsY" properties
	var Square = function (options) {
		var x = options.itsX; //width for square
		var y = options.itsY; // height for square (alright, this could have been called Rectangle, not Square)
		var newDiv = document.createElement('DIV'); //creates a div element
		newDiv.style.width = x + "px"; //sets its width
		newDiv.style.height = y + "px"; //and height
		newDiv.style.backgroundColor = "#333"; //and background color all using inline CSS
		document.body.appendChild(newDiv); //appends it to the body
	},
	Circle = function (options) { //this options variable is also an object with a property called "itsRadius"
		var rad = options.itsRadius; //retrieve the radius
		var newDiv = document.createElement('DIV'); //create a div
		newDiv.style.width = (rad*2) + "px"; //set the width of that div by getting the diameter
		newDiv.style.height = (rad*2) + "px"; //same as above
		newDiv.style.backgroundColor = "#999"; //set background color
		newDiv.style.borderRadius = (rad*2) + "px"; //and its border radius should be the same as one of its sides
		//i know border radius is a CSS3 thing. I would use images, but that would take much more time needed
		//for this project. Anyway, everyone will be using border-radius soon!
		document.body.appendChild(newDiv);
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
	alertMessage += "What we are going to create is shapes. As many as you want. These shapes will be created on the page. So here we go!" 
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
				shapeObj.itsType = "circle";
				var radius = prompt("Please enter a desired radius for this circle");
				radius = errorCheckNumber(radius);
				shapeObj.itsRadius = radius;
				arrayOfShapes.push(shapeObj);
				break;
			case 2:
				//for square				
				var x = prompt("Enter width");
				x = errorCheckNumber(x);
				var y = prompt("Enter height");
				y = errorCheckNumber(y);
				shapeObj.itsType = "square";
				shapeObj.itsX = x;
				shapeObj.itsY = y;
				arrayOfShapes.push(shapeObj);
				break;

		}
	}
	alert("Please follow the console for more details!");
	console.log("Alright, lets start generating these shapes...");

	for (var index in arrayOfShapes)
	{
		var obj = arrayOfShapes[index];
		switch (obj.itsType)
		{
			case "circle":
				Shapes.Circle(obj);
			break;
			case "square":
				Shapes.Square(obj);
			break;
		}
	}
	console.log("Done!");
}

