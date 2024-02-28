import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './TesteHome/components/cadastrar/cadastrar.component';
import { BodyComponent } from './TesteHome/components/body/body.component';

const routes: Routes = [
  {path: '', component: BodyComponent },
  {path: 'body', redirectTo: 'body',pathMatch:'full'},
  {path: 'adicionar', component: CadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
