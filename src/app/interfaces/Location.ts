export interface Location {
    id: string;
    categorie: string;  // appartement..studio..chambre
    description: string;
    type: string; // moderne ou pas
    prix: number;
    ville: string;
    quartier: string;
    telephone ?: string; // telephone du bailleur
    cite: Apropos;
    img: string[];
    maps ?: Maps;
    pieces: Pieces;
    note: number;
    creerLe: Date;
}

export interface Apropos {
    disponible: boolean;
    name ?: string;
    frais ?: number;
}

export interface Pieces {
    salon: number;
    cuisine: number;
    douche: number;
    chambre: number;
    terasse: number;
}

export interface Maps {
    Long: number;
    lat: number;
}
