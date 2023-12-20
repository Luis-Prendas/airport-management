import express, { type Router, type Request, type Response } from 'express'
import { AirportController } from '../controllers/AirportController'
import { PassengerController } from '../controllers/PassengerController'

const router: Router = express.Router()

const airportController = new AirportController()
const passengerController = new PassengerController()

// Rutas para aeropuertos
router.post('/airports', (req: Request, res: Response) => {
  airportController.addAirport(req, res)
})

router.get('/airports', (_req: Request, res: Response) => {
  airportController.getAirports(res)
})

router.get('/airports/:airportId', (req: Request, res: Response) => {
  airportController.getAirportById(req, res)
})

router.put('/airports/:airportId', (req: Request, res: Response) => {
  airportController.updateAirport(req, res)
})

// Rutas para pasajetos
router.get('/passengers', (req: Request, res: Response) => {
  passengerController.addPassenger(req, res)
})

export default router
