export class Formation {
    public idFormation: number;
    public nomDomaine : string;
    public nomFormation : string;
    public description : string;
    public prix : number;
    public nomThemeFormation : string;
    public listeSessionFormation: any[];
    

    constructor(idFormation: number,nomDomaine: string, nomFormation:string,description:string, prix:number,nomThemeFormation: string, listeSessionFormation: any[]){
        this.idFormation = idFormation
        this.nomDomaine = nomDomaine;
        this.nomFormation = nomFormation;
        this.description = description;
        this.prix = prix;
        this.nomThemeFormation = nomThemeFormation;
        this.listeSessionFormation = listeSessionFormation;

    }

}
