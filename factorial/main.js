/*Faktorijeli su rekurzivno određeni relacijom: n! = n * (n-1)!
  moja verzija je ista osim factorial,nije radilo bez tog factorial a to sam pronasa na int kad nisan moga sam nac gresku, nije mi jasno zasto mora ic taj dio??
  OBJAŠNJENJE :
  factorial(3) returns 3 * factorial(2)
  factorial(2) returns 3 * 2 * factorial(1)
  factorial(1) returns 3 * 2 * 1 * factorial(0)
  factorial(0) returns 3 * 2 * 1 * 1
*/

function factorial(n) {
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1)
	};
};
console.log(factorial(7));

/*
factorial(7) returns 7 * factorial(6)
factorial(6) returns 7 * 6 * factorial(5)
factorial(5) returns 7 * 6 * 5 * factorial(4)
factorial(4) returns 7 * 6 * 5 * 4 * factorial(3)
factorial(3) returns 7 * 6 * 5 * 4 * 3 * factorial(2)
factorial(2) returns 7 * 6 * 5 * 4 * 3 * 2 * factorial(1)
factorial(1) returns 7 * 6 * 5 * 4 * 3 * 2 * 1 * factorial(0)
factorial(0) returns 7 * 6 * 5 * 4 * 3 * 2 * 1 * 1
*/
