const express = require ('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(router);

router.get('/message', function(req, res){
    res.send ('Lista de mensajes');
});

router.post('/message', function(req, res){
    console.log(reg.query);
    console.log(req.body);
    res.send ('mensaje añadido');
});

//app.use('/', function (req, res){
//   res.send ('Hola');
//});

app.listen(3000);
console.log ('La aplicacion esta escuchando en http://localhost:3000');