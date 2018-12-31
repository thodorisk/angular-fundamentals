import { Component, Input } from '@angular/core';
import { Detail } from './details/detail';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  details: Detail[];

  constructor(private detailsService : DetailsService){};

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    this.detailsService.getDetails()
      .subscribe(details => {
        this.details = details;
      });
  }

  showFullName(fullname) {
    console.log(fullname);
  }
}
