import express, { type Router, type Request, type Response } from 'express'
import { AirportController } from '../controllers/AirportController'

const router: Router = express.Router()

const airportController = new AirportController()

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

export default router
