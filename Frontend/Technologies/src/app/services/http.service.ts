import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technology } from '../models/technology.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = environment.baseAPIUrl;

  constructor(private readonly http:HttpClient) { }

  public getTechnologies(){
    return this.http.get<Technology[]>(`${this.baseUrl}/technologies`);
  }

  public getTechnologie(id: string){
    return this.http.get<Technology>(`${this.baseUrl}/technologies/${id}`);
  }

  public searchTechnology(query: string){
    return this.http.get<Technology[]>(`${this.baseUrl}/technologies/search?nombre=${query}`);
  }
}
