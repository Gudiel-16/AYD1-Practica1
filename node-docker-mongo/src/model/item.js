const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  titulo: {
    type: String,
    required: true
  },
  anio_publicacion: {
    type: String,
    required: false
  },
  edicion: {
    type: String,
    required: true
  },
  numero_paginas: {
    type: String,
    required: false
  },
  autor: {
    type: String,
    required: true
  },
  editorial: {
    type: String,
    required: false
  },
  generoLiterario: {
    type: String,
    required: false
  },
  isbn: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
