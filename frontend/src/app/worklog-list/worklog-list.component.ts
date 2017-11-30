import { Component } from '@angular/core';
import {EntriesService} from "../services/entries.service";

@Component({
  selector: 'app-worklog-list',
  templateUrl: './worklog-list.component.html',
  styleUrls: ['./worklog-list.component.css']
})
export class WorklogListComponent {

  constructor(private entries: EntriesService) { }

}
