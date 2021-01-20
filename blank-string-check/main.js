
function isBlank(input) {
	if(input === ''){
		return true;
	} else {
		return false;
	}
}

console.log(isBlank(2));		// false
console.log(isBlank(''));		// true
console.log(isBlank('abc'));	// false



/*
Write a JavaScript function to check whether a string is blank or not. If the user specifies an argument other than string return false.

function isBlank(input) {
	if(!!input){
		return false;
	} else {
		return true;
	}
}


console.log(isBlank(2));		// false
console.log(isBlank(''));		// true
console.log(isBlank('abc'));	// false

Ovo je super brzo rješenje sa not-not verzijom al je nisan najbolje skužia??

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT

JOš jedna stvar koja mi nije jasna je zadnji console koji string 'abc' vraća ka false iako je uredan string?
*/
