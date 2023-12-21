import PassengerModel, { type Passenger } from '../models/Passenger'
import { type Request, type Response } from 'express'

// const aaa: Passenger = {
//   name: 'testName',
//   passportNumber: 'testPassport',
//   nationality: 'testNarionality'
// }

export class PassengerController {
  async addPassenger (req: Request, res: Response): Promise<void> {
    try {
      const newPassenger = req.body as Passenger
      const passenger = await PassengerModel.findOne({ name: newPassenger.name })
      if (passenger === null) {
        await PassengerModel.create(newPassenger)
        res.status(201).json({ message: 'Passenger created successfully' })
        return
      }
      res.status(409).json({ message: 'El registro ya existe' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error del servidor' })
    }
  }

  async getPassengers (res: Response): Promise<void> {
    try {
      const passengers = await PassengerModel.find().select('-__v -_id')

      if (passengers.length) {
        res.json(passengers)
        return
      }

      res.status(404).json({ error: 'Pasajero no encontrado' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error del servidor' })
    }
  }

  async getPassengerById (req: Request, res: Response): Promise<void> {
    try {
      const { passengerId } = req.body
      const passenger = await PassengerModel.findOne({ _id: passengerId })
      if (passenger) {
        res.json(passenger)
        return
      }

      res.status(404).json({ error: 'Pasajero no encontrado' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error del servidor' })
    }
  }

  async updatePassenger (req: Request, res: Response): Promise<void> {
    try {
      const { passengerId } = req.params
      const updatedPassengerData = req.body as Passenger

      const existingPassenger = await PassengerModel.findOne({ _id: passengerId })
      if (existingPassenger) {
        await PassengerModel.findByIdAndUpdate(
          passengerId,
          { $set: updatedPassengerData },
          { new: true }
        )
        res.status(201).json({ message: 'Passenger update successfully' })
        return
      }

      res.status(404).json({ error: 'Pasajero no encontrado' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error del servidor' })
    }
  }
}
