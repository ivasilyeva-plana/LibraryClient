import { Component, OnInit } from "@angular/core";
import {Router } from "@angular/router";
import { ReportService, Report, WriterFilter } from "../../shared/index";

@Component({
    moduleId: module.id,
    selector: "report-country",
    templateUrl: "report-country.component.html",
    styleUrls: ["../../app.component.css"]
})

export class ReportCountryComponent implements OnInit {
    report: Report[];
    
        constructor(private service: ReportService,
                    private router: Router) { }
    
        ngOnInit() {
            this.getReport()
        }
    
        public getReport() {
                    this.service.getReport(2).subscribe(result => {
                        this.report = result;
                    });
                }
        
        public writers(r: Report) {
                    let filter = new WriterFilter(r.str, "");
                    this.router.navigate(["writers", filter]);
                }
    
    }