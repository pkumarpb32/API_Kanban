
// API REST per el manteniment de verdures 
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Kanban',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", ()=>{
    console.log("Connected successfully");
});

app.use(express.static(path.join(__dirname,'www')));
require('./index')(app);

app.listen(port, () => {
    console.log(`Servidor arrancat, escoltant el port ${port}`);
}); 

