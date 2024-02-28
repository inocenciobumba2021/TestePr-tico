import { Component } from '@angular/core';
import { AddDoctores } from '../models/AddDoctores';
import { AdicionarService } from '../services/adicionar.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  AddDoctore: AddDoctores = new AddDoctores()
  doctores: any;

  constructor(private ServiceAdicionar:AdicionarService){}

  ngOnInit(): void {
    this.PegatodosDoctores()
    }
    PegatodosDoctores(){
      this.ServiceAdicionar.PegatodosDoctores().subscribe(res=>{
        this.doctores=res;
        console.log(this.doctores)
      })
    }

}
