import { FormRiskService } from './form-risk.service';
import { MainModel } from './../main/main.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { preserveWhitespacesDefault } from '@angular/compiler';


@Component({
  selector: 'app-form-risk',
  templateUrl: './form-risk.component.html',
  styleUrls: ['./form-risk.component.css'],
  preserveWhitespaces: true
})
export class FormRiskComponent implements OnInit {
  formMain: FormGroup;

  constructor(private formBuilder: FormBuilder, private formRiskService: FormRiskService) { }

  createForm(mainModel: MainModel){
    this.formMain= this.formBuilder.group({
      marca: [mainModel.marca],
      modelo: [mainModel.modelo],
      ano: [mainModel.ano],
      valor: [mainModel.valor]
    });
  }

  onSubmit() {
    console.log(JSON.stringify(this.formMain.value))
    this.formRiskService.createData(JSON.stringify(this.formMain.value))
    this.formMain.reset(new MainModel());
  }

  ngOnInit(): void {
    this.createForm(new MainModel);
  }

}
