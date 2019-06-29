import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PacheteService {
    public pachete: any;

    constructor(private http: HttpClient) {
    }

    getAllPAchete() : Observable<any> {
        return this.http.get<any>(`https://localhost:44301/api/pachete`);
    }

    getPacheteByExpeditor(expeditor): Observable<any>{
        const url = `${`https://localhost:44301/api/pachete`}/${expeditor}`;
        return this.http.get<any>(url, expeditor);
    }  

}