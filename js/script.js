function getQueryVariable(variable) {

	var query = window.location.search.substring(1);
	var variables = query.split('&');

	for(var i = 0; i < variables.length; i++) {
		var keyValPair = variables[i].split('=');

		if(keyValPair[0] == variable) {

			return keyValPair[1];
			// console.log(keyValPair[1]);

		}
	}
}