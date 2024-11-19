import { Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { HistorialComponent } from './components/historial/historial.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { InicioServiciosComponent } from './components/inicio-servicios/inicio-servicios.component';
export const routes: Routes = [
    { path: '', redirectTo: '/inicio-servicios', pathMatch: 'full' },
    { path: 'inicio-servicios', component: InicioServiciosComponent },
    { path: 'usuarios', component: UsuariosComponent },
  { path: 'instalaciones', component: InstalacionesComponent },
  { path: 'herramientas', component: HerramientasComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'historial', component: HistorialComponent },
  { path: 'reportes', component: ReportesComponent },
  
];
