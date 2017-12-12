/////////////////////////////////////////////////////////////////////////////////////////////////////

document.write(Math.PI);

document.write(Math.E);

var n = prompt("Enter a number:", "");

var answer = Math.sqrt(n);

document.write("<br />" + answer);

/////////////////////////////////////////////////////////////////////////////////////////////////////

function someThing(){
	document.write("tuna");
}

setInterval("someThing()", 1000);

function printTime(){
	var now = new Date();
	var hours = now.getHours();
	var mins = now.getMinutes();
	var seconds = now.getSeconds();
	document.write(hours + ":" + mins + ":" + seconds + "<br />");
}

setInterval("printTime()", 1000);

/////////////////////////////////////////////////////////////////////////////////////////////////////

var x = document.getElementById("myForm").length;

document.write("<br /><br />Form Length: " + x);

/////////////////////////////////////////////////////////////////////////////////////////////////////

var x = document.forms[1].elements[2].name;
document.write("<br /><br />Name: " + x);

var y = document.Taimoor.username.name;
document.write("<br /><br />Name: " + y);

/////////////////////////////////////////////////////////////////////////////////////////////////////

function validator(){
	if(document.Last.thebox.checked){
		alert("Checked");
	} else {
		alert("Not Checked");
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

