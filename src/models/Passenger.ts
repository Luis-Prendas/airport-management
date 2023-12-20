import { Schema } from 'mongoose'
import mongoose from '../db'

export interface Passenger {
  name: string
  passportNumber: string
  nationality: string
}

const passengerSchema = new Schema<Passenger>({
  name: { type: String, required: true },
  passportNumber: { type: String, required: true },
  nationality: { type: String, required: true }
})

const PassengerModel = mongoose.model<Passenger>('Passenger', passengerSchema)

export default PassengerModel
