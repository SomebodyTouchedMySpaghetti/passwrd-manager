const http = require('http');
const fs = require('fs');
const port = 3000;

http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile('test.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("Error: File Not Found");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
}).listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
