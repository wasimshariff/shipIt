import {Injectable} from '@angular/core';
import {ApplicantInfo} from '../model/app.models';
import {FormBuilder, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  _applicantInfo = new ApplicantInfo();

  _form: FormGroup;


  constructor(private fb: FormBuilder) {
    this._form = this.fb.group({
      firstName: [''],
      lastName: [''],
      height: [''],
      weight: [''],
      bmi: [''],
      gender: [''],
      annualIncome: [''],
      coverage: [''],
      dateOfBirth: [''],
      tobaccoUsage: this.fb.group({
        tobaccoIndicator: [false],
        usageDuration: ['']
      }),
      cholestoralReadings: this.fb.group({
        hdl: [''],
        ldl: [''],
        ratio: ['']
      }),
      finance: this.fb.group({
        annualIncome: ['']
      }),
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        zipCode: [''],
      })
    });
  }

  get applicantInfo() {
    return this._applicantInfo;
  }

  get formGroup() {
    return this._form;
  }

}
