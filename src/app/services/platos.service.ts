import { Injectable } from '@angular/core';
import { Plato } from '../model/plato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  private listaPlatos:Plato[] = []

  constructor(private http:HttpClient) { }

  cargarPlatos():Observable<Plato[]>{
    return this.http.get<Plato[]>('http://localhost:8080/api/platos')
  }

  registrarPlatos(plato:Plato):Observable<Plato>{
    return this.http.post<Plato>('http://localhost:8080/api/platoguardar', plato)

  }
  
  actualizarPlato(plato:Plato):Observable<Plato>{
    return this.http.put<Plato>('http://localhost:8080/api/plato/'+plato.id, plato)
  }

  eliminarPlato(id:number):Observable<void>{
    return this.http.delete<void>('http://localhost:8080/api/plato/'+id)
  }
}
