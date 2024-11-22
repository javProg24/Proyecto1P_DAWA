import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Integrante, PerfilesjsonService } from '../../services/integrantes-services/perfilesjson-service.service';
import { MatDialog } from '@angular/material/dialog';
@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [MatCardModule,UpperCasePipe,MatIconModule,NgIf,NgFor],
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.css',
})
export class SobreNosotrosComponent implements OnInit{
  perfiles: Integrante[]=[];
  constructor(private miServicio:PerfilesjsonService){
  }
  ngOnInit(): void {
    this.getPeliculas();
  }
  
  getPeliculas():void{
    this.miServicio.getMovies().subscribe((data: Integrante[])=>{
      this.perfiles=data;
      console.log(this.perfiles[0]);
    });
  }
}
