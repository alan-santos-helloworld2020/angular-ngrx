import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { of, map, Observable, tap } from 'rxjs';
import { Contato } from 'src/app/models/contato';
import { MyEvent } from 'src/app/store/ContatoReducer';
declare const M:any;

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  contact$:Observable<Contato>;

  constructor(private store:Store<{contact:Contato}>) {
       this.contact$ = store.select('contact');
   }

  ngOnInit(): void {
  }

  evento(contato: Contato) {
    
    this.store.dispatch(MyEvent(
      {
        nome:contato.nome,
        telefone:contato.telefone,
        email:contato.email
      }))      
    this.contact$.pipe(
      map(x => x)
    ).subscribe(x=>{
      console.log(x)
    })

  }

}
