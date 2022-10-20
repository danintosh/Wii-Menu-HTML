function urlchk() {
	cururl = window.location.toString();
	if (cururl.includes("?i=") == true) {
		newurl = cururl.replace("?i=0", "");
		newurl = newurl.replace("?i=1", "");
		newurl = newurl.replace("?i=2", "");
		newurl = newurl.replace("?i=3", "");
		newurl = newurl.replace("?i=4", "");
		window.location = newurl;
	}
	
}