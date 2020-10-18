import { MainService } from './main.service';
import { MainModel } from './main.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'update',
    templateUrl: './update.html'
})
export class Update implements OnInit {
    id: string
    marca: string
    modelo: string
    ano: string
    valor: string
    risco: string


    constructor(public mainService: MainService,
        public dialogRef: MatDialogRef<Update>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        console.log('data', this.data);
    }


    ngOnInit() {
        this.id = this.data.id
        this.marca = this.data.marca
        this.modelo = this.data.modelo
        this.ano = this.data.ano
        this.valor = this.data.valor
        this.risco = this.data.riscoVeiculo
    }
    onSubmit(body: any) {
      body['id'] = this.id
        console.log(body)
        
        this.mainService.Update(body)
        .subscribe(res => {
                console.log("Veículo atualizado")
            }, error => { console.log(error) }
            );

    }
}