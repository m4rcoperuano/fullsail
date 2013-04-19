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
		Square: Square, //making the functions above public. If i didnt add them to this return
		Circle: Circle //then the functions would not be accessible using Shapes.FunctionName
	}
}();


//this function is called on the onclick event (attribute is set on the button in the html page)
var Wacky = function() {
	//the function below is inside the scopy of the function Wacky. Since i wont be using this
	//outside of Wacky, then its alright to just leave this function here
	//purpose of this function is to:
	//get a number and an error message in its parameters
	//the number could be a string, so i parse it just in case
	//check if that number is truely a number, if it is, return that number
	//else, alert the user of the error using the error message, and ask the user to try again
	var errorCheckNumber = function(num, errMsg) {
		if (num !== null) { //make sure a number is actually passed			
			num = parseInt(num); //parse it into a number if its a string
			while (isNaN(num))
			{	//if after parsing, I receive a NaN, then do
				num = prompt(errMsg); //prompt the user again using the error message passed
				//if the user decides to click on "Cancel" instead of "OK"
				//the the below if statement will evaluate as true, and exit out of this infinite loop
				if (num === undefined) return undefined; 
				num = parseInt(num); //parse the number they entered on line 55
				//if its a number, then the while statement will evaluate false
			}
			return num; //return that number
		}		
		return undefined; //if the if statement on line 51 was false, then return undefined
	}


	//create a variable that'll hold a long string
	var alertMessage = "Ideally, this would be handled better through a nice HTML GUI, but due to the requirements of this project, prompts will be used instead. ";
	alertMessage += "What we are going to create is shapes. As many as you want. These shapes will be created on the page. So here we go!" 
	alert(alertMessage); //alert that variable

	//ask the user how many shapes they want to create, and store it in a variable
	var numberOfShapes = prompt("Alrighty, how many shapes do you want to create?");
	//run the error check function defined in the beginning of the Wacky function
	numberOfShapes = errorCheckNumber(numberOfShapes, "Well, that wasn't a number. Your stuck in an infinite loop until you enter a number!");
	
	//this will evaluate true, if the user clicked on "Cancel" when i prompted them to give me
	//the number of shapes they wanted to create. If the below is true, then it will exit the 
	//program
	if (numberOfShapes === undefined) 
		return;
	else if (numberOfShapes <= 0)
	{//error checking for a value 0 or less
		alert("Well, you entered a number less than 1, so, program will now close");
		return;
	}
	//created an array below
	var arrayOfShapes = []; //this will hold an array of objects (the objects used for the Shapes.Square and Circle functions)
	//notify the user of how many shapes they entered, and that we are going to set properties for each shape
	alert("Thanks! Now, since you asked for " + numberOfShapes + " number of shapes, we are going to enter data for each of these shapes. ");
	
	//commence looping through however many number of shapes they wanted to create
	for (var i = 0; i<numberOfShapes; i++)
	{
		//create an object called shapeObj
		var shapeObj = {};
		//ask the user what kind of shape they want to create
		//1 for Circle and 2 for rectangle
		var shapeType = prompt("Shape #" + (i + 1) + ": I'll need a shape type. This program only supports circles and rectangles for now. So, enter 1 for circle or enter 2 for rectangle");		
		shapeType = errorCheckNumber(shapeType, "Error, only accepted values are 1 or 2!");		

		//if the user hit cancel, instead of entering 1 or 2, then exit the program
		if (shapeType === undefined)
			return;		
		//if what the user entered on line 95, was not a 1 or 2 (so if they didn't type the correct option
		while (shapeType != 1 && shapeType != 2)
		{
			//ask for them to enter it again
			shapeType = prompt("Error, you must enter the number 1 or 2. 1 for Circle and 2 for Rectangle.");
			//do an error check to make sure its a number
			shapeType = errorCheckNumber(shapeType, "Error, you must enter the number 1 or 2. 1 for Circle and 2 for Rectangle.")
			//again, if user has hit cancel, then exit the function
			if (shapeType === undefined)
				return;		
			//once the user enters either 1 or 2, or, hits the cancel button, then it will come out of this while loop
		}		

		//ah, the switch statement. Here is where i ask the user for properties regarding the shape they chose
		switch (shapeType) 
		{
			case 1:
				//for circle
				shapeObj.itsType = "circle"; //set the object's type. I will need this 
				//when i start doing a for loop through the array of shapes. 
				//basically, the arrayOfShapes variable will contain an array of shape objects
				//these shape objects will have properties, such as width/height/radius
				var radius = prompt("Please enter a desired radius for this circle");
				//grab the radius, check to see if its valid (if its a number)
				radius = errorCheckNumber(radius, "What you entered was not a number!");
				shapeObj.itsRadius = radius; //once it passes error checking, add a property to the
				//shapeObj, setting its radius
				arrayOfShapes.push(shapeObj); //then add that object to the array
				break;
			case 2:
				//for square	
				//very similar to circle, except now im getting the width and height			
				var x = prompt("Enter width");
				x = errorCheckNumber(x, "What you entered was not a number!"); //also doing error checking here
				var y = prompt("Enter height");
				y = errorCheckNumber(y, "What you entered was not a number!"); //and error checking here
				shapeObj.itsType = "square"; //set its type
				shapeObj.itsX = x; //set its width
				shapeObj.itsY = y; //and its height
				arrayOfShapes.push(shapeObj); //and finally add it to the array of objects
				break;

		}
	}
	//just letting the user know
	alert("Please follow the console for more details!");
	console.log("Alright, lets start generating these shapes...");

	//execute for loop!
	for (var index in arrayOfShapes)
	{//for each key inside the array
		//grab the object at the current index
		var obj = arrayOfShapes[index];
		//switch statement on its type
		switch (obj.itsType)
		{
			case "circle": //if circle, then use the function Shapes.Circle and pass in its 
			//options (which is the obj)
				Shapes.Circle(obj);
			break;
			case "square": //same goes with square, use function Shapes.Square and pass in its
			//options
				Shapes.Square(obj);
			break;
		}
	}

	//all the above does is generate shapes based on what the user wanted. It appends these shapes to the
	//body of the html page

	console.log("Done!");
}

