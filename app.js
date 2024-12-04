const express = require('express');

const app = express();

// Start the server
const hostname = 'localhost';
const port = 3000;
app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
});