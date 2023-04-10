import { Etat } from "./etat";
import { Reviwer } from "./reviwer";


export class Document{
    public Id !:number;
    public code !: string;
    public name!: string;
    public source!: string;
    public dateReception!: Date;
    public subject!: string;
    public  address!: string;
    public etat !: Etat;
    public reviwer ?:Reviwer;
}