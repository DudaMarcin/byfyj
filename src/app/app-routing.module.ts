import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Strony
import { MenuComponent } from './menu/menu.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'home', component: HomepageComponent },
  {path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
