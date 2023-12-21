import express, { type Router, type Request, type Response } from 'express'
import { AirportController } from '../controllers/AirportController'

const airportRouter: Router = express.Router()

const airportController = new AirportController()

// Rutas para aeropuertos
airportRouter.post('/airports', (req: Request, res: Response) => {
  airportController.addAirport(req, res)
})

airportRouter.get('/airports', (_req: Request, res: Response) => {
  airportController.getAirports(res)
})

airportRouter.get('/airports/:airportId', (req: Request, res: Response) => {
  airportController.getAirportById(req, res)
})

airportRouter.put('/airports/:airportId', (req: Request, res: Response) => {
  airportController.updateAirport(req, res)
})

export default airportRouter
