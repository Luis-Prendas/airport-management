import express, { type Router, type Request, type Response } from 'express'
import { PassengerController } from '../controllers/PassengerController'

const passengerRouter: Router = express.Router()

const passengerController = new PassengerController()

// Rutas para pasajetos
passengerRouter.post('/passengers', (req: Request, res: Response) => {
  passengerController.addPassenger(req, res)
})

passengerRouter.get('/passengers', (_req: Request, res: Response) => {
  passengerController.getPassengers(res)
})

passengerRouter.get('/passengers/:passengerId', (req: Request, res: Response) => {
  passengerController.getPassengerById(req, res)
})

passengerRouter.put('/passengers/:passengerId', (req: Request, res: Response) => {
  passengerController.updatePassenger(req, res)
})

export default passengerRouter
