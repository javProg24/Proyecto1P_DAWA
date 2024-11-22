import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync() // Proporciona las rutas a la aplicación
  ]
}).catch(err => console.error(err));
