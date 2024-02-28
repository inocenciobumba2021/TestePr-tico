import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddDoctores } from '../models/AddDoctores';
import { AdicionarService } from '../services/adicionar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {

  formDoctor!: FormGroup
  AddDoctore: AddDoctores = new AddDoctores()
  doctores: any;
  total!:number;

  constructor(
    private formbuilder: FormBuilder, private ServiceAdicionar:AdicionarService){
    }

  ngOnInit(): void {
    this.formDoctor = this.formbuilder.group({
      usuario: ['',Validators.required],
      nome: ['',Validators.required],
      ultimo: ['',[Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      data: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      genero: ['', [Validators.required]],
    })
}
    

    cadastrar() {
      if (this.formDoctor.value.usuario && this.formDoctor.value.nome && this.formDoctor.value.ultimo && this.formDoctor.value.email &&
          this.formDoctor.value.telefone && this.formDoctor.value.data && this.formDoctor.value.estado ) {
         
          this.AddDoctore.usuario = this.formDoctor.value.usuario;
          this.AddDoctore.nome = this.formDoctor.value.nome;
          this.AddDoctore.ultimo = this.formDoctor.value.ultimo;
          this.AddDoctore.email = this.formDoctor.value.email;
          this.AddDoctore.telefone = this.formDoctor.value.telefone;
          this.AddDoctore.data = this.formDoctor.value.data;
          this.AddDoctore.estado = this.formDoctor.value.estado;
          this.AddDoctore.genero = this.formDoctor.value.genero;
          
          this.ServiceAdicionar.CadastrarDoctores(this.AddDoctore)
              .subscribe(res => {
                  this.formDoctor.reset();
                  
              });
      } else {
          Swal.fire({
            title: 'Alerta',
            text: 'Porfavor preencha todos os campos',
            icon: 'warning',
            confirmButtonText: 'Ok'
          })
      }
  }
  
}
    
