import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../service/app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private htpClient: HttpClient, private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.formGroup = this.appService.formGroup;
  }

  goToNextPage() {
    console.log(JSON.stringify(this.formGroup.value));
  }



  goToPreviousPage() {
    console.log(JSON.stringify(this.formGroup.value));
    this.router.navigate(['/pageTwo']);
  }
}
