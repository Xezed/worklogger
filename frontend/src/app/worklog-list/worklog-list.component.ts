import {Component, OnInit} from '@angular/core';
import {EntriesService} from "../services/entries.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-worklog-list',
  templateUrl: './worklog-list.component.html',
  styleUrls: ['./worklog-list.component.css']
})
export class WorklogListComponent implements OnInit {
  entries: any[];
  entryForm: FormGroup;

  constructor(private fb: FormBuilder, private entriesService: EntriesService) { }

  ngOnInit() {
    this.createForm();
    this.entriesService.getEntries()
      .subscribe(entries => this.entries = entries);
  }

  createForm() {
    this.entryForm = this.fb.group({
      duration: ['', [Validators.pattern(/^(0[0-9]|1[0-9]|2[0-4]):[0-5]?[0-9]:[0-5]?[0-9]/)]],
      project: ['', Validators.required],
      remarks: [''],
      date: ['', Validators.required],
    });
  }

  onCreate() {
    this.entriesService.onCreate(this.entryForm.value);
  }
}
