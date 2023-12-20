import express, { Router, Request, Response } from 'express';
import { AirportController } from '../controllers/AirportController';

const router: Router = express.Router();

const airportController = new AirportController();

// Rutas para aeropuertos
router.post('/airports', (req: Request, res: Response) => {
    airportController.addAirport(req, res);
});

router.get('/airports', (_req: Request, res: Response) => {
    airportController.getAirports(res);
});

router.get('/airports/:name/airlines', (req: Request, res: Response) => {
    airportController.getAirlinesByAirport(req, res);
});

export default router;
