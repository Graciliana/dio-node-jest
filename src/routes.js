import { Router } from "express";
const routes = Router()

const database = ['GRa']

routes.get('/users', (request, response) => { 
  return response.status(200).json(database)
})

routes.post('/users', (request, response) => {
  const {name} = request.body
  database.push(name)
  return response.status(201).json({'mensagem':`Usuário ${name} criado com sucesso`})
})


// STATUS CODE
//200 E 201
//404

//GET - Ler os dados 
//POST - Criar os dados
//PUT/PATCH - Editar os dados
//DELETE - aPAGAR os os dados
export {routes}