const express = require('express');
const app = express();
const port = 9998;

app.get('/', (req, res) => {
    res.send('Hello world !!');
});

app.listen(port, () => {
    console.log("port :: ", port);
})