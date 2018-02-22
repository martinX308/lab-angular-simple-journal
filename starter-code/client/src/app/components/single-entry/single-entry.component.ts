import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {RetrieveEntriesService} from '../../services/retrieve-entries.service';


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  singleEntry:Object;
  entryId:string;

  constructor(private entryService: RetrieveEntriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.entryId = params['id']);

    this.entryService.getSingleEntry(this.entryId)
    .then((result) => this.singleEntry =result);
  }

}

