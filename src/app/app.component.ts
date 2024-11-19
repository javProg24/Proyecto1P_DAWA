import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterOutlet, RouterModule , MatCardModule, MatTableModule, MatToolbar, MatSidenav, MatNavList, MatSidenavContainer, MatSidenavContent, MatIcon ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private router: Router) {}
  
    // Método para verificar si estamos en la página de inicio (home)
    isHomeActive(): boolean {
      return this.router.url === '/home';
    }


  // Opciones de menú
  menuItems = [
    { title: 'Instalaciones comunitarias', icon: 'home_repair_service', buttonText: 'Entrar', route: '/instalaciones' },
    { title: 'Herramientas compartidas', icon: 'construction', buttonText: 'Entrar', route: '/herramientas' },
    { title: 'Reservas', icon: 'event', buttonText: 'Entrar', route: '/reservas' },
    { title: 'Usuarios', icon: 'person', buttonText: 'Entrar', route: '/usuarios' },
    { title: 'Historial de Uso', icon: 'history', buttonText: 'Entrar', route: '/historial' },
    { title: 'Reportes Comunitarios', icon: 'report', buttonText: 'Entrar', route: '/reportes' },
  ];

}
