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
}
