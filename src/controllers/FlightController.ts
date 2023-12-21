import { type Flight } from '../models/FlightModel'

export class FlightController {
  private readonly flights: Flight[] = []

  getFlights (): Flight[] {
    return this.flights
  }

  getFlightById (id: string): Flight | undefined {
    return this.flights.find((f) => f.id === id)
  }

  addFlight (flight: Flight): void {
    this.flights.push(flight)
  }

  bookSeat (flightId: string, passengerName: string, passportNumber: string, nationality: string): boolean {
    const flight = this.getFlightById(flightId)

    if (flight && flight.currentPassengers.length < flight.maxPassengers) {
      const passenger = { name: passengerName, passportNumber, nationality }
      flight.currentPassengers.push(passenger)
      return true
    }

    return false
  }
}
