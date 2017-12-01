import {Component, OnInit} from '@angular/core';
import {EntriesService} from "../services/entries.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-worklog-list',
  templateUrl: './worklog-list.component.html',
  styleUrls: ['./worklog-list.component.css']
})
export class WorklogListComponent implements OnInit {
  entries: any[];

  constructor(private entriesService: EntriesService) { }

  ngOnInit() {
    this.entriesService.getEntries()
      .subscribe(entries => this.entries = entries)
  }
}
