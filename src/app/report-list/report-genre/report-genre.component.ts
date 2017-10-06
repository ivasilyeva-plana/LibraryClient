import { Component, OnInit } from "@angular/core";
import {Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "report-genre",
    templateUrl: "report-genre.component.html",
    styleUrls: ["../../../../node_modules/bootstrap/css/bootstrap.css","../../app.component.css"]
})

export class ReportGenreComponent implements OnInit {


    constructor(private router: Router) { }

    ngOnInit() {

    }
}
