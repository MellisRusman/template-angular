require('dotenv').config()
const express = require('express')

const hbs = require('hbs');

const app = express()
const port = process.env.PORT


app.set('view engine', 'hbs' )
hbs.registerPartials(__dirname + '/views/partials');




app.use(express.static('public'))







app.get('*', (request, response) => {
    response.sendFile(__dirname + '/public/index.html')
})

app.listen( port ,() =>{
    console.log(`Escuchando la ruta del servidor en el puerto ${port}`)
})