import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";

import { Writer, WriterService } from "../shared/index";

@Component({
    moduleId: module.id,
    selector: "writer-delete",
    templateUrl: "writer-delete.component.html"
})
export class WriterDeleteComponent implements OnInit {

    currentWriter: Writer;
    errorMessage: string;

    constructor(private activatedRoute: ActivatedRoute,
        private router: Router,
        private service: WriterService) { }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.params["id"];
        if (id) {
            this.service.getWriter(id)
                .subscribe(
                writer => this.currentWriter = writer,
                error => this.errorMessage = error
                );
        }
    }

    deleteWriter() {
        this.service.deleteWriter(this.currentWriter)
            .subscribe(
            () => this.goBack(),
            error => this.errorMessage = error
            );
    }

    goBack() {
        this.router.navigate(["/writers"]);
    }

}