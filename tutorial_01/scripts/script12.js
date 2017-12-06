var batwing = {
	status: "Ready",
	rescueBatman: function(){
		document.write("Batman is awesome");
	}
};

if (batwing.status === "Ready"){
	batwing.rescueBatman();
}

var utilities = {
	printAllMembers: function(targetObjects){
		for (i in targetObjects){
			document.write("<br />" + targetObjects[i]);
		}
	}
};

utilities.printAllMembers(batwing);

var i_am_empty = {};

utilities.printAllMembers(i_am_empty);

var planet = {
	id: 34,
	name: "Imtempesta Nox",
	faction: {
		factionId: 2,
		name: "Nex",
		notification: function(){
			document.write("Attack");
		}
	},
	cities: [
		{locationId: 15, name:"Gladius"},
		{locationId: 16, name:"Gladius2"},
		{locationId: 17, name:"Gladius3"}
	]

};

planet.faction.notification();

document.write(planet.cities[1].name);

document.write("<br />" + planet.name);
planet.name = "Venus";
document.write("<br />" + planet.name);

var z = planet;

document.write(z.name);

if (typeof planet.defense === "undefined"){
	planet.defense = "ION";
}

document.write(planet.defense);

for (member in planet){
	document.write("<br />" + member + " ==> " + planet[member]);
}

function car(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
}

var myCar = new car("Acura", "RSX Type-S", 2003);

var myOtherCar = new car("Honda", "Accord", 2005);

document.write(myCar.make + " " + myCar.model + " " + myCar.year);

