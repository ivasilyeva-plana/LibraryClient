import { Component, OnInit } from "@angular/core";
import {Router } from "@angular/router";
import { ReportService, Report, BookFilter } from "../../shared/index";

@Component({
    moduleId: module.id,
    selector: "report-genre",
    templateUrl: "report-genre.component.html",
    styleUrls: ["../../../../node_modules/bootstrap/css/bootstrap.css","../../app.component.css"]
})

export class ReportGenreComponent implements OnInit {
    report: Report[];

    constructor(private service: ReportService,
                private router: Router) { }

    ngOnInit() {
        this.getReport()
    }

    public getReport() {
                this.service.getReport(3).subscribe(result => {
                    this.report = result;
                });
            }
    
    public books(r: Report) {
                let filter = new BookFilter("", "", r.str,"");
                this.router.navigate(["books", filter]);
            }

}
