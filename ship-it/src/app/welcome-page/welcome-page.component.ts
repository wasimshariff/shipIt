import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from '../service/app.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(private router: Router, private appService: AppService) { }

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.appService.formGroup;

  }

  goToNextPage() {
    this.router.navigate(['/pageOne']);
  }
}
