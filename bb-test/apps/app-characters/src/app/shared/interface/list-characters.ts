export interface ListCharacters {
    id?: number;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    origin?: TransversalOriginLocation;
    location?: TransversalOriginLocation;
    image?: string;
    episode?: Array<string[]>;
    url?: string;
    created?: string;
}

export interface TransversalOriginLocation {
    name?: string;
    url?: string;
}