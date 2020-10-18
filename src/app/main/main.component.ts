import { MatIconModule } from '@angular/material/icon';
import { MainModel } from './main.model';
import { MainService } from './main.service';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Update } from './update.component';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  dataSource = new MatTableDataSource<MainModel>();

  displayedColumns: string[] = ['id', 'marca', 'modelo', 'ano', 'valor', 'risco', 'edit', 'delete']

  constructor(private mainService: MainService, public dialog: MatDialog) { }

  delete(mainModel: MainModel) {
    this.mainService.delete(mainModel.id)
      .subscribe(response => {
        console.log("excluido")
      }, error => { console.log(error) }
      );
    document.location.reload(true);
  }


  update(mainModel: MainModel) {
    const dialogRef = this.dialog.open(Update, {
      data: mainModel
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      document.location.reload(true);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  loadTable() {
    let array = []
    let item = new MainModel()
    this.mainService.getData()
      .subscribe(response => {
        response.forEach(element => {
          item = new MainModel()
          item.id = element.id
          item.ano = element.ano
          item.marca = element.marca
          item.modelo = element.modelo
          item.valor = element.valor
          item.risco = element.riscoVeiculo

          array.push(item)
        });
        this.dataSource.data = array
      }, error => { console.log });
  }

  ngOnInit(): void {
    this.loadTable()
    this.mainService.getData()
      .subscribe(data => {
        console.log(data)
      })
  }

}
