import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormComponent } from './components/form/form.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'AppComponent', component: AppComponent },
  { path: 'welcome-component', component: WelcomeComponent },
  { path: 'form-component', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
