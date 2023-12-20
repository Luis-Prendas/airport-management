import { Airline } from '../models/Airline';
import { Airport } from '../models/Airport';

export class AirportController {
    private airports: Airport[] = [];

    addAirport(airport: Airport): void {
        this.airports.push(airport);
    }

    getAirports(): Airport[] {
        return this.airports;
    }

    getAirlinesByAirport(airportName: string): Airline[] | undefined {
        const airport = this.airports.find((a) => a.name === airportName);
        return airport?.airlines;
    }
}
