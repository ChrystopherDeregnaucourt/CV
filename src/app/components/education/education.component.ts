import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education } from '../../models/cv.models';
import { CvDataService } from '../../services/cv-data.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educations: Education[] = [];

  constructor(private cvDataService: CvDataService) {}

  ngOnInit(): void {
    this.educations = this.cvDataService.getEducation();
  }
}
