import { Component, OnInit } from '@angular/core';

import {RetrieveEntriesService} from '../../services/retrieve-entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entryList: Array <Object>;

  constructor(private entryService: RetrieveEntriesService) { }

  ngOnInit() {
    this.entryService.getEntries()
      .then((result) => this.entryList =result);
  }

}
