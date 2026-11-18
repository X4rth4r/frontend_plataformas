import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { Table, TableColumn } from '../Components/table/table';
import { LibrosService } from '../Service/libros';

@Component({
  selector: 'app-terror',
  imports: [Table],
  templateUrl: './terror.html',
  styleUrl: './terror.css',
})
export class terror implements OnInit {
  private librosService = inject(LibrosService);
  private cdr = inject(ChangeDetectorRef);

  columnas: TableColumn[] = [];
  libros: any[] = [];

  ngOnInit(): void {
    this.librosService.getLibrosPorCategoria('Terror').subscribe({
      next: (respuesta) => {
        this.libros = respuesta;
        this.columnas = Object.keys(respuesta[0]).map((key) => ({ key, label: key }));
      },
      error: (error) => {
        console.error('Error al conectar con la API:', error);
      },
    });
  }
}
