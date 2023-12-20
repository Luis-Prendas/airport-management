// src/routes/api.ts
import express, { Router, Request, Response } from 'express';
import { AirportController } from '../controllers/AirportController';
import { AirlineController } from '../controllers/AirlineController';
import { FlightController } from '../controllers/FlightController';
import { PassengerController } from '../controllers/PassengerController';

const router: Router = express.Router();

const airportController = new AirportController();
const airlineController = new AirlineController();
const flightController = new FlightController();
const passengerController = new PassengerController();

// Rutas para aeropuertos
router.post('/airports', (req: Request, res: Response) => {
    const airportData = req.body;
    airportController.addAirport(airportData);
    res.status(201).json({ message: 'Airport created successfully' });
});

router.get('/airports', (req: Request, res: Response) => {
    const airports = airportController.getAirports();
    res.status(200).json(airports);
});

router.get('/airports/:name/airlines', (req: Request, res: Response) => {
    const airportName = req.params.name;
    const airlines = airportController.getAirlinesByAirport(airportName);
    if (airlines) {
        res.status(200).json(airlines);
    } else {
        res.status(404).json({ message: 'Airport not found' });
    }
});

// Rutas para aerolíneas
router.post('/airlines', (req: Request, res: Response) => {
    const airlineData = req.body;
    airlineController.addAirline(airlineData);
    res.status(201).json({ message: 'Airline created successfully' });
});

router.get('/airlines', (req: Request, res: Response) => {
    const airlines = airlineController.getAirlines();
    res.status(200).json(airlines);
});

router.get('/airlines/:name', (req: Request, res: Response) => {
    const airlineName = req.params.name;
    const airline = airlineController.getAirlineByName(airlineName);
    if (airline) {
        res.status(200).json(airline);
    } else {
        res.status(404).json({ message: `Airline "${req.params.name}" not found` });
    }
});

router.post('/airlines/:name/flights/:flightId', (req: Request, res: Response) => {
    const airlineName = req.params.name;
    const flightId = req.params.flightId;

    // Obtener el vuelo por su ID
    const flight = flightController.getFlightById(flightId);

    if (flight) {
        airlineController.addFlightToAirline(airlineName, flight);
        res.status(201).json({ message: 'Flight added to airline successfully' });
    } else {
        res.status(404).json({ message: 'Flight not found' });
    }
});

// Rutas para vuelos
router.post('/flights', (req: Request, res: Response) => {
    const flightData = req.body;
    flightController.addFlight(flightData);
    res.status(201).json({ message: 'Flight created successfully' });
});

router.get('/flights', (req: Request, res: Response) => {
    const flights = flightController.getFlights();
    res.status(200).json(flights);
});

router.get('/flights/:id', (req: Request, res: Response) => {
    const flightId = req.params.id;
    const flight = flightController.getFlightById(flightId);
    if (flight) {
        res.status(200).json(flight);
    } else {
        res.status(404).json({ message: 'Flight not found' });
    }
});

router.post('/flights/:id/book', (req: Request, res: Response) => {
    const flightId = req.params.id;
    const { name, passportNumber, nationality } = req.body;
    const success = flightController.bookSeat(flightId, name, passportNumber, nationality);
    if (success) {
        res.status(200).json({ message: 'Seat booked successfully' });
    } else {
        res.status(400).json({ message: 'Booking failed. No available seats or flight not found' });
    }
});

// Rutas para pasajeros
router.post('/passengers', (req: Request, res: Response) => {
    const passengerData = req.body;
    passengerController.addPassenger(passengerData);
    res.status(201).json({ message: 'Passenger created successfully' });
});

router.get('/passengers', (req: Request, res: Response) => {
    const passengers = passengerController.getPassengers();
    res.status(200).json(passengers);
});

router.get('/passengers/:passportNumber', (req: Request, res: Response) => {
    const passportNumber = req.params.passportNumber;
    const passenger = passengerController.getPassengerByPassport(passportNumber);
    if (passenger) {
        res.status(200).json(passenger);
    } else {
        res.status(404).json({ message: 'Passenger not found' });
    }
});

export default router;
