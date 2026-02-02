import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/cv.models';
import { CvDataService } from '../../services/cv-data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private cvDataService: CvDataService) {}

  ngOnInit(): void {
    this.experiences = this.cvDataService.getExperiences();
  }
}
