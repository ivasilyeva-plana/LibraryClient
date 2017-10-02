import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Book } from "./book";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
    // адрес сервиса
    private url = "http://localhost:59854/api/Book";

    GenreList: string[] = ["Биография", "Фантастика", "Фентези", "Детектив", "Классика", "Повесть", "Роман", "Поэзия"];

    constructor(private http: Http) { }


    // Отправка GET запроса нв сервер
    public getBooks(pWriterId: string, pGenre: string, pTitle: string): Observable<Book[]> {
        return this.http.get(this.url + "?writerId=" + pWriterId + "&genre=" + pGenre + "&title=" + pTitle).map(
            result => {
                return result.json();
            });
    }

    public getBook(writerId: string, bookId: string): Observable<Book> {
        return this.http.get(this.url + "/" + writerId + "&" + bookId).map(
            result => result.json());
    }

    // Отправка POST запроса на сервер, добавление нового автора в базу.
    public addBook(book: Book) {
        return this.http.post(this.url, book);
    }

    // Отправка PUT запроса и обновление автора в базе.
    public updateBook(book: Book) {
        return this.http.put(this.url, book);
    }

    // Отправка DELETE запроса и удаление автора из базы.
    public deleteBook(book: Book) {
        return this.http.delete(this.url + "/" + book.writerId + "&" + book.bookId, book);
    }

    
}

