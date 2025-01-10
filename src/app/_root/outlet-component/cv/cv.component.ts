import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CVComponent implements OnInit {
  public currentDate!: string;

  ngOnInit() {
    this.updateDate();
  }

  updateDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.currentDate = `${day} ${monthNames[month]}`;
  }
}
