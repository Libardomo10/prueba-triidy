import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from 'rxjs';
import { ServiceResponse } from '../shared/interface/service-response';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  private ENDPOINT_CONSULTA: string = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) { }

  /**
   * Método para consumir servicio de consulta api rick y morty.
   */
  getListCharacters(): Observable<any> {
    // return this.http.get<RespuestaServicio<DetalleTablaImc>>(this.ENDPOINT_CONSULTA_IMC, { params }).pipe(
    return this.http.get<ServiceResponse>(this.ENDPOINT_CONSULTA).pipe(
      map(response => response)
    );
  }
}
