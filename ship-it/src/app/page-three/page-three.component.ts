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
    this.getEligibiltyScore();
    this.router.navigate(['/pageFour']);
  }

  goToPreviousPage() {
    console.log(JSON.stringify(this.formGroup.value));
    this.router.navigate(['/pageTwo']);
  }

  private async getEligibiltyScore() {
    const cholestoralReadings: FormGroup = this.formGroup.controls.cholestoralReadings as FormGroup;
    const tobaccoReadings: FormGroup = this.formGroup.controls.tobaccoUsage as FormGroup;
    const bmiScores = await this.appService.getBMIScore(this.formGroup.controls.bmi.value);
    console.log(JSON.stringify(bmiScores));
    const cholScores = await this.appService.getCholestoralScore(cholestoralReadings.controls.ratio.value,
      this.formGroup.controls.gender.value);
    console.log(JSON.stringify(cholScores));
    const tobScores = await this.appService.getTobaccoScore(tobaccoReadings.controls.usageDuration.value);
    console.log(JSON.stringify(tobScores));
    let totalScore = 0;
    if (bmiScores) {
      const bmiScore = bmiScores.Total;
      this.formGroup.controls.bmiScore.setValue(bmiScore);
      totalScore = totalScore + bmiScore;
    }
    if (cholScores) {
      const cholScore = cholScores.Total;
      cholestoralReadings.controls.score.setValue(cholScore);
      totalScore = totalScore + cholScore;
    }
    if (tobScores) {
      const tobScore = tobScores.Total;
      tobaccoReadings.controls.score.setValue(tobScore);
      totalScore = totalScore + tobScore;
    }
    this.formGroup.controls.totalScore.setValue(totalScore);

    const eligibleCoverage = await this.appService.getCoverage(this.formGroup.controls.totalScore.value,
      this.formGroup.controls.annualIncome.value);

    if (eligibleCoverage) {
      this.formGroup.controls.maxEligibleCoverage.setValue(eligibleCoverage.AvailableMaximumCoverage);
    }
  }
}
