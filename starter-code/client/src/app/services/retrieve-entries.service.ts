import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RetrieveEntriesService {

  API_URL = 'http://localhost:3000';

  constructor(private http: Http) { }

  getEntries(): Promise<any>  {
    return this.http.get(`${this.API_URL}/journal-entries`)
         .toPromise()
         .then((res: Response) => res.json());
  }
  
  getSingleEntry(id): Promise<any>  {
    return this.http.get(`${this.API_URL}/journal-entries/${id}`)
         .toPromise()
         .then((res: Response) => res.json());
  }

}
