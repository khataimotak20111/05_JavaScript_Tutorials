/////////////////////////////////////////////////////////////////////////////////////////////////////

var tuna = "Hey i am a hahahfish";

document.write(tuna.length);

/////////////////////////////////////////////////////////////////////////////////////////////////////

function person(name, age){
	this.name = name;
	this.age = age;
}

var taimoor = new person("Taimoor", 25);
var rabia = new person("Rabia", 27);

alert(taimoor.name + " " + taimoor.age);
alert(rabia.name + " " + rabia.age);

/////////////////////////////////////////////////////////////////////////////////////////////////////

taimoor2 = {
	name: "Taimoor",
	age: 24
}

alert(taimoor2.name + " " + taimoor2.age);

taylor = {
	name: "Taylor Swift",
	age: 20
}

alert(taylor.name + " " + taylor.age);

/////////////////////////////////////////////////////////////////////////////////////////////////////

function people(name,age){
	this.name = name;
	this.age = age;
	this.yearsUntilRetirement = yearsLeft;
}

function yearsLeft(){
	var numYears = 65 - this.age;
	return numYears;
}

var natalie = new people("Portman", 28);
var taimoor = new people("Taimoor", 24);

document.write("<br /><br /><br /><br />" + natalie.yearsUntilRetirement());
document.write("<br /><br /><br /><br />" + taimoor.yearsUntilRetirement());

/////////////////////////////////////////////////////////////////////////////////////////////////////