import { Observable, of } from 'rxjs';
import { Treinador } from './treinador';
import { TREINADORES } from './mock-treinador';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class TreinadorServices 
{

    constructor( private http: HttpClient ) { }

    getTreinadores(): Observable<Treinador[]> 
    {
        return of(TREINADORES);
    }
}
