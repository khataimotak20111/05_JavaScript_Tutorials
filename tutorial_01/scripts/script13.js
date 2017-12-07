
window.onload = function () {

	// var clickMeButton = document.getElementById('clickMe');
	// clickMeButton.onclick = runTheExample;

	document.getElementById('clickMe').onclick = runTheExample2;

}

function runTheExample2 () {
	
	var myElement = document.getElementById('second');

	var myNodeName = myElement.nodeName;
	alert(myNodeName);

	if (myElement !== null){
		alert(myElement.innerHTML);
	}

	document.getElementById('second').innerHTML = "Taimoor is a software Developer";
	

	var listofParagraphs = document.getElementsByTagName('p');

	alert(listofParagraphs.length);

	var secondParagraph = listofParagraphs[1];

	alert(secondParagraph.innerHTML);

	myElement = document.getElementById('second');

	alert(myElement.parentNode.nodeName);

	myElement.childNodes[0];
	myElement.firstChild;
	myElement.lastChild;
	myElement.nextSibling;
	myElement.previousSibling;

	var anchor = document.getElementById('myAnchor');

	var anchorDestination = anchor.href;

	alert(anchorDestination);

	anchor.href = "Taimooooooor";

}


function runTheExample () {
	alert("Running the Example!");
}