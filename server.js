const express = require ('express');
const router = express.Router();

var app = express();

app.use(router);

router.get('/', function(req, res){
    res.send ('hola desde GET');
});

router.post('/', function(req, res){
    res.send ('hola desde POST');
});

//app.use('/', function (req, res){
//   res.send ('Hola');
//});

app.listen(3001);
console.log ('La aplicacion esta escuchando en http://localhost:3001');