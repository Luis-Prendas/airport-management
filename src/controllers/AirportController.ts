import AirportModel, { type Airport } from '../models/AirportModel'
import { type Request, type Response } from 'express'

// const aaa: Airport = {
//     name: 'testName',
//     city: 'testCity',
//     country: 'testCountry',
//     isPrivate: false,
// }

export class AirportController {
  async addAirport (req: Request, res: Response): Promise<void> {
    try {
      const newAirport = req.body as Airport
      const airport = await AirportModel.findOne({ name: newAirport.name })

      if (airport) {
        res.status(409).json({ message: 'El registro ya existe' })
        return
      }

      await AirportModel.create(newAirport)
      res.status(201).json({ message: 'Airport created successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error del servidor' })
    }
  }

  async getAirports (res: Response): Promise<void> {
    try {
      const airports = await AirportModel.find().select('-__v -_id')

      if (airports.length) {
        res.json(airports)
        return
      }

      res.status(404).json({ error: 'Aeropuerto no encontrado' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error del servidor' })
    }
  }

  async getAirportById (req: Request, res: Response): Promise<void> {
    try {
      const { airportId } = req.params
      const airport = await AirportModel.findOne({ _id: airportId })

      if (airport) {
        res.json(airport)
        return
      }

      res.status(404).json({ error: 'Aeropuerto no encontrado' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error del servidor' })
    }
  }

  async updateAirport (req: Request, res: Response): Promise<void> {
    try {
      const airportId = req.params.airportId
      const updatedAirportData = req.body as Airport

      const existingAirport = await AirportModel.findById(airportId)
      if (existingAirport === null) {
        res.status(404).json({ error: 'Aeropuerto no encontrado' })
        return
      }

      await AirportModel.findByIdAndUpdate(
        airportId,
        { $set: updatedAirportData },
        { new: true }
      )

      res.status(201).json({ message: 'Airport update successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error del servidor' })
    }
  }
}
