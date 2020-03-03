import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../service/app.service';
import {Router} from '@angular/router';
import {DriverHistory} from '../model/app.models';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.scss']
})
export class PageFourComponent implements OnInit {

  formGroup: FormGroup;

  proceedWithApp = false;

  authorised = false;

  isDuiFound = false;

  constructor(private htpClient: HttpClient, private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.formGroup = this.appService.formGroup;
    this.proceedWithApp = false;
/*
    this.formGroup.controls.ssn.valueChanges.subscribe( ssn => {
          this.getSsnRelatedInfo(ssn);
      }
    );
    this.formGroup.controls.license.valueChanges.subscribe( ssn => {
        this.getDriverHistory(ssn);
      }
    );*/
  }

  getInfo() {
    this.appService.creditHistory = [];
    this.appService.drugHistory = [];
    this.appService.driverHistory = [];
    this.authorised = ! this.authorised;
    if (this.authorised) {
    this.getDriverHistory(this.formGroup.controls.license.value);
    this.getSsnRelatedInfo(this.formGroup.controls.ssn.value);
    }
  }

  private async getSsnRelatedInfo(ssn: number) {
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
    const driverHistory: DriverHistory[] = await this.appService.getDriverHistory(license);
    if (driverHistory) {
      console.log(JSON.stringify(driverHistory));
      this.appService.driverHistory = driverHistory;
      const intoxicatedDriver = driverHistory.filter(
        driverHistoryObj => driverHistoryObj.ConvictionDescription.indexOf('INTOXICATED') > -1);
      console.log(intoxicatedDriver);
      if (intoxicatedDriver && intoxicatedDriver.length > 0) {
        this.isDuiFound = true;
        this.formGroup.controls.maxEligibleCoverage.setValue(this.appService.eligibleCoverage.AvailableMinimumCoverage);
      } else {
        this.isDuiFound = false;
        this.formGroup.controls.maxEligibleCoverage.setValue(this.appService.eligibleCoverage.AvailableMaximumCoverage);
      }
    }
  }
}
