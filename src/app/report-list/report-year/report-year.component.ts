import { Component, OnInit } from "@angular/core";
import {Router } from "@angular/router";
import { ReportService, Report } from "../../shared/index";

@Component({
    moduleId: module.id,
    selector: "report-year",
    templateUrl: "report-year.component.html",
    styleUrls: ["../../../../node_modules/bootstrap/css/bootstrap.css","../../app.component.css"]
})

export class ReportYearComponent implements OnInit {
    report: Report[];
    bookYear: number = new Date().getFullYear();

    constructor(private service: ReportService,
                private router: Router) { }

    ngOnInit() {
        this.getReport()
    }

    public getReport() {
                this.service.getReport(1, this.bookYear).subscribe(result => {
                    this.report = result;
                });
            }

}
