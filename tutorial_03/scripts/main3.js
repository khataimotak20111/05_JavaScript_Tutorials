/////////////////////////////////////////////////////////////////////////////////////////////////////

var people = new Array("Taimoor","Rabia","Bucky","Bilal","Mike");

document.write(people[2]);

/////////////////////////////////////////////////////////////////////////////////////////////////////

var things = new Array(3);
things[0] = "Taimoor";
things[1] = "Rabia";
things[2] = "Bucky";

document.write(things[0]);

/////////////////////////////////////////////////////////////////////////////////////////////////////

var movies = new Array();

var x = 9;
var y = 3;

movies[0] = x;
movies[1] = y;
movies[2] = "Movie";

document.write(movies[0]);
document.write(movies[2]);

/////////////////////////////////////////////////////////////////////////////////////////////////////

var dudes = new Array("Taimoor","Rabia","Bucky","Bilal","Mike");
var chicks = new Array("Lisa", "Erin", "Hannah", "Jennifer", "Emily");

document.write(dudes.length);

var people = dudes.concat(chicks);

document.write(people);

/////////////////////////////////////////////////////////////////////////////////////////////////////

var movies = new Array("Avatar","Good Will Hunting","Thor","Hulk");

var string1 = movies.join(" / ");

alert(string1);

movies.pop();

var string2 = movies.join(" / ");

alert(string2);

/////////////////////////////////////////////////////////////////////////////////////////////////////

var bp = new Array("Head","Shoulders","Knees","Toes");

bp.reverse();

alert(bp);

bp.push("Nose","Ribs");

alert(bp);

bp.sort();

alert(bp);

/////////////////////////////////////////////////////////////////////////////////////////////////////

var pie = prompt("Enter your name: ", "text goes here");
document.write("<br /><br /><br /><br /><br />Hello " + pie);

var crap = new Array(3);

for (var i = 0; i < 3; i++) {
	crap[i] = prompt("Add something to the array:", "");
}

alert(crap.join(" - "));

/////////////////////////////////////////////////////////////////////////////////////////////////////

var stuff = new Array("Apples","Pears","Bacon","TunaHam");

stuff.sort();

for (var i = 0; i < stuff.length; i++) {
	document.write("<br />" + stuff[i]);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

var bucky = new Array();

bucky["color"] = "blue";
bucky["food"] = "burgers";

document.write("<br /><br />" + bucky["food"]);

/////////////////////////////////////////////////////////////////////////////////////////////////////