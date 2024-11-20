import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
export interface DataDialog{
  nombre:string,
  apellido: string,
  link:string,
  numero: string
}
@Component({
  selector: 'app-my-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './my-dialog.component.html',
  styleUrl: './my-dialog.component.css'
})
export class MyDialogComponent {
  constructor(public dialogRef: MatDialogRef<MatDialogModule>,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog) {

  }
  onAceptar():void{
    this.dialogRef.close("aceptar");  // cierra la ventana de dialogo
  }

  onCancelar():void{
    this.dialogRef.close("cancelar"); // cierra la ventana de dialogo
  }
}
