button1.onclick = function() {

	if (document.getElementById('text').style.visibility == 'visible') {
		document.getElementById('text').style.visibility = 'hidden';
	} else {
		document.getElementById('text').style.visibility = 'visible';
	}
}

button2.onclick = function() {
	document.getElementById('button2').style.display = 'none';
}