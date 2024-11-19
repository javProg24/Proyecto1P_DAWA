import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule , MatCardModule, MatTableModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sistema-recursos-comunitarios';
}
