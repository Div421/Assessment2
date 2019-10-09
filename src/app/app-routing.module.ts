import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { UpdateEduComponent} from './update-edu/update-edu.component'


const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'create',component:CreateComponent },
  {path:'view',component:ViewComponent},
  {path:'editPersonal/:id',component:UpdateComponent},
  {path:'editEdu/:id',component:UpdateEduComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
