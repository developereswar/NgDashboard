import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class MainService {

    constructor(private http: HttpClient) { }


    // File Upload Service
    UploadFile(file: File) {
        const formdata = new FormData();
        formdata.append('file', file)
        return this.http.post('http://localhost:8080/uploadFile', formdata)
            .map(this.extractData)
            .catch(this.handleErrorObservable)
    }

    private extractData(res: Response) {
        // let body = res.json();
        return res;
    }

    private handleErrorObservable(error:any) {
        return throwError(error.message || error);
       
    }

}