import { type Flight } from './FlightModel'

export interface Airline {
  name: string
  flights: Flight[]
}
