import AirportModel, { Airport } from '../models/Airport';
import { Request, Response } from 'express';

// const aaa: Airport = {
//     name: 'testName',
//     city: 'testCity',
//     country: 'testCountry',
//     isPrivate: false,
// }

async function findAirport(airportName: string) {
    return await AirportModel.findOne({ name: airportName }).exec();
}

export class AirportController {
    async addAirport(req: Request, res: Response): Promise<void> {
        try {
            const newAirport = req.body as Airport;
            const exist = await findAirport(newAirport.name)
            if (!exist) {
                await AirportModel.create(newAirport);
                res.status(201).json({ message: 'Airport created successfully' });
                return;
            }
            res.status(409).json({ message: 'El registro ya existe' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error del servidor' });
        }
    }

    async getAirports(res: Response): Promise<void> {
        try {
            const airports = await AirportModel.find().select('-__v -_id');
            res.json(airports);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error del servidor' });
        }
    }

    async getAirlinesByAirport(req: Request, res: Response): Promise<void> {
        try {
            const airportName = req.params.airportName;
            const airport = await AirportModel.findOne({ name: airportName });
            if (!airport) {
                res.status(404).json({ error: 'Aeropuerto no encontrado' });
                return;
            }
            res.json(airport.airlines);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error del servidor' });
        }
    }
}
