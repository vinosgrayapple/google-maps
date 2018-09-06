const fetch = require('node-fetch');


function getUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
}
async function main() {
    let user = await getUser(4)
    console.log(user)
}
main()