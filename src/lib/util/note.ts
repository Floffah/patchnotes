export interface Note {
    id: number;
    name: string;
    body: string;
    tags: Tag[];
    version: string;
}

export interface Tag {
    name: string;
}
