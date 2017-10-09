import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Book, BookService, BookFilter } from "../shared/index";

@Component({
    moduleId: module.id,
    selector: "book-create-edit",
    templateUrl: "book-create-edit.component.html",
    styleUrls: ["../app.component.css"]
})
export class BookCreateEditComponent implements OnInit {
    currentBook: Book;
    errorMessage: string;
    bookForm: FormGroup;

    constructor(private service: BookService,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.buildForm();
        this.getBookFromRoute();
    }

    public checkError(element: string, errorType: string) {
        return this.bookForm.get(element).hasError(errorType) &&
            this.bookForm.get(element).touched
    }

    public onSubmit(bookForm: FormGroup) {
        
        this.currentBook.title = bookForm.value.title;
        this.currentBook.genre = bookForm.value.genre;
        this.currentBook.published = bookForm.value.published;
        if (this.currentBook.bookId) {
            this.service.updateBook(this.currentBook)
                .subscribe(
                () => this.goBack(),
                error => this.errorMessage = error
                );
        } else {
            this.service.addBook(this.currentBook)
                .subscribe(
                () => this.goBack(),
                error => this.errorMessage = error
                );

        }
    }

    public goBack() {
        let p = this.activatedRoute.snapshot;
        this.router.navigate(["/books", new BookFilter(p.params["filterWriterId"], 
                                                       p.params["filterWriterName"], 
                                                       p.params["filterGenre"], 
                                                       p.params["filterTitle"])]);
    }

    private getBookFromRoute() {
        this.activatedRoute.params.forEach((params: Params) => {
            let bookId = params["bookId"];
            let writerId = params["writerId"];
            if (bookId) {
                this.service.getBook(writerId, bookId).subscribe(
                    book => {
                        this.currentBook = book;
                        this.currentBook.published=this.currentBook.published.slice(0,10);
                        this.bookForm.patchValue(this.currentBook);
                    },
                    error => this.errorMessage = error
                );
            }
            else {
                this.currentBook = new Book(0, null, null, null, writerId, null);
                this.bookForm.patchValue(this.currentBook);
            }
        });
    }

    private buildForm() {
        this.bookForm = this.fb.group({
            title: ["", Validators.required],
            genre: ["", Validators.required],
            published: ["", Validators.required]
        });
    }
}