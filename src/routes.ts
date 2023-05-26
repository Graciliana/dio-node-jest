import { Router } from "express";
import { UsersController } from './controllers/usersController'

const routes = Router()
const usersController = new UsersController()

routes.get('/users', usersController.listarUsuario)

routes.post('/users', usersController.criarUsuario)

export { routes }

// STATUS CODE
//200 E 201
//404

//GET - Ler os dados 
//POST - Criar os dados
//PUT/PATCH - Editar os dados
//DELETE - aPAGAR os os dados
