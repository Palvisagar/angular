import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{
  notesForm = {
    notes_category:'',
    notes_topic:''
  }

  constructor() { }

  ngOnInit(): void {
  }
}
