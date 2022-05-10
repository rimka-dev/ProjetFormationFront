import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConectstagiaireService } from '../services/connexion/conectstagiaire.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  requestFormation : Subscription | undefined;
  stagiaire : any;
  isConnected : number = 0;
  constructor(private apiconnexionstagiaire : ConectstagiaireService) {}

  ngOnInit(): void {
    this.requestFormation = this.apiconnexionstagiaire.getConnexionStagiaires().subscribe({
      next: (result: any) => {
       console.log(result);
       console.log("okok");
       
       
       this.stagiaire = result;
      if(this.stagiaire == null){
        this.isConnected = 0;
      }else{
        this.isConnected = 1;
      }
      console.log(this.isConnected);
      
          console.log("connected :"+this.stagiaire.statut);
      
      }
    })
  }

  connexion(){
    location.replace("http://localhost:8080/login/stagiaire");
  }

  deconnexion(){
    this.apiconnexionstagiaire.getDeconnexionStagiaires().subscribe({
      next: (result: any) => {}
     
  });
  location.reload();

  }

  

}
