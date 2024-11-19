import { CommonModule, DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio-servicios',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatIconModule,MatCardModule,RouterModule,RouterLinkActive,RouterLink,MatCardModule,MatTableModule,RouterModule],
  templateUrl: './inicio-servicios.component.html',
  styleUrl: './inicio-servicios.component.css'
})
export class InicioServiciosComponent {
  menuItems = [
    { title: 'Instalaciones', icon: '/image/instalaciones.png', buttonText: 'Entrar', routerLink: "/instalaciones", routerLinkActive: "active" },
    { title: 'Herramientas', icon: '../image/herramienta.png', buttonText: 'Entrar', routerLink: "/herramientas", routerLinkActive: "active" },
    { title: 'Reservas', icon: '../image/reserva.png', buttonText: 'Entrar', routerLink: "/reservas", routerLinkActive: "active" },
    { title: 'Usuarios', icon: '../image/usuario.png', buttonText: 'Entrar', routerLink: "/usuarios", routerLinkActive: "active" },
    { title: 'Historial', icon: '../image/historial.png', buttonText: 'Entrar', routerLink: "/historial", routerLinkActive: "active" },
    { title: 'Reportes', icon: '../image/reporte.png', buttonText: 'Entrar', routerLink: "/reportes", routerLinkActive: "active" }
];
}
