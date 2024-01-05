const http = require('http');

const server = http.createServer((req, res) => {
    // Set the content type to HTML
    res.setHeader('Content-Type', 'text/html');

    // Send the HTML response
    res.end('<h1>Hello Node!!!!</h1>');
});

// Use the process.env.PORT if available, otherwise, use port 3000
server.listen(process.env.PORT || 3000, () => {
    console.log('Node.js web server is running..');
});