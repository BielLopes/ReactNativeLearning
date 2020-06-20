const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io'); //O protocolo web-soket possibilita ficar trocando constantemente mensagens com o servidor
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);

const io = socketio(server);

const connectedUsers = {};


io.on('connection', soket => {
    console.log(soket.handshake.query);
    console.log('Usuario conetado', soket.id);

    const { user_id } = soket.handshake.query;

    connectedUsers[user_id] = soket.id;

    //soket.emit('hello', "Wolrd");

    /*soket.on('omni', data => {
        console.log(data);
    });*/
});

app.use((req, res, next) => {

    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/nodeapi', //a utilização no final de nodeapi foi uma escolha arbritraria feita por nós sessa parte do código
    {
        useUnifiedTopology:true,
        useNewUrlParser: true, //configura a forma com que está definida a URL
    }
);
// O express é uma microframework que facilita a criação derotas de forma mais confortável, sem utilizar a sintaxe mais "chata" do node.js
// Por padrão o express não entende as requisições no formato de json
app.use(express.json());

app.get("/users/:id", (req, res) => {
    return res.json(
            {
                message: "Hello Porra",
                dia: req.query.dia, //Vem como argumentos GET
                id: req.params.id, // Vem commo parametros de rota
                body: req.body,
            }
        );
});


app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));
app.use(routes);

app.use(function (err, req, res, next) {
    console.log('This is the invalid field ->', err.field);
    next(err);
});

//app.use(cors({ origin: 'http://localhost:3333' }));

server.listen(3333);