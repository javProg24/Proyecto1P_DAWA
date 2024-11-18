import { Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { HistorialComponent } from './components/historial/historial.component';
import { ReportesComponent } from './components/reportes/reportes.component';

export const routes: Routes = [
    { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'instalaciones', component: InstalacionesComponent },
  { path: 'herramientas', component: HerramientasComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'historial', component: HistorialComponent },
  { path: 'reportes', component: ReportesComponent },
];
