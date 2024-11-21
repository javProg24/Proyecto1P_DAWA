import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = '/json/usuarios.json'; 

  constructor(private http: HttpClient) {}

// Obtener lista de usuarios
getUsuarios(): Observable<Usuario[]> {
  return this.http.get<Usuario[]>(this.url);
}

agregarUsuario(usuario: Usuario): Observable<Usuario> {
  usuario.id = Date.now(); // Generar ID único
  return of(usuario); // Retornar usuario creado
}

actualizarUsuario(usuario: Usuario): Observable<Usuario> {
  return of(usuario); // Simular actualización del usuario
}

// Eliminar un usuario (simulado)
eliminarUsuario(id: number): Observable<number> {
  return of(id);
}
}