import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-worklog-detail',
  templateUrl: './worklog-detail.component.html',
  styleUrls: ['./worklog-detail.component.css']
})
export class WorklogDetailComponent implements OnInit {
  @Input() entry: JSON;
  entryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this.entryForm = this.fb.group({
      // duration: [this.entry.get('duration'), Validators.required],
      project: [this.entry, Validators.required],
      remarks: [this.entry],
      // date: [this.entry.get('date'), Validators.required],
      lateLog: [this.entry]
    })
  }

  onSubmit() {
    console.log(this.entryForm)
  }
}
