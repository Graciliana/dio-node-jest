import { Router } from "express";
import { usersController } from "./controllers/usersController.js";
const routes = Router()

routes.get('/users', usersController.listarUsuario())

routes.post('/users', usersController.criarUsuario)
export { routes };

// STATUS CODE
//200 E 201
//404

//GET - Ler os dados 
//POST - Criar os dados
//PUT/PATCH - Editar os dados
//DELETE - aPAGAR os os dados
