import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {durationValidator} from "./duration.validation";

@Component({
  selector: 'app-worklog-detail',
  templateUrl: './worklog-detail.component.html',
  styleUrls: ['./worklog-detail.component.css']
})
export class WorklogDetailComponent implements OnInit {
  @Input() entry: JSON;
  entryForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    console.log(this.entry)
    this.createForm()
  }

  createForm() {
    this.entryForm = this.fb.group({
      duration: [this.entry['duration'], [Validators.pattern(/^(0[0-9]|1[0-9]|2[0-4]):[0-5]?[0-9]:[0-5]?[0-9]/)]],
      project: [this.entry['project'], Validators.required],
      remarks: [this.entry['remarks']],
      // date: [this.entry.get('date'), Validators.required],
      lateLog: [this.entry['lateLog']]
    });
  }

  onSubmit() {
    console.log(this.entryForm)
  }
}
