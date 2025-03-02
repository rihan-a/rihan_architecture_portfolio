export interface projectInterface {
    id: number | null;
    title: string;
    desc: string;
    year: number | null;
    location: string;
    client: string;
    phase: string;
    programme: string;
    role: string;
    images: string[];
    videos?: string[];
}

export interface GalleryItem {
    id?: string;
    prompt: string;
    imageUrl: string;
    createdAt?: string;
    originalImage?: string;
    maskImage?: string;
}
