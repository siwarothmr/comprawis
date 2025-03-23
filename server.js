const express = require('express');
const app = express();
const path = require('path');

const PORT = 2000; // يمكن تغييره لأي منفذ آخر


// خدمة الملفات الثابتة
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('This is an API response');
});
app.get('/', (req, res) => {
    res.send('hello word');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});