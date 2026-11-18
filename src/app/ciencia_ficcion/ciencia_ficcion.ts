import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { Table, TableColumn } from '../Components/table/table';
import { LibrosService } from '../Service/libros';

@Component({
  selector: 'app-ciencia_ficcion',
  imports: [Table],
  templateUrl: './ciencia_ficcion.html',
  styleUrl: './ciencia_ficcion.css',
})
export class ciencia_ficcion implements OnInit {
  private librosService = inject(LibrosService);
  private cdr = inject(ChangeDetectorRef);

  columnas: TableColumn[] = [];
  libros: any[] = [];

  ngOnInit(): void {
    this.librosService.getLibrosPorCategoria('Ciencia').subscribe({
      next: (respuesta) => {
        this.libros = respuesta;
        if (respuesta && respuesta.length > 0) {
          this.columnas = Object.keys(respuesta[0]).map((key) => ({ key, label: key }));
        } else {
          this.columnas = ['id', 'titulo', 'autor', 'editorial', 'genero', 'precio', 'cantidad'].map((key) => ({ key, label: key }));
        }
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error al conectar con la API:', error);
      },
    });
  }
}
