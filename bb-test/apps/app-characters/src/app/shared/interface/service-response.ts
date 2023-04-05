import { ListCharacters } from "./list-characters";

export interface ServiceResponse {
    info: {
        count?: number;
        pages?: number;
        next?: string;
        prev?: string;
    }
    results: Array<ListCharacters[]>;
}
