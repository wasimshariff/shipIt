import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  students: Observable<any>;
  constructor(private htpClient: HttpClient) { }

  ngOnInit() {

    this.students = this.htpClient.get('/api');
  }

}
