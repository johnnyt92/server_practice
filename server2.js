let NPM = require('inquirer')
let http = require('http');




const PORT7000 = 7000;

handleRequest = (request, response) => {
    response.edn("It works!!" + request.url);
}



//Use node http package to create server
//HandleRequest to us functionality

let server = http.createServer(handleRequest)

server.listen(PORT7000, () => {
    //$PORT is a place holder
    console.log(`Server listening on http://localhost:${PORT7000}`)
})

let http = require('http');

const PORT7500 = 7500;

handleRequest = (request, response) => {
    response.edn("It works!!" + request.url);
}



//Use node http package to create server
//HandleRequest to us functionality

let server = http.createServer(handleRequest)

server.listen(PORT7500, () => {
    //$PORT is a place holder
    console.log(`Server listening on http://localhost:${PORT7500}`)
})
