import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Writer } from "./writer";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class WriterService {
    // адрес сервиса
    private url = "http://localhost:59854/api/Writer";

    CountryList: string[] = ["Англия", "Украина", "Россия", "Ирландия", "Франция", "США", "Шотландия", "Дания"];

    constructor(private http: Http) { }


    // Отправка GET запроса нв сервер
    public getWriters(pCountry: string, pWriter: string): Observable<Writer[]> {
        console.log(this.url + "?country=" + pCountry + "&name=" + pWriter);
        return this.http.get(this.url + "?country=" + pCountry + "&name=" + pWriter).map(
            result => {
                return result.json().result;
            });
    }

    public getWriter(id: string): Observable<Writer> {
        return this.http.get(this.url + "/" + id).map(
            result => result.json());
    }

    // Отправка POST запроса на сервер, добавление нового автора в базу.
    public addWriter(writer: Writer): any {
        return this.http.post(this.url, writer);
    }

    // Отправка PUT запроса и обновление автора в базе.
    public updateWriter(writer: Writer) {
        return this.http.put(this.url + "/" + writer.id, writer);
    }

    // Отправка DELETE запроса и удаление автора из базы.
    public deleteWriter(writer: Writer) {
        return this.http.delete(this.url + "/" + writer.id);
    }

    private extractWriter(response: Response) {
        let res = response.json();
        let writer = new Writer(res.id, res.name, res.country);
        return writer;
    }

    private handleError(error: any, cought: Observable<any>): any {
        let message = "";

        if (error instanceof Response) {
            let errorData = error.json().error || JSON.stringify(error.json());
            message = `${error.status} - ${error.statusText || ''} ${errorData}`
        } else {
            message = error.message ? error.message : error.toString();
        }

        console.error(message);

        return Observable.throw(message);
    }
}

