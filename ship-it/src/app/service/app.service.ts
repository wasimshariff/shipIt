import {Injectable} from '@angular/core';
import {ApplicantInfo} from '../model/app.models';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  _applicantInfo = new ApplicantInfo();

  driverHistory: any[] = [];

  drugHistory: any[] = [];
  creditHistory: any[] = [];
  _form: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this._form = this.fb.group({
      firstName: [''],
      lastName: [''],
      height: [''],
      weight: [''],
      bmi: [''],
      gender: ['M'],
      annualIncome: [''],
      coverage: [''],
      maxEligibleCoverage: [''],
      dateOfBirth: [''],
      bmiScore: [''],
      totalScore: [''],
      tobaccoUsage: this.fb.group({
        tobaccoIndicator: [false],
        usageDuration: ['D4'],
        score: ['']
      }),
      cholestoralReadings: this.fb.group({
        hdl: [''],
        ldl: [''],
        ratio: ['3'],
        score: ['']
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
      }),
      ssn: [''],
      license: ['']
    });
  }

  get applicantInfo() {
    return this._applicantInfo;
  }

  get formGroup() {
    return this._form;
  }

  getBMIScore(bodyMassValue: number): Promise<any> {
    return this.httpClient.get(`/api/bmi/${bodyMassValue}`).toPromise();
  }

  getCholestoralScore(cholestoralValue: number, gender: string): Promise<any> {
    return this.httpClient.get(`/api/chol?gender=${gender}&score=${cholestoralValue}`).toPromise();
  }

  getTobaccoScore(tobaccoValue: string): Promise<any> {
    return this.httpClient.get(`/api/tob/${tobaccoValue}`).toPromise();
  }

  getCoverage(totalScore: number, annualIncome: number): Promise<any> {
    return this.httpClient.get(`/api/coverage?score=${totalScore}&annualIncome=${annualIncome}`).toPromise();
  }

  getDriverHistory(license: string): Promise<any> {
    return this.httpClient.get(`/api/driverHistory/${license}`).toPromise();
  }

  getCreditHistory(ssn: number): Promise<any> {
    return this.httpClient.get(`/api/creditHistory/${ssn}`).toPromise();
  }

  getDrugHistory(ssn: number): Promise<any> {
    return this.httpClient.get(`/api/drugHistory/${ssn}`).toPromise();
  }
}
