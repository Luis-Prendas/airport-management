import { Airline } from "./Airline";
import { Document, Schema } from 'mongoose';
import mongoose from '../db';


export interface Airport {
    name: string;
    city: string;
    country: string;
    isPrivate: boolean;
    sponsors?: string[];
    governmentGrant?: number;
    airlines?: Airline[];
}

const airportSchema = new Schema<Airport>({
    name: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    isPrivate: { type: Boolean, required: true },
    sponsors: { type: [String], default: [] },
    governmentGrant: { type: Number },
    airlines: { type: [Object], default: [] },
});

const AirportModel = mongoose.model<Airport>('Airport', airportSchema);

export default AirportModel;
