import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { WriterService, Writer, BookFilter, WriterFilter, PageInfo } from "../shared/index";

@Component({
    moduleId: module.id,
    selector: "writer-list",
    templateUrl: "writer-list.component.html",
    styleUrls: ["../app.component.css"]
})

export class WriterListComponent implements OnInit {
    writers: Writer[];
    errorMessage: string;
    writerFilter: WriterFilter;
    pageInfo: PageInfo = new PageInfo(0, 0, 0, 0);

    p: number = 1;


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
        this.pageInfo.pageNumber = 1;
        console.log("+++ " + this.pageInfo.pageNumber);
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
/*
    private getWritersOld() {
        let fl =this.writerFilter
        this.service.getWriters(fl.country, fl.writer).subscribe(result => {
            this.writers = result;
        });
    }*/

    private getWriters() {
        let fl =this.writerFilter
        this.service.getWriters(fl.country, fl.writer).subscribe(result => {
            this.writers = result.writers;
            this.pageInfo = result.pageInfo;
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