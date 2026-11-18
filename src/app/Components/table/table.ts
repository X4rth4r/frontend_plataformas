import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

export interface TableColumn {
  key: string;
  label: string;
}

@Component({
  selector: 'app-table',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements AfterViewInit, OnChanges {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.displayedColumns = this.columns.map((c) => c.key);
    }
    if (changes['data']) {
      this.dataSource.data = this.data || [];
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

export const TableBasicExample = Table;
