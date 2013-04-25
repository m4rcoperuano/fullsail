/*
	Name: Marco Ledesma
	Date: April 25, 2013
	Assignment: Conditional Wacky
	Description: This program will, calculate the time it would take to reach a planet
	in our solar system using a speed that the user has entered
*/


function Begin()
{
	//introduction to program
	alert("Hello, welcome to something wacky");
	//more intro
	alert("This program will calculate travel time from the earth, to a planet in our solar system (when that planet is at its closets proximity to earth)");
	var planets = [ //array of planet objects. each with properties like name and distance
		{ name: "Mars", distance: 36000000 },
		{ name: "Jupiter", distance: 964000000},
		{ name: "Mercury", distance: 48000000 },
		{ name: "Venus", distance: 23700000 },
		{ name: "Saturn", distance: 100000000000},
		{ name: "Uranus", distance: 2570000000 },
		{ name: "Sun" , distance: 93000000 }
	];

	//how fast the user will be traveling
	var speed = prompt("You are responsible for setting a speed at which you'd travel at. Please enter a speed in MPH");
	if (isNaN(parseInt(speed))) //validate if the input is a number
	{
		//if not alert, and kill program
		alert("You have not entered a correct value for speed! please run the program again.");
		return;
	}

	//asks the user to enter a name of a planet (i left certain planets out on purpose, so i could validate)
	var nameOfPlanet = prompt("Now enter a name of a planet in our solar system (inluding the sun)");
	alert("Alright! now follow along in the console");
	var planetFound = false; //used to break out of the for loop
	var planetIndex; //stores the index of the planet that it matches
	console.log("Looking for that planet in my list...") //tell the user that I'm searching the list for that planet
	for (var index in planets) //for-in loop. It will cycle through all elements in my array, similar to foreach
	{
		console.log("Does " + nameOfPlanet + " match " + planets[index].name + "?") //log the matching results
		if (!planetFound) //if the planet hasn't been found yet
		{
			if (nameOfPlanet.toLowerCase() == (planets[index].name).toLowerCase()) //if we have found the planet
			{
				planetFound = true; //set this to true to break out of the loop
				console.log("Yes! We found a match"); //tell the user that we found the planet
				planetIndex = index; //the planet index is now set to the index of the planet that we found
				break; //breaks out of the loop
			}
			else
			{
				//log that we did not find the planet
				console.log("Nope.");
			}
		}
	}

	//if we indeed found the planet
	if (planetFound)
	{
		//calculate the time it'll take to travel there
		var timeItWouldTakeInHours = planets[planetIndex].distance/speed;
		console.log("The amount of time it would take to reach " + planets[planetIndex].name + " is " + timeItWouldTakeInHours + " hours!");
	}
	else
	{
		alert("Sorry, the name of the planet you entered was not found in my list of planets. The available planet list is displayed in the console");

	}
}