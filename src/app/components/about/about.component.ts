import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../models/cv.models';
import { CvDataService } from '../../services/cv-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about = '';

  constructor(private cvDataService: CvDataService) {}

  ngOnInit(): void {
    this.about = this.cvDataService.getProfile().about;
  }
}
