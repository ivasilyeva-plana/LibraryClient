import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";

import { Book, BookService, BookFilter } from "../shared/index";

@Component({
    moduleId: module.id,
    selector: "book-delete",
    templateUrl: "book-delete.component.html",
    styleUrls: ["../../../node_modules/bootstrap/css/bootstrap.css"]
})
export class BookDeleteComponent implements OnInit {

    currentBook: Book;
    bookFilter: BookFilter; 
    errorMessage: string;

    constructor(private activatedRoute: ActivatedRoute,
        private router: Router,
        private service: BookService) { }

    ngOnInit() {
        let deleteWriterId = this.activatedRoute.snapshot.params["deleteWriterId"];
        let deleteBookId = this.activatedRoute.snapshot.params["deleteBookId"];
        let p = this.activatedRoute.snapshot;
        this.bookFilter = new BookFilter(p.params["filterWriterId"],
                                         p.params["filterWriterName"], 
                                         p.params["filterGenre"], 
                                         p.params["filterTitle"]);
        if (deleteBookId) {
            this.service.getBook(deleteWriterId, deleteBookId)
                .subscribe(
                book => this.currentBook = book,
                error => this.errorMessage = error
                );
        }
    }

    deleteBook() {
        this.service.deleteBook(this.currentBook)
            .subscribe(
            () => this.goBack(),
            error => this.errorMessage = error
            );
    }

    goBack() {
        this.router.navigate(["books", this.bookFilter]);
    }

}