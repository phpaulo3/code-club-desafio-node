/*

const express = require('express')

const uuid = require('uuid') // biblioteca para criar um ID
const port = 3000
const app = express()

app.use(express.json())





const users = []

app.get('/users', (request, response) => {

    return response.json(users)
})

app.post('/users', (request, response) => {
    const {name, age} = request.body
    
    const user = {id:uuid.v4(),name, age}

    users.push(user)
    
    return response.status(201).json(user)
})

// esse put serve para atualizar um usuario
app.put('/users/:id', (request, response) => { 
    const { id } = request.params // faz a requisiçao pelo ID passado no insomnia
    const { name, age } = request.body // pega o nome e a idade do id passado

    const updateUser = { id, name, age} // cria um usuario atualizado

    const index = users.findIndex(user => user.id === id) // encontrar a posiçao do usuario no array, o FindIndex retorna a posiçao no Array do usuario
    if(index < 0){ 
        return response.status(404).json({message: "User Not Found"})
    }
    
    users[index] = updateUser // ele vai la no usuario e atualiza o que foi alterado

    return response.json(updateUser)
})


app.delete('/users/:id', (request, response) => {
    const { id } = request.params

    const index = users.findIndex(user => user.id === id)

    if(index < 0){ 
        return response.status(404).json({error: "User Not Found"})
    }

    users.splice(index,1)

    return response.status(204).json()
})


app.listen(port, () =>{
    console.log('server started on port 3000')
})
*/