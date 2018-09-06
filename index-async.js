const googleMapsClient = require('@google/maps').createClient({
	key: 'AIzaSyBcPT98VH0hLThe16u8a6SDLioOnylhCZk',
	language: 'ru',
	Promise: Promise
});
let array = require('./array');
let region = [];
process.stdout.write('loading')
main()

function gReg(element) {
	return googleMapsClient.geocode({
			address: element.replace(/(\.|\,)/g, ' ')
		})
		.asPromise()
		.then(response => {

			process.stdout.write('.')
			return {
				old: element,
				new: getRegion(response.json.results[0].formatted_address)
			}
		})
		.catch((err) => {
			console.log(err);
		});
}
async function main() {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		const forel = await gReg(element);
		region.push(forel)
	}
	printData()
}

function printData() {
	console.log("✅");
	console.log(region);
}

function getRegion(address) {
	const array = address.split(', ')
	return array
		.filter(el => el.includes('область'))
		.toString()
		.replace(/область/, 'обл.')

}