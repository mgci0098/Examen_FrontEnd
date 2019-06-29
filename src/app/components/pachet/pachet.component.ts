import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacheteService } from 'src/app/services/pachete.service';

@Component({
  selector: 'app-pachet',
  templateUrl: './pachet.component.html',
  styleUrls: ['./pachet.component.scss']
})
export class PachetComponent implements OnInit {

    public pachete: any = null;
    public history: any = null;
    public displayedColumns: string[] = ['taraOrigine', 
                                        'denumireExpeditor', 
                                        'taraDestinatie', 
                                        'denumireDestinatar',
                                        'adresaDestinatar',
                                        'cost',
                                        'codTracking'
                                    ];



  constructor(private pacheteService: PacheteService, private router :Router) {
      this.getAllPack();
  }

  ngOnInit() {

  }

  getAllPack(){
      this.pacheteService.getAllPAchete().subscribe(p => {
          this.pachete = p;
          console.log(p);
      })
  }

  getPackByExpeditor(expeditor){
    this.pacheteService.getPacheteByExpeditor(expeditor).subscribe(p => {
      this.history = p;
      console.log(p)
    })
  }


  goBack(){
    this.router.navigate(['']);
  }

}