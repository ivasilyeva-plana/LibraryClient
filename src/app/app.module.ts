import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule }   from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { WriterListComponent } from "./writer-list/writer-list.component";
import { WriterCreateEditComponent } from "./writer-create-edit/writer-create-edit.component";
import { WriterDeleteComponent } from "./writer-delete/writer-delete.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookCreateEditComponent } from "./book-create-edit/book-create-edit.component";
import { BookDeleteComponent } from "./book-delete/book-delete.component";
import { WriterService, BookService, ReportService } from "./shared/index";
import { ReportListComponent } from "./report-list/report-list.component";
import { ReportYearComponent } from "./report-list/report-year/report-year.component";
import { ReportCountryComponent } from "./report-list/report-country/report-country.component";
import { ReportGenreComponent } from "./report-list/report-genre/report-genre.component";

@NgModule({
  declarations: [
    AppComponent,
    WriterListComponent,
    WriterCreateEditComponent,
    WriterDeleteComponent,
    BookListComponent,
    BookCreateEditComponent,
    BookDeleteComponent,
    ReportListComponent,
    ReportYearComponent,
    ReportCountryComponent,
    ReportGenreComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WriterService, BookService, ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
