import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of, tap } from 'rxjs';
import { Contato } from 'src/app/models/contato';
import { MyEvents } from 'src/app/store/ContatoReducer';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dados:any=[];
  contact$:Observable<Contato>;


  constructor(private store: Store<{ contact: Contato }>) {
    this.contact$ = store.select(contact => contact.contact)
  }
  ngOnInit(): void {

    this.getDados();

  }

  getDados(){
     this.contact$.pipe(tap(x=>x))
     .subscribe(x=>{
        this.dados = x;
     })
  }
}
