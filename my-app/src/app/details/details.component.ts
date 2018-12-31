import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Detail } from './detail';
import { StatusTypes } from './detail';

interface formatedDetail {
  fullname: string;
  date: Date;
  age: number;
  status: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: []
})

export class DetailsComponent implements OnInit {

  @Input() details: Detail[];
  @Output() buttonClick = new EventEmitter();
  fullname : string;

  formatedDetails: formatedDetail[];

  constructor() { }

  ngOnInit() {
    this.formatDetails();
  }

  formatDetails(): void {
      this.formatedDetails = this.details.map(obj => {
        return {
          fullname: obj.name + " " + obj.surname,
          date: this.formatDate(obj.date),
          age: this.calculateAge(obj.date),
          status: this.formatStatus(obj.status)
        }
      });
  }

  calculateAge(dateOfBirth: string) : number {
    let todayDate = new Date(),
        todayYear = todayDate.getFullYear(),
        actualDateofBirth = new Date(dateOfBirth).getFullYear(),
        age = todayYear - actualDateofBirth;

    return age;
  };

  formatStatus(statusCode: number) : string {
    let status = StatusTypes[statusCode];

    return status;
  }

  formatDate(plainDate: string) : Date {
    let actualDate = new Date(plainDate);
    
    return actualDate;
  }

  buttonClicked(arr: formatedDetail) {
    this.fullname = arr.fullname;
    this.buttonClick.emit(this.fullname);
  }
}