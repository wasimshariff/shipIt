import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../service/app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.scss']
})
export class PageFourComponent implements OnInit {

  formGroup: FormGroup;

  proceedWithApp = false;

  constructor(private htpClient: HttpClient, private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.formGroup = this.appService.formGroup;
    this.proceedWithApp = false;

    this.formGroup.controls.ssn.valueChanges.subscribe( ssn => {
          this.getSsnRelatedInfo(ssn);
      }
    );
    this.formGroup.controls.license.valueChanges.subscribe( ssn => {
        this.getDriverHistory(ssn);
      }
    );
  }

  private async getSsnRelatedInfo(ssn: number) {
    this.appService.creditHistory = [];
    this.appService.drugHistory = [];
    const creditHistory = await this.appService.getCreditHistory(ssn);
    if (creditHistory) {
      console.log(JSON.stringify(creditHistory));
      this.appService.creditHistory = creditHistory;
    }
    const drugHistory = await this.appService.getDrugHistory(ssn);
    if (drugHistory) {
      console.log(JSON.stringify(drugHistory));
      this.appService.drugHistory = drugHistory;
    }
  }

  private async getDriverHistory(license: string) {
    this.appService.driverHistory = [];
    const driverHistory = await this.appService.getDriverHistory(license);
    if (driverHistory) {
      console.log(JSON.stringify(driverHistory));
      this.appService.driverHistory = driverHistory;
    }
  }
}
