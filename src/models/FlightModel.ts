import { type Passenger } from './PassengerModel'

export interface Flight {
  id: string
  origin: string
  destination: string
  price: number
  maxPassengers: number
  currentPassengers: Passenger[]
}
