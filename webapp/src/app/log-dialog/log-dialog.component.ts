import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-log-dialog',
  templateUrl: './log-dialog.component.html',
  styleUrls: ['./log-dialog.component.scss']
})
export class LogDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
  }

}
