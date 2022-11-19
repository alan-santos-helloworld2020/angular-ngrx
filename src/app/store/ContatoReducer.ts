import { createAction, createReducer, on, props } from '@ngrx/store';
import { Contato } from '../models/contato';


export const initialState={
    nome:"",
    telefone:"",
    email:""
};



export const MyEvent = createAction('[Contato Component] Evento',props<{
    nome:string,
    telefone:string,
    email:string

}>())


export const ContatoReducer = createReducer(
    initialState,
    on(MyEvent, (state,payload) => (
        {...state,nome:payload.nome,
            telefone:payload.telefone,
            email:payload.email
        })),
    
    
    
    )