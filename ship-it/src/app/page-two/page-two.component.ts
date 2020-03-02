import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../service/app.service';
import {FormGroup} from '@angular/forms';
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
    {value: 'M', viewValue: 'Male'},
    {value: 'F', viewValue: 'Female'}
  ];

  hdl: SelectOption[] = [
    {value: '100', viewValue: '100'},
    {value: '150', viewValue: '150'}
  ];

  ldl: SelectOption[] = [
    {value: '200', viewValue: '200'},
    {value: '250', viewValue: '250'}
  ];

  constructor(private htpClient: HttpClient, private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.formGroup = this.appService.formGroup;
  }

  goToNextPage() {
    console.log(JSON.stringify(this.formGroup.value));
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
