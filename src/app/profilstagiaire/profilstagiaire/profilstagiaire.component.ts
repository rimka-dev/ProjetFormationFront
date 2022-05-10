import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stagiaire } from 'src/app/models/stagiaire/stagiaire';
import { ApistagiaireService } from 'src/app/services/stagiaire/apistagiaire.service';

@Component({
  selector: 'app-profilstagiaire',
  templateUrl: './profilstagiaire.component.html',
  styleUrls: ['./profilstagiaire.component.scss']
})
export class ProfilstagiaireComponent implements OnInit {
  stagiaire: any
  id: string = "";
  error: boolean = false;
  messageOK : string = "";
  messageErreur :string ="";

  constructor(private activatedRoute: ActivatedRoute, private apiStagiaire : ApistagiaireService) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    
    if(this.id != undefined){
      this.apiStagiaire.getStagiaireById(this.id).subscribe({
        next: (data:any) => {
          console.log(data);
          this.stagiaire = data;
          console.log(this.stagiaire);
          
          
        },
        error: (error) => {
          console.error(error);
          this.error = true;
        }
      });

    }
    
    
    
  }

  ngOnInit(): void {
  }

}
