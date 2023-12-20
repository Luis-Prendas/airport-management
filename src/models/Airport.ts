import { Airline } from "./Airline";

export interface Airport {
    name: string;
    city: string;
    country: string;
    isPrivate: boolean;
    sponsors?: string[]; // for private airports
    governmentGrant?: number; // for public airports
    airlines?: Airline[]; // added property for airlines operating in the airport
}
