document.write("Hello World!");

// Comment Goes Here

/* sadsaddsa
sadsadsadasd
sadasdsad
sadasddsda */

document.write("<br />I love tuna");

var x = 25;

document.write("<br />i am " + x);

var tuna = -1992.3434;

document.write("<br />" + tuna);

var myString = "This is \"Taimoor\"";

document.write(myString);

var myBooleanVariable = false;

document.write(myBooleanVariable);

var myVar = null;

document.write(myVar);

/////////////////////////////////////////////////////////////////////////////////////////////////////

var name = "Taimoor";
var age = 25;
document.write("<br />" + name + " is " + age + " years old.");

/////////////////////////////////////////////////////////////////////////////////////////////////////

function funky(){
	alert("Funcky Function");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function meatBall(x){
	alert("i love " + x);
}

meatBall("tuna");
meatBall("Titanic");

/////////////////////////////////////////////////////////////////////////////////////////////////////

function myNewFunction(name,age){
	document.write("<br />" + name + " is " + age + " years old.");
}

myNewFunction("Taimoor", 25);

function apples(one, two){
	document.write("<br />" + one + " is better than " + two + "<br />");
}

apples(2,1);
apples("Taimoor","Taimoor");

/////////////////////////////////////////////////////////////////////////////////////////////////////

function tooEasy(){
	return "gametime";
}

document.write(tooEasy());

function addNumbers(a, b){
	var c = a + b;
	return c;
}

document.write(addNumbers(3,6));

var newVariable = addNumbers(3,6);

document.write(newVariable);

/////////////////////////////////////////////////////////////////////////////////////////////////////

function doFirst(){
	document.write("<br /><br /><br />This runs First.");
}

function doSecond(){
	document.write("<br /><br /><br />This runs Second.");
}

function start(){
	doFirst();
	doSecond();
}

start();

/////////////////////////////////////////////////////////////////////////////////////////////////////

var girl = "Rabia";

function spit(){
			// var girl = "Rabia";
			document.write(girl);
		}

		spit();
		document.write(girl);

/////////////////////////////////////////////////////////////////////////////////////////////////////

var apples = 4 + 2 + 98;

document.write(apples);

var mango = 4 * 2;

document.write(mango);

var mango = 49 / 3;

document.write(mango);

var mango = 49 % 3;

document.write("<br />" + mango);

var chops = 7;

chops++;

document.write(chops);

chops--;

document.write(chops);

/////////////////////////////////////////////////////////////////////////////////////////////////////

var taimoor = 25;

taimoor += 5;
taimoor -= 5;
taimoor *= 5;
taimoor /= 5;
taimoor %= 5;


document.write(taimoor);

/////////////////////////////////////////////////////////////////////////////////////////////////////

var apples = 34;
var hotDogs = 53;

if(apples == hotDogs){
	document.write("<br /><br />Works1");
}

if(apples != hotDogs){
	document.write("<br /><br />Works2");
}

if(apples < hotDogs){
	document.write("<br /><br />Works3");
}

if(apples > hotDogs){
	document.write("<br /><br />Works4");
}

if(apples <= hotDogs){
	document.write("<br /><br />Works5");
}

if(apples >= hotDogs){
	document.write("<br /><br />Works6");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

var blue = 43;
var red = 76;

if(blue != red){
	document.write("I love pancakes");
} else {
	document.write("I love egg");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

var firstName = "Taimoor";
var lastName = "Khan1";

if (firstName == "Taimoor") {
	if (lastName == "Khan") {
		document.write("Correct");
	} else {
		document.write("Not Correct");
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

var first = "Taimoor";
var last = "Khan2";

if ((first == "Taimoor") && (last == "Khan")) {
	document.write("AND");
}

if ((first == "Taimoor") || (last == "Khan")) {
	document.write("OR");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

var girl = "Raba";

switch(girl){
	case "Natalie":
		document.write("You must like garden state");
		break;
	case "Rabia":
		document.write("Your Girlfreind");
		break;
	default:
		document.write("nanananana");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

for (var i = 0; i < 10; i++) {
	document.write("<br />I love myself " + i);
}

var x = 0;

while(x < 10){
	document.write("<br />I love Marvel " + x);
	x++;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////