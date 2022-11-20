import { createAction, createReducer, createSelectorFactory, on, props } from '@ngrx/store';
import { Contato } from '../models/contato';


export const initialState: Array<Contato> = [];



export const MyEvent = createAction('[Contato Component] Evento',props<Contato>())
export const MyEvents = createAction('[Contato Component] Eventos')


export const ContatoReducer = createReducer(
    initialState,
    on(MyEvent, (state,payload) =>[...state,payload] ),
    on(MyEvents, (state) => state.map(x => x)),
    )
