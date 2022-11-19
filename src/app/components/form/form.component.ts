import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contato } from 'src/app/models/contato';
declare const  M:any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form!: FormGroup;
  @Output() evento = new EventEmitter<Contato>();


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: new FormControl(null,[Validators.required]),
      telefone: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required])
    })
  }

  enableButton = ():boolean =>{
    return this.form.invalid;
  };


  salvar() {
    this.evento.emit(this.form.value)
  }

}
