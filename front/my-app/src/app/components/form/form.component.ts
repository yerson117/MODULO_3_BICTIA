import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formTitle = "Registro de Servicios"
  employeeNameInput:string = '';
  employeeIdInput:number= 0;
  ownerNameInput:string = '';
  ownerIdInput:number= 0;
  ownerEmailInput:string = '';
  serviceDateInput = new Date();


  addRegister(){

  }
}
