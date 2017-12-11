import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EntriesService} from "../services/entries.service";

@Component({
  selector: 'app-worklog-detail',
  templateUrl: './worklog-detail.component.html',
  styleUrls: ['./worklog-detail.component.css']
})
export class WorklogDetailComponent implements OnInit {
  @Input() entry: JSON;
  @Output() deleted: EventEmitter<any> = new EventEmitter();
  entryForm: FormGroup;
  logDate;

  constructor(private fb: FormBuilder, private entriesService: EntriesService) {
  }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.logDate = this.entry['date'].split('-');
    this.entryForm = this.fb.group({
      duration: [this.entry['duration'], [Validators.pattern(/^(0[0-9]|1[0-9]|2[0-4]):[0-5]?[0-9]:[0-5]?[0-9]/)]],
      project: [this.entry['project'], Validators.required],
      remarks: [this.entry['remarks']],
      date:  [{'year': +this.logDate[0],
              'month': +this.logDate[1],
                'day': +this.logDate[2]}, Validators.required],
      lateLog: [{value: this.entry['lateLog'], disabled: true}]
    });
  }

  onUpdate() {
    this.entriesService.onUpdate(this.entryForm.value, this.entry['id']).subscribe(
      updatedPost => {
        console.log(updatedPost);
      }
    );
  }

  onDelete() {
    this.entriesService.onDelete(this.entry['id']).subscribe(
      deletedPost => {
          this.deleted.emit(this.entry);
        }
    );
  }
}
