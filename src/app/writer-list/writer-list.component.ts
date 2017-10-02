import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { WriterService, Writer, BookFilter } from "../shared/index";

@Component({
    moduleId: module.id,
    selector: "writer-list",
    templateUrl: "writer-list.component.html",
    styleUrls: ["../../../node_modules/bootstrap/css/bootstrap.css","../app.component.css"]
})

export class WriterListComponent implements OnInit {
    writers: Writer[];
    errorMessage: string;
    selectedCountry: string = "";
    searchWriter: string = "";

    constructor(private service: WriterService,
        private router: Router) { }

    ngOnInit() {
        this.getWriters();
    }

    public editWriter(writer: Writer) {
        this.router.navigate(["writers", "edit", writer.id]);
    }

    public deleteWriter(writer: Writer) {
        this.router.navigate(["writers", "delete", writer.id]);
    }

    public createWriter() {
        this.router.navigate(["writers", "create"]);
    }

    private getWriters() {

        this.service.getWriters(this.selectedCountry, this.searchWriter).subscribe(result => {
            this.writers = result;
        });
    }

    public createBook(writer: Writer) {
        this.router.navigate(["books", "create", {writerId: writer.id, writerName: writer.name} ]);
    }
/*
    public books(filter: Writer) {
        this.router.navigate(["books", {writerId : writer.id}]);
    }
*/
    public books(writer: Writer) {
        let filter = new BookFilter(writer.id, writer.name, "","");
        this.router.navigate(["books", filter]);
    }

    
}