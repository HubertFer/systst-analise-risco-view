import { FormRiskService } from './form-risk.service';
import { MainModel } from './../main/main.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-risk',
  templateUrl: './form-risk.component.html',
  styleUrls: ['./form-risk.component.css'],
  preserveWhitespaces: true
})
export class FormRiskComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;
  formMain: FormGroup;

  constructor(private formBuilder: FormBuilder, private formRiskService: FormRiskService,private toastr: ToastrService) { }

  createForm(mainModel: MainModel){
    this.formMain= this.formBuilder.group({
      marca: [mainModel.marca],
      modelo: [mainModel.modelo],
      ano: [mainModel.ano],
      valor: [mainModel.valor]
    });
  }
  showSuccess() {
    this.toastr.success('VEÍCULO CADASTRADO COM SUCESSO!');
  }

  onSubmit() {
    console.log(JSON.stringify(this.formMain.value))
    this.formRiskService.createData(JSON.stringify(this.formMain.value))
    this.showSuccess()
    this.formMain.reset(new MainModel());
  }

  ngOnInit(): void {
    this.createForm(new MainModel);
    this.toastr.overlayContainer = this.toastContainer;
  }

}
