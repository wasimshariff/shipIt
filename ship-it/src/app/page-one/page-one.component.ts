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
    {value: '180', viewValue: '6 feet'},
    {value: '179', viewValue: '5 feet 11 inches'},
    {value: '178', viewValue: '5 feet 10 inches'},
    {value: '177', viewValue: '5 feet 9 inches'},
    {value: '176', viewValue: '5 feet 8 inches'},
    {value: '175', viewValue: '5 feet 7 inches'},
    {value: '174', viewValue: '5 feet 6 inches'},
    {value: '173', viewValue: '5 feet 5 inches'},
    {value: '172', viewValue: '5 feet 4 inches'},
    {value: '171', viewValue: '5 feet 3 inches'},
    {value: '170', viewValue: '5 feet 2 inches'}
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
    console.log(JSON.stringify(this.formGroup.value));
    this.router.navigate(['/pageTwo']);
  }

}
