export type Location = {
    coords: Coords,
    timestamp: number
}

type Coords = {
    latitude: number,
    longitude: number,
    accuracy: number
}

