import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatIconModule,RouterLinkActive,RouterLink,MatCardModule,MatTableModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'sistema-recursos-comunitarios';
  constructor(private router: Router){
  }
  isHomeActive():boolean{
    return this.router.url === '/home'
  }
  menuItems = [
    { title: 'Instalaciones', icon: '/image/instalaciones.png', buttonText: 'Entrar', routerLink: "/instalaciones", routerLinkActive: "active" },
    { title: 'Herramientas', icon: '../image/herramienta.png', buttonText: 'Entrar', routerLink: "/herramientas", routerLinkActive: "active" },
    { title: 'Reservas', icon: '../image/reserva.png', buttonText: 'Entrar', routerLink: "/reservas", routerLinkActive: "active" },
    { title: 'Usuarios', icon: '../image/usuario.png', buttonText: 'Entrar', routerLink: "/usuarios", routerLinkActive: "active" },
    { title: 'Historial', icon: '../image/historial.png', buttonText: 'Entrar', routerLink: "/historial", routerLinkActive: "active" },
    { title: 'Reportes', icon: '../image/reporte.png', buttonText: 'Entrar', routerLink: "/reportes", routerLinkActive: "active" }
];
}
