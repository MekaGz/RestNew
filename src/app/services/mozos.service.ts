import { Injectable } from '@angular/core';
import { Mozo } from '../model/mozo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MozosService {

  private listaMozos:Mozo[] = []

  constructor(private http:HttpClient) { }

  cargarMozos():Observable<Mozo[]>{
    return this.http.get<Mozo[]>('http://localhost:8080/api/mozos')
  }

  registrarMozos(mozo:Mozo):Observable<Mozo>{
    return this.http.post<Mozo>('http://localhost:8080/api/mozoguardar', mozo)

  }
  
  actualizarMozo(mozo:Mozo):Observable<Mozo>{
    return this.http.put<Mozo>('http://localhost:8080/api/mozo/'+mozo.id, mozo)
  }

  eliminarMozo(id:number):Observable<void>{
    return this.http.delete<void>('http://localhost:8080/api/mozo/'+id)
  }
}
