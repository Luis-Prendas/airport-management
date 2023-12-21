import express from 'express'
import bodyParser from 'body-parser'
import airportRouter from './routes/AirportRoute'
import passengerRouter from './routes/PassengerRoute'

const app = express()
const port = process.env.PORT ?? 3000

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json())

// Rutas de la API REST
app.use('/api', passengerRouter)
app.use('/api', airportRouter)

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto #${port}`)
})

export default app
