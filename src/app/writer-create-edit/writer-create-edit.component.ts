import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Writer, WriterService } from "../shared/index";

@Component({
    moduleId: module.id,
    selector: "writer-create-edit",
    templateUrl: "writer-create-edit.component.html",
    styleUrls: ["../app.component.css"]
})
export class WriterCreateEditComponent implements OnInit {
    currentWriter: Writer;
    errorMessage: string;
    writerForm: FormGroup;

    constructor(private service: WriterService,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.buildForm();
        this.getWriterFromRoute();
    }

    public checkError(element: string, errorType: string) {
        return this.writerForm.get(element).hasError(errorType) &&
            this.writerForm.get(element).touched
    }

    public onSubmit(writerForm: FormGroup) {
        this.currentWriter.name = writerForm.value.name;
        this.currentWriter.country = writerForm.value.country;

        if (this.currentWriter.id) {
            this.service.updateWriter(this.currentWriter)
                .subscribe(
                () => this.goBack(),
                error => this.errorMessage = error
                );
        } else {
            this.service.addWriter(this.currentWriter)
                .subscribe(
                () => this.goBack(),
                error => this.errorMessage = error
                );
        }
    }

    public goBack() {
        this.router.navigate(["/writers"]);
    }

    private getWriterFromRoute() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = params["id"];

            if (id) {
                this.service.getWriter(id).subscribe(
                    writer => {
                        this.currentWriter = writer;
                        this.writerForm.patchValue(this.currentWriter);
                    },
                    error => this.errorMessage = error
                );
            }
            else {
                this.currentWriter = new Writer(null, null, null);
                this.writerForm.patchValue(this.currentWriter);
            }
        });
    }

    private buildForm() {
        this.writerForm = this.fb.group({
            name: ["", Validators.required],
            country: ["", Validators.required]
        });
    }
}