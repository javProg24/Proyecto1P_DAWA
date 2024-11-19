import { DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio-servicios',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatCardModule,RouterModule,],
  templateUrl: './inicio-servicios.component.html',
  styleUrl: './inicio-servicios.component.css'
})
export class InicioServiciosComponent {

}
