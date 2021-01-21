//Write a JavaScript function to remove specified number of characters from a string.

function extractString (str,length) {
	if ((str.constructor === String) && (length > 0)){
		return str.slice(0,length);
	}
};

console.log(extractString('Lorem ipsum dolor sit.', 5));	// Lorem

/*
moje rješenje je bilo isto samo bez .constructor i bez toga nije radilo...
OBJASNJENJE POJMA CONSTRUCTOR-A ??
A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object??? --> OVO SAM NASA DEFINICIJU KOJA SE KORISTI U KLASAMA
*/
