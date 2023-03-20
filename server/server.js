const express = require ('express');
const db = require('../server/config/db.config')
const BebidaModel = require('../server/models/bebidas.model')


const app = express();

app.use(express.json());
const bebidasRoute = require('./routes_controllers/bebida.routes')
const userRoute = require('./routes_controllers/user.routes')
app.use('/api/bebidas/', bebidasRoute)
app.use('/api/users/', userRoute)
app.get("/", (req, res)=>{
    res.send('Servidor trabajando' + port);
});

app.get("/getbebidas", (req,res) =>{
    BebidaModel.find( {} , (err, docs)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(docs)
        }

    })
})

const port = process.env.PORT || 8000;

app.listen(port, ()=> 'servidor trabajando en el puerto');