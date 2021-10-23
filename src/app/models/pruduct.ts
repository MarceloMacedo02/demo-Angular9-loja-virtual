import { Category } from "./category";

export interface Pruduct {
    id?: number,
    image?: string,
    extension?: string,
    imageView?: string,
    name?: string,
    description?: string,
    value?:number,
    category?: Category,
}
