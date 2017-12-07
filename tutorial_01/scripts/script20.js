$(function(){
	function buildACat(){
		var catName = "Mr. Tom";
		function catFactory(){
			alert(catName);
		}
		catFactory();
	}

	$('#buildCat').click(function(){
		buildACat();
	})
});


$(function(){
	function buildACat(){
		var catName = "Admiral";
		function catFactory(){
			alert(catName);
		}
		// Notice: Instead of executing it, we are returning just the reference to our function
		return catFactory;
	}

	$('#buildCat').click(function(){
		var myNewCat = buildACat();
		// buildACat() has executed. It has gone out of scope now,
		// and all its private function variables with it, right? Right?

		myNewCat(); // <== Not so fast ... the catName variable value lives.
	})
});

