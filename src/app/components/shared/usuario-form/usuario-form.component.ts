import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../models/usuarios.model';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatRadioModule
  ],
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent {
  usuario: Usuario;

  constructor(
    public dialogRef: MatDialogRef<UsuarioFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Si se pasa datos (editar), usar esos datos, si no, usar los valores predeterminados
    this.usuario = this.data ? { ...this.data } : { nombre: '', correo: '', direccion: '', telefono: '', activo: true };
  }

  guardar(): void {
    // Solo cerrar el diálogo si los datos son válidos
    if (this.usuario.nombre && this.usuario.correo) {
      this.dialogRef.close(this.usuario); // Cierra el diálogo y pasa los datos del usuario
    } else {
      // Aquí puedes agregar lógica si necesitas mostrar un mensaje o manejar un error
      alert('Los datos del usuario son inválidos');
    }
  }

  cancelar(): void {
    this.dialogRef.close(); // Cierra el diálogo sin guardar
  }
}
