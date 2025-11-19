import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistraseComponent } from './pages/register/register.component'; // 👈 IMPORTANTE

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistraseComponent }, // 👈 AÑADE ESTO

  // Ruta por defecto
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
