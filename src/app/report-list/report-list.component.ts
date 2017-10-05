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
    reports: Report[] = [new Report(0, "Количество книг за год по месяцам"),
                         new Report(1, "Количество авторов по странам"),
                         new Report(2, "Количество книг по жанрам")];

    constructor(private router: Router) { }

    ngOnInit() {

    }


}
