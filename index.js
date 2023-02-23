const http = require('http')
const path = require('path')
const fs = require('fs')
const nodemon = require('nodemon')
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let path = './view/'

    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;

        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;


        case '/contact-us':
            path += 'contact-me.html'
            res.statusCode = 200;
            break;

        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();

        }
    })

})

server.listen(8080, () => {
    console.log("Listening in port number 8080")
})