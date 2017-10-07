import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { WriterService, Writer, BookFilter, WriterFilter } from "../shared/index";

@Component({
    moduleId: module.id,
    selector: "writer-list",
    templateUrl: "writer-list.component.html",
    styleUrls: ["../../../node_modules/bootstrap/css/bootstrap.css","../app.component.css"]
})

export class WriterListComponent implements OnInit {
    writers: Writer[];
    errorMessage: string;
    writerFilter: WriterFilter;

    constructor(private activatedRoute: ActivatedRoute,
        private service: WriterService,
        private router: Router) { }

    ngOnInit() {
        let p = this.activatedRoute.snapshot;
        let pCountry = p.params["country"];
        let pWriter = p.params["writer"];
        if (!pCountry) pCountry="";
        if (!pWriter) pWriter="";
        this.writerFilter = new WriterFilter(pCountry, pWriter);
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
        let fl =this.writerFilter
        this.service.getWriters(fl.country, fl.writer).subscribe(result => {
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