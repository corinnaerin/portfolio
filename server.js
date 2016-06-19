const express = require('express');

const port = process.env.PORT || 5000;

const app = express();

app.use(express.static(__dirname + '/dist')); //Serve up static content

//Start the app on the specific interface (and port).
app.listen(port, () => {
    console.log(`${new Date(Date.now())}: Node server started on ${port} ...`);
});