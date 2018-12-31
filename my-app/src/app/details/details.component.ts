import { Component, OnInit } from '@angular/core';

import { Detail } from './detail';
import { DetailsService } from '../details.service';
import {StatusTypes} from './detail'

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

  details: Detail[];
  formatedDetails: formatedDetail[];

  constructor(private detailsService : DetailsService) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    this.detailsService.getDetails()
      .subscribe(details => {
        this.details = details;
      });

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
}