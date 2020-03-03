import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../service/app.service';
import {Form, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {SelectOption} from '../model/app.models';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  formGroup: FormGroup;

  condition: string[] = [];

  tobaccoUsageOptions: SelectOption[] = [
    {value: 'D4', viewValue: 'None in the Last 4 Years'},
    {value: 'D3', viewValue: 'None in the Last 3 Years'},
    {value: 'D2', viewValue: 'None in the Last 2 Years'},
    {value: 'D1', viewValue: 'None in the Last Year'},
    {value: 'MT24', viewValue: 'More than 24 in the Last Year'},
    {value: 'LT24', viewValue: 'Less than 24 in the Last Year'},
    {value: 'VAPE', viewValue: 'Vape or E-Cigarette'},
    {value: 'CIGAR', viewValue: 'Cigar use in the Last Year'},
    {value: 'CHEW', viewValue: 'Chewing Tobacco, Nicotine replacement'},
    {value: 'MRJUNA', viewValue: 'Marijuana use, 2 or fewer times per month'},
    {value: 'MRJUNA2', viewValue: 'Marijuana use, more than 2 times per month'}
  ];

  constructor(private htpClient: HttpClient, private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.formGroup = this.appService.formGroup;
  }

  goToNextPage() {
    this.calculateCholesterolRatio();
    console.log(JSON.stringify(this.formGroup.value));
    this.router.navigate(['/pageThree']);

  }

  private calculateCholesterolRatio() {
    const cholestoralReadings: FormGroup = this.formGroup.controls.cholestoralReadings as FormGroup;
    const hdl = cholestoralReadings.controls.hdl.value;
    const ldl = cholestoralReadings.controls.ldl.value;
    const ratio =  hdl/ldl;
    console.log(Math.round(ratio));
    cholestoralReadings.controls.ratio.setValue(Math.round(ratio));
  }

  goToPreviousPage() {
    console.log(JSON.stringify(this.formGroup.value));
    this.router.navigate(['/pageOne']);
  }

  selectCondition(c: string) {
    const index = this.condition.indexOf(c);
    if (index > -1) {
      this.condition.splice(index, 1);
    } else {
      this.condition.push(c);
    }
  }

  isConditionSelected(c): boolean {
    return this.condition.includes(c);
  }

  getActiveClass(c) {
    const badgeClass = {
      'badge-active': this.isConditionSelected(c),
      'badge-inactive': !this.isConditionSelected(c)
    };
    return badgeClass;
  }
}
