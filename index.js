const googleMapsClient = require('@google/maps').createClient({
	key: 'AIzaSyBcPT98VH0hLThe16u8a6SDLioOnylhCZk',
	language: 'ru',
	// Promise: Promise
})

googleMapsClient.geocode(
	{
		address: 'Луцький р-н с. Великий Омельяник. вул. Володимирська. 94/б',
	},
	function(err, response) {
		if (!err) {
			console.log(response.json.results[0].formatted_address)
		}
	}
)
