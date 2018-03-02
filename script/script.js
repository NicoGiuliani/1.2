const inputBar = document.getElementById('searchBar');
const myButton = document.getElementById('button');
const searchSection = document.getElementById("search_section");

myButton.onclick = function() {
	var searchText = inputBar.value;
	// alert("At this point, a Google search for " + searchText + " should pop open.");

	if (searchText != "") {
		var searchString = "https://www.google.com/search?q=" + searchText;
		// alert("Its url should read " + searchString + ".");
		window.open(searchString, "_self");
	}
}

inputBar.onkeydown = function() {
	if (event.keyCode == 13) {
		myButton.click();
	}
}

// These handle the opacity of the search section

inputBar.onfocus = function() {
	searchSection.style.opacity = "1";
}
inputBar.onblur = function() {
	searchSection.style.opacity = "0.3";
}