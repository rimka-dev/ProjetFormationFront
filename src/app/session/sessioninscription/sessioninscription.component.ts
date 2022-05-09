import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiformationsService } from 'src/app/services/apiformations.service';
import { ApisessionService } from 'src/app/services/session/apisession.service';

@Component({
  selector: 'app-sessioninscription',
  templateUrl: './sessioninscription.component.html',
  styleUrls: ['./sessioninscription.component.scss']
})
export class SessioninscriptionComponent implements OnInit {
  session: any;
  formation : any;
  id: string = "";
  idFormation: string = "";
  error: boolean = false;
  
  constructor(private activatedRoute: ActivatedRoute, private apiSession: ApisessionService, private apiformation: ApiformationsService ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    
    if(this.id != undefined){  
      this.apiSession.getSessionById(this.id).subscribe({
        next: (data) => {
          this.session = data;
          console.log(this.session);
          
        },
        error: (error) => {
          console.error(error);
          this.error = true;
        }
      });

    };
   
   };

   

  ngOnInit(): void {
    this.idFormation = this.activatedRoute.snapshot.params['idFormation'];
    if(this.idFormation != undefined){
      this.apiformation.getFormationById(this.idFormation).subscribe({
        next: (data) => {
          this.formation = data;
          console.log(this.formation);
          
        },
        error: (error) => {
          console.error(error);
          this.error = true;
        }
      });

    }

 
  }

}
