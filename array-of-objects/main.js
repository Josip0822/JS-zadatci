//Make an array of car objects (from the previous exercise).
//Make a function to sort the array by car name and print all cars to console.
//Make a function to sort the array by car price and print all cars to console.
//Make a function that takes a `speed` parameter and prints all cars faster than given speed.

var car = {
	'Name':'Audi A1 1.6 TDI',
	'Price':'24.780 €',
	'Top Speed':'200 km/h'
};

var car = [{'Name': 'Audi A1 1.6 TDI', 'Price':'24.780 €', 'Top speed':'200 km/h'}];
console.dir(car);

function carName(arr){
	if(arr === 'Name'){
		return arr;
	}
}
console.log(carName(car));

function carPrice(arr){
	return ;
}

function carSpeed(arr){
	return ;
}
/*Traži se da napravim funkciju koja će sortirat po 'car name' i ispisat sva vozila, i isto to za 'car price' i 'speed parametar' i za speed izbacit sve aute brže od navedene brzine.
 Problem je šta se traži korištenje arraya iz prethodne vježbe a u prethodnoj vježbi se koristia samo jedan array od vozila?!
 Zanima me jel moguće da ja ne kužim šta se traži ili jednostavno moram sam dodat još par arraya da imam s čim uspoređivat?*/
