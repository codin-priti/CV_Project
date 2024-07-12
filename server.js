const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received message from ${name} (${email}): ${message}`);
    // You can add code here to send an email or store the message in a database
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
