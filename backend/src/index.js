const express = require('express'); // ajuda na criação das rotas e do servidor.
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://Lolla:123@cluster0-n8orv.gcp.mongodb.net/semanaO?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json()); //cadastrou dentro do express, p/ entender corpos no formato json 
app.use(routes);

app.listen(3333, function() {
    console.log("Pronto Lolla.") 
} )