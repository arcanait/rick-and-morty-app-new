export interface Character {
    info: Info;
    results: Results;
}

interface Info {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export interface Results {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: any;
    location: any;
    image: string;
    episode: string[];
    url: string;
    created: string;
}