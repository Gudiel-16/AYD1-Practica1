const { Router } = require('express');
const router = Router()

const Item = require('./../model/Item'); // modelo de la collection en la bd en mongo

router.post('/', async (req, res) => {
    var ver = await Item.find().sort({ _id: -1 });
    var verificacion = 0;
    for(var i  = 0; i < ver.length; i++){
        if(ver[i].isbn == req.body.isbn){
            verificacion = 1;
            break;
        }
    }
    if(verificacion == 1){
        verificacion = 0;
        res.json("Ya existe");
        //res.json("Ya existe el libro con isbn: " + req.body.isbn);
    }else{
        const newItem = new Item({
            titulo: req.body.titulo,
            anio_publicacion: req.body.anio_publicacion,
            edicion: req.body.edicion,
            numero_paginas: req.body.numero_paginas,
            autor: req.body.autor,
            editorial: req.body.editorial,
            generoLiterario: req.body.generoLiterario,
            isbn: req.body.isbn
        });
        console.log(newItem);
        await newItem.save().then(item => res.json(item));
    }
});

router.get('/items', async (req, res) => {
    await Item.find().then(items => res.json(items));
});

router.post('/edit/:id', async (req, res) => {
    var ver = await Item.find().sort({ _id: -1 });
    var verificacion = 0;
    const { id } = req.params;
    for(var i  = 0; i < ver.length; i++){
        if(ver[i].isbn == req.body.isbn){
            verificacion = ver[i]._id;
            break;
        }
    }
    
    console.log(verificacion);
 
    await Item.updateOne({ _id: verificacion }, req.body).then(items => res.json(items));
    //res.json("Editado!");
});

router.post('/delete/:id', async (req, res) => {
    var ver = await Item.find().sort({ _id: -1 });
    var verificacion = 0;
    const { id } = req.params;
    for(var i  = 0; i < ver.length; i++){
        if(ver[i].isbn == id){
            verificacion = ver[i]._id;
            break;
        }
    }
    
    console.log(verificacion);
 
    await Item.remove({ _id: verificacion });
    res.json("Eliminado!");
});



module.exports = router;