import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../utils/my-dialog/my-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { PerfilesjsonServiceService } from '../../services/integrantes-services/perfilesjson-service.service';
import { Integrante } from '../../models/Integrantes';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [MatCardModule, UpperCasePipe, MatButtonModule, MatIconModule,RouterModule,HttpClientModule, MatDialogModule],
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent {
  perfiles: Integrante[]=[];
  constructor(private miServicio:PerfilesjsonServiceService, 
    private myDialog:MatDialog){
  }
  ngOnInit(): void {
    this.getIntegrantes();
  }
  // menuItems=[
  //   {nombre: 'Javier Tomala Gonzalez', icon:'../image/Tomala.jpeg', link:'https://github.com/javProg24', numero: 967182694},
  //   {nombre: 'Pedro Aviles', icon: '../image/Aviles.png', link: 'https://github.com/Peter16Xo', numero: 946593534},
  //   {nombre: 'Jean Romero', icon: '../image/Romero.jpeg', link: 'https://github.com/JMarco20', numero: 954456734},
  //   {nombre: 'Marcos Falconni', icon: '../image/Falconni.jpeg', link: 'https://github.com/FalconMarc', numero: 945643578},
  //   {nombre: 'David Falquez', icon: '../image/Falquez', link: 'https://github.com/ING-DAVID-777',numero: 945678534},
  //   {nombre: '', icon: '', link: '',  numero: 906330537}
  // ];
  verPerfil(perfil:  Integrante):void{
    // const dialogRef = this.myDialog.open(MyDialogComponent,{
    //   data:{
    //     nombres: perfil.nombre + " " + perfil.apellido,
    //     link: perfil.link,
    //     numero: perfil.numero
    //   }
    // });
    // dialogRef.afterClosed().subscribe(
    //   result=>{
    //     console.log(result);
    //     if(result){
    //       console.log("Aceptar");
    //     }else{
    //       console.error("Cancelar");
    //     }
    //   }
    // );
  }
  
  getIntegrantes():void{
    this.miServicio.getPerfiles().subscribe((data: Integrante[])=>{
      this.perfiles=data;
      console.log(this.perfiles[0]);
    });
  }
}
