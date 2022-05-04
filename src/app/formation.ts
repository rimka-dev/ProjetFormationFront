export class Formation {
    public nomDomaine : string;
    public nomFormation : string;
    public description : string;
    public prix : number;
    public nomThemeFormation : string;

    constructor(nomDomaine: string, nomFormation:string,description:string, prix:number,nomThemeFormation: string){
        this.nomDomaine = nomDomaine;
        this.nomFormation = nomFormation;
        this.description = description;
        this.prix = prix;
        this.nomThemeFormation = nomThemeFormation;

    }

}
