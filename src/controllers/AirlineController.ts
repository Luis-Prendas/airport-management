import { Airline } from '../models/Airline';
import { Flight } from '../models/Flight';

export class AirlineController {
    private airlines: Airline[] = [];

    getAirlines(): Airline[] {
        return this.airlines;
    }

    getAirlineByName(name: string): Airline | undefined {
        return this.airlines.find((a) => a.name === name);
    }

    addAirline(airline: Airline): void {
        this.airlines.push(airline);
    }

    addFlightToAirline(airlineName: string, flight: Flight): void {
        const airline = this.getAirlineByName(airlineName);
        if (airline) {
            airline.flights.push(flight);
        }
    }
}
