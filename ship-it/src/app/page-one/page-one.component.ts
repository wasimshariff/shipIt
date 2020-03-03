import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppService} from '../service/app.service';
import {FormGroup} from '@angular/forms';
import {SelectOption} from '../model/app.models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  students: Observable<any>;

  formGroup: FormGroup;

  heightOptions: SelectOption[] = [
    {value: '83', viewValue: '6 feet 11 inches'},
    {value: '82', viewValue: '6 feet 10 inches'},
    {value: '81', viewValue: '6 feet 9 inches'},
    {value: '80', viewValue: '6 feet 8 inches'},
    {value: '79', viewValue: '6 feet 7 inches'},
    {value: '78', viewValue: '6 feet 6 inches'},
    {value: '77', viewValue: '6 feet 5 inches'},
    {value: '76', viewValue: '6 feet 4 inches'},
    {value: '75', viewValue: '6 feet 3 inches'},
    {value: '74', viewValue: '6 feet 2 inches'},
    {value: '73', viewValue: '6 feet 1 inches'},
    {value: '72', viewValue: '6 feet'},
    {value: '71', viewValue: '5 feet 11 inches'},
    {value: '70', viewValue: '5 feet 10 inches'},
    {value: '69', viewValue: '5 feet 9 inches'},
    {value: '68', viewValue: '5 feet 8 inches'},
    {value: '67', viewValue: '5 feet 7 inches'},
    {value: '66', viewValue: '5 feet 6 inches'},
    {value: '65', viewValue: '5 feet 5 inches'},
    {value: '64', viewValue: '5 feet 4 inches'},
    {value: '63', viewValue: '5 feet 3 inches'},
    {value: '62', viewValue: '5 feet 2 inches'},
    {value: '61', viewValue: '5 feet 1 inches'},
    {value: '60', viewValue: '5 feet'},
    {value: '59', viewValue: '4 feet 11 inches'},
    {value: '58', viewValue: '4 feet 10 inches'},
    {value: '57', viewValue: '4 feet 9 inches'},
    {value: '56', viewValue: '4 feet 8 inches'},
    {value: '55', viewValue: '4 feet 7 inches'},
    {value: '54', viewValue: '4 feet 6 inches'},
    {value: '53', viewValue: '4 feet 5 inches'}
  ];

  gender: SelectOption[] = [
    {value: 'M', viewValue: 'Male'},
    {value: 'F', viewValue: 'Female'}
  ];

  constructor(private htpClient: HttpClient, private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.formGroup = this.appService.formGroup;
    this.students = this.htpClient.get('/api');
  }

  goToNextPage() {
    this.calculateBMI();
    console.log(JSON.stringify(this.formGroup.value));
    this.router.navigate(['/pageTwo']);
  }

  goToPreviousPage() {
    console.log(JSON.stringify(this.formGroup.value));
    this.router.navigate(['/welcome']);
  }

  calculateBMI() {
    const height = this.formGroup.controls.height.value;
    const weight = this.formGroup.controls.weight.value;
    const bmi =  ( 703 * weight) / (height * height);
    console.log(Math.round(bmi));
    this.formGroup.controls.bmi.setValue(Math.round(bmi));
  }

}
