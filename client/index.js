const googleMapsClient = require('@google/maps').createClient({
	key: 'AIzaSyBcPT98VH0hLThe16u8a6SDLioOnylhCZk',
	language: 'ru',
	Promise: Promise
});
const readline = require('readline');
let array = require('./array');
let region = [];
main()

function gReg(element, indx) {
	return googleMapsClient.geocode({
			address: element.replace(/(\.|\,)/g, ' ')
		})
		.asPromise()
		.then(response => {

			// process.stdout.write('.')
			writeWaitingPercent(indx)
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
		const forel = await gReg(element, i);
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

function writeWaitingPercent(p) {
	readline.cursorTo(process.stdout, 0);
	process.stdout.write(`Загрузка ... ${p} записи ... `);
}