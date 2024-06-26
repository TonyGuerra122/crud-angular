import { Component, Inject, OnInit } from '@angular/core';
import { PeriodicElement } from '../../views/home/home.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrl: './element-dialog.component.scss',
})
export class ElementDialogComponent implements OnInit{
  element!: PeriodicElement;
  isChange!: boolean;

  constructor(
    public dialogRef: MatDialogRef<ElementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement
  ) {}


  ngOnInit(): void {
    this.isChange = this.data.position !== null;
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
