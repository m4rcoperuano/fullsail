/*
	Name: Marco Ledesma
	Date: April 25, 2013
	Assignment: Conditional Wacky
	Description: 
*/


function Begin()
{
	alert("Hello, welcome to something wacky");
	alert("This program will calculate travel time from the earth, to a planet in our solar system (when that planet is at its closets proximity to earth)");
	var planets = [
		{ name: "Mars", distance: 36000000 },
		{ name: "Jupiter", distance: 964000000},
		{ name: "Mercury", distance: 48000000 },
		{ name: "Venus", distance: 23700000 },
		{ name: "Saturn", distance: 100000000000},
		{ name: "Uranus", distance: 2570000000 },
		{ name: "Sun" , distance: 93000000 }
	];

	var speed = prompt("You are responsible for setting a speed at which you'd travel at. Please enter a speed in MPH");
	var nameOfPlanet = prompt("Now enter a name of a planet in our solar system (inluding the sun)")
	var planetFound = false;
	var planetIndex;
	console.log("Looking for that planet in my list...")
	for (var index in planets)
	{
		console.log("Does " + nameOfPlanet + " match " + planets[index].name + "?")
		if (!planetFound)
		{
			if (nameOfPlanet.toLowerCase() == (planets[index].name).toLowerCase())
			{
				planetFound = true;
				console.log("Yes! We found a match");
				planetIndex = index;
				break;
			}
			else
			{
				console.log("Nope.");
			}
		}
	}

	if (planetFound)
	{
		var timeItWouldTakeInHours = planets[planetIndex].distance/speed;
		console.log("The amount of time it would take to reach " + planets[planetIndex].name + " is " + timeItWouldTakeInHours + " hours");
	}
	else
	{
		alert("Sorry, the name of the planet you entered was not found in my list of planets. The available planet list is displayed in the console");

	}
}