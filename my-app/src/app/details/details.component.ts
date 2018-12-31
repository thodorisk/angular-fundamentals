import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Detail } from './detail';
import { DetailsService } from '../details.service';
import {StatusTypes} from './detail'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: []
})

export class DetailsComponent implements OnInit {

details: Detail[];

  constructor(private detailsService : DetailsService) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    this.detailsService.getDetails()
      .subscribe(details => {
        this.details = details;
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