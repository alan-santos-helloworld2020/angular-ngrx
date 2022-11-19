import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of, tap } from 'rxjs';
import { Contato } from 'src/app/models/contato';
import { ContatoReducer } from 'src/app/store/ContatoReducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // contact$:Observable<Contato>;
  dados:Contato=new Contato();

  constructor(private store:Store<{contact:Contato}>) { 
  }
  
  ngOnInit(): void {
    this.store.select('contact')
    .pipe(
      map(x => x)
    ).subscribe(v=>{
      this.dados = v
    })
  }
 
}
