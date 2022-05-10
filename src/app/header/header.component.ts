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
  isConnected : boolean = false;
  constructor(private apiconnexionstagiaire : ConectstagiaireService) {}

  ngOnInit(): void {
    this.requestFormation = this.apiconnexionstagiaire.getConnexionStagiaires().subscribe({
      next: (result: any) => {
       console.log(result);
       console.log("okok");
       
       
       this.stagiaire = result;
       console.log("this.stagiaire = "+this.stagiaire);
      if(this.stagiaire == null){
        this.isConnected = false;
      }else{
        this.isConnected = true;
      }
      console.log("this.isConnected = "+this.isConnected);
      
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
  this.isConnected = false;
  location.reload();

  }
}
