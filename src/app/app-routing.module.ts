import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriterListComponent } from "./writer-list/writer-list.component";
import { WriterCreateEditComponent } from "./writer-create-edit/writer-create-edit.component";
import { WriterDeleteComponent } from "./writer-delete/writer-delete.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookCreateEditComponent } from "./book-create-edit/book-create-edit.component";
import { BookDeleteComponent } from "./book-delete/book-delete.component";
import { ReportListComponent } from "./report-list/report-list.component";
import { ReportYearComponent } from "./report-list/report-year/report-year.component";
import { ReportCountryComponent } from "./report-list/report-country/report-country.component";
import { ReportGenreComponent } from "./report-list/report-genre/report-genre.component";

const routes: Routes = [
  {
      path: "",
      redirectTo: "writers",
      pathMatch: "full"
  },
  { path: "writers", component: WriterListComponent },
  { path: "writers/edit/:id", component: WriterCreateEditComponent},
  { path: "writers/create", component: WriterCreateEditComponent},
  { path: "writers/delete/:id", component: WriterDeleteComponent},
  { path: "books", component: BookListComponent },
  { path: "books/edit", component: BookCreateEditComponent},
  { path: "books/create", component: BookCreateEditComponent},
  { path: "books/delete", component: BookDeleteComponent},
  { path: "reports", component: ReportListComponent},
  { path: "reports/1", component: ReportYearComponent},
  { path: "reports/2", component: ReportCountryComponent},
  { path: "reports/3", component: ReportGenreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



