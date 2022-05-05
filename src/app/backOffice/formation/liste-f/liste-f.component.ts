import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Formation } from 'src/app/models/formation';
import { ApiformationsService } from 'src/app/services/apiformations.service';

@Component({
  selector: 'app-liste-f',
  templateUrl: './liste-f.component.html',
  styleUrls: ['./liste-f.component.scss']
})
export class ListeFComponent implements OnInit {
  requestFormation : Subscription | undefined;
  id: string = "";
  formations : Formation [] = [];
  error: boolean = false;
  constructor(private apiformation: ApiformationsService) {}

  ngOnInit(): void {
    console.log('ok');
    this.requestFormation =  this.apiformation.getFormations().subscribe({
      next: (result: any)=>{
        for (const iterator of result) {
          let formation = new Formation(iterator.idFormation ,iterator.nomDomaine, iterator.nomFormation,iterator.description,iterator.prix,iterator.nomThemeFormation, iterator.listeSessionFormation);
          this.formations.push(formation);
          console.log(formation);
        }
      },
      error:(err)=> {console.error("Error : "+ err); }
    });

  }

  onDeleteArticle(index:number){
    this.id = index.toString();
   console.log(this.id);
   this.apiformation.deleteFormationById(this.id).subscribe({
    next: (result: any)=>{
     
      this.formations.splice(index,1);
      console.log(this.formations);
      
    },
    
     error: (error) => {
       console.error(error);
       this.error = true;
     }
   });
    
   
 }

}
