const inputBar = document.getElementById('searchBar');
const myButton = document.getElementById('button');
const searchSection = document.getElementById("search_section");
const dropMenu = document.getElementById("drop_menu");
const clock = document.getElementById("clock");

// site name, shortcut key, link //
var facebook = ["facebook", "f", "https://www.facebook.com"];
var youtube = ["youtube", "y", "https://www.youtube.com"];
var tumblr = ["tumblr", "t", "https://www.tumblr.com"];
var wikipedia = ["wikipedia", "w", "https://www.wikipedia.org"];
var forvo = ["forvo", "fo", "https://www.forvo.com"];
var mml = ["mml", "m", "https://www.pearsonmylabandmastering.com/northamerica/mymathlab/"];
var canvas = ["canvas", "c", "https://ccs.instructure.com/login/ldap"];
var duolingo = ["duolingo", "d", "https://www.duolingo.com"];
var treehouse = ["treehouse", "tr", "https://teamtreehouse.com/home"];
var khanacademy = ["khanacademy", "k", "https://www.khanacademy.org"];

var shortcuts = [facebook, youtube, tumblr, wikipedia, forvo, mml, 
				 canvas, duolingo, treehouse, khanacademy];

window.focus();

window.onkeydown = function(e) {
	if (e.keyCode != 17 && e.keyCode != 18) { inputBar.focus(); } 
	if (event.keyCode == 13) { myButton.click(); }
}

inputBar.onfocus = function() {
	inputBar.style.opacity = "1";
	button.style.opacity = "1";
}
inputBar.onblur = function() {
	inputBar.style.opacity = "0.3";
	button.style.opacity = "0.3";
}




myButton.onclick = function() {
	var searchText = inputBar.value.trim();
	var continueSearch = true;
	inputBar.value = "";
	if (searchText != "") {
		for (var site in shortcuts) {
			if (searchText.toLowerCase() == shortcuts[site][0] || 
				searchText.toLowerCase() == shortcuts[site][1]) {
				window.location.href = shortcuts[site][2];
				continueSearch = false;
			}
		}

		if (continueSearch) {
			var url = "https://www.google.com/search?q=" + searchText;
			window.open(url, "_self");
		}
	}
}

function blink() {
	var colon = document.getElementById("colon");
	colon.style.visibility = colon.style.visibility == "hidden" ? "visible" : "hidden";
}

document.body.onload = function() {
	updateClock();
	setInterval("updateClock()", 1000);
	setInterval("blink()", 500);
}

function updateClock() {
    var today = new Date();
    var hours = today.getHours() % 12;
    var minutes = today.getMinutes();
    var timeOfDay = (today.getHours()) < 12 ? "午前" : "午後";
    var day = today.getDay();
    var date = today.getDate();
    var year = today.getFullYear();
    var month = today.getMonth();
    if (hours == 0) { hours = 12; }
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    var time = hours + "<span id='colon'>:</span>" + minutes + timeOfDay;
    var days = ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"];
    var date_string = days[day] + " " + (month + 1) + "/" + date + "/" + year; 
    document.getElementById('clock').innerHTML = time;
    document.getElementById('date').innerHTML = date_string;
}