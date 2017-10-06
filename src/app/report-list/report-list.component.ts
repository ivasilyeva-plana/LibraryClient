import { Component, OnInit } from "@angular/core";
import {Router } from "@angular/router";
import { Report } from "../shared/index";

@Component({
    moduleId: module.id,
    selector: "report-list",
    templateUrl: "report-list.component.html",
    styleUrls: ["../../../node_modules/bootstrap/css/bootstrap.css","../app.component.css"]
})

export class ReportListComponent implements OnInit {
    reports: Report[] = [new Report("Количество книг за год по месяцам", 1),
                         new Report("Количество авторов по странам", 2),
                         new Report("Количество книг по жанрам", 3)];

    constructor(private router: Router) { }

    ngOnInit() {

    }

    public viewReport(num: number) {
        this.router.navigate(["reports", num.toString()]);
    }
}
