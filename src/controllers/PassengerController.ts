// src/controllers/PassengerController.ts
import { Passenger } from '../models/Passenger';

export class PassengerController {
    private passengers: Passenger[] = [];

    addPassenger(passenger: Passenger): void {
        this.passengers.push(passenger);
    }

    getPassengers(): Passenger[] {
        return this.passengers;
    }

    getPassengerByPassport(passportNumber: string): Passenger | undefined {
        return this.passengers.find((p) => p.passportNumber === passportNumber);
    }
}
