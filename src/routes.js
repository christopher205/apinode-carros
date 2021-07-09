const express = require('express')
const UserCarroController = require('./Controllers/UserCarroController')

const routes = express.Router()

routes.get('/listcars', UserCarroController.index)
routes.get('/search', UserCarroController.show)
routes.post('/cars', UserCarroController.store)
routes.put('/refresh/:id', UserCarroController.update)
routes.delete('/:id', UserCarroController.destroy)



module.exports = routes

/*

Declara os metodos de cada rota, e diz o que cada rota ira fazer lhe atribuindo um metodo que está no Controller
Recebe uma string que da o nome a rota.
*/