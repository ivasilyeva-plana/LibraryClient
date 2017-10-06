import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Report } from "./report";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class ReportService {
    // адрес сервиса
    private url = "http://localhost:59854/api/report";


    constructor(private http: Http) { }


    // Отправка GET запроса нв сервер
    public getReport(pNum: number, pYear: number = 0): Observable<Report[]> {
        return this.http.get(this.url + "?numReport=" + pNum.toString() + "&year=" + pYear.toString()).map(
            result => {
                return result.json();
            });
    }


}

