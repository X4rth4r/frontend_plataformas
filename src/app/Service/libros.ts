import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {

  private readonly url = 'https://backendplataformas-production.up.railway.app/api/libros';

  constructor(private http: HttpClient) { }

  // Obtener todos los libros
  public getLibros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/obtener`);
  }

  // Obtener libros por categoría
  public getLibrosPorCategoria(categoria: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/categoria/${categoria}`);
  }

  // Obtener un libro por ID
  getLibroById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  // Crear un libro
  crearLibro(libro: any): Observable<any> {
    return this.http.post<any>(this.url, libro);
  }

  // Actualizar completamente un libro
  actualizarLibro(id: number, libro: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, libro);
  }

  // Actualizar parcialmente un libro
  actualizarParcialLibro(id: number, libro: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/${id}`, libro);
  }

  // Eliminar un libro
  eliminarLibro(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
