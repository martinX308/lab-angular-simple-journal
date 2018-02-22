import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EntryListComponent } from './components/entry-list/entry-list.component';

import {RetrieveEntriesService} from './services/retrieve-entries.service';


const routes: Routes = [
  { path: '',  component: EntryListComponent },
  
 ];


@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RetrieveEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
