import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuarios.model';
import { UsuariosService } from '../../services/usuarios.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { UsuarioFormComponent } from '../shared/usuario-form/usuario-form.component';



@Component({  
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule, // Asegúrate de incluir este módulo
    MatTableModule,
    MatCheckboxModule,
    MatCardTitle,
    MatCardContent,
    MatCard,
    FormsModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  usuarios: Usuario[] = [];
  columnas: string[] = ['nombre', 'correo', 'direccion', 'telefono', 'activo', 'acciones'];
  filtro: string = ''; // Declarar la propiedad filtro aquí

  constructor(private usuariosService: UsuariosService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  agregarUsuario(): void {
    const dialogRef = this.dialog.open(UsuarioFormComponent);
  
    dialogRef.afterClosed().subscribe((nuevoUsuario) => {
      if (nuevoUsuario) {
        this.usuariosService.agregarUsuario(nuevoUsuario).subscribe((usuario) => {
          this.usuarios.push(usuario); // Agregar nuevo usuario a la lista
        });
      }
    });
  }
  
  
  editarUsuario(usuario: Usuario): void {
    const dialogRef = this.dialog.open(UsuarioFormComponent, {
      data: usuario, // Pasar usuario seleccionado para editar
    });
  
    dialogRef.afterClosed().subscribe((usuarioEditado) => {
      if (usuarioEditado) {
        this.usuariosService.actualizarUsuario(usuarioEditado).subscribe((actualizado) => {
          const index = this.usuarios.findIndex((u) => u.id === actualizado.id);
          if (index !== -1) {
            this.usuarios[index] = actualizado; // Actualizar en la lista
          }
        });
      }
    });
  }
  
  
  
  

  eliminarUsuario(id: number): void {
    this.usuariosService.eliminarUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter((u) => u.id !== id);
    });
  }

  buscarUsuario(): Usuario[] {
    return this.usuarios.filter((usuario) =>
      usuario.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}
