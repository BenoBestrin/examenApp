import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private readonly BASE_URL = `${environment.apiUrl}`;
  constructor(private httpClient: HttpClient) {}

  public getAll() :Observable<any>{
    return this.httpClient
      .get<any>(`${this.BASE_URL}/list/all`);
  }
  //{breed name}/images
  public getImage(body: string) :Observable<any>{
    return this.httpClient
      .get<any>(`https://dog.ceo/api/breed/${body}/images`);
  }

}
