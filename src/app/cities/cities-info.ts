export class cityinfo {
    name: string
    attractionSites:string[]
    constructor(name:string, attractionSites:string[]){
    this.name = name
    this.attractionSites = attractionSites
    }
    }

    export interface Weather {
        name: string, 
        springN:number, 
        springM:number, 
        summerN:number, 
        summerM:number, 
        winterN:number, 
        winterM:number, 
        autumnN:number, 
        autumnM:number, 
        visitFrom:string, 
        visitTo:string
    }