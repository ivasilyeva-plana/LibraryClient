import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { BookService, Book, Writer, BookFilter } from "../shared/index";

@Component({
    moduleId: module.id,
    selector: "book-list",
    templateUrl: "book-list.component.html",
    styleUrls: ["../../../node_modules/bootstrap/css/bootstrap.css","../app.component.css"]
})

export class BookListComponent implements OnInit {
    books: Book[];
    bookFilter: BookFilter;
    

    constructor(private activatedRoute: ActivatedRoute,
        private service: BookService,
        private router: Router) { }

    ngOnInit() {
        let p = this.activatedRoute.snapshot;
        this.bookFilter = new BookFilter(p.params["writerId"], 
                                         p.params["writerName"], 
                                         p.params["genre"], 
                                         p.params["title"]);
        this.getBooks();
    }

    public editBook(book: Book) {
        this.router.navigate(["books", "edit", {writerId : book.writerId, 
                                                bookId : book.bookId,
                                                filterWriterId: this.bookFilter.writerId,
                                                filterWriterName: this.bookFilter.writerName,
                                                filterGenre: this.bookFilter.genre,
                                                filterTitle: this.bookFilter.title
                                            }]);
    }

    public deleteBook(book: Book) {
        this.router.navigate(["books", "delete", {deleteWriterId : book.writerId, 
                                                  deleteBookId : book.bookId, 
                                                  filterWriterId: this.bookFilter.writerId,
                                                  filterWriterName: this.bookFilter.writerName,
                                                  filterGenre: this.bookFilter.genre,
                                                  filterTitle: this.bookFilter.title
                                                }]);
    }

    public createBook() {
        this.router.navigate(["books", "create", {writerId: this.bookFilter.writerId, // bookId : "",
                                                filterWriterId: this.bookFilter.writerId,
                                                filterWriterName: this.bookFilter.writerName,
                                                filterGenre: this.bookFilter.genre,
                                                filterTitle: this.bookFilter.title} ]);
    }

    private getBooks() {
        let fl =this.bookFilter
        this.service.getBooks(fl.writerId, fl.genre, fl.title).subscribe(result => {
            this.books = result;
        });
    }
}
