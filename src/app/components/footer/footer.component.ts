import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvDataService } from '../../services/cv-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  linkedInUrl = '';
  currentYear = new Date().getFullYear();

  constructor(private cvDataService: CvDataService) {}

  ngOnInit(): void {
    this.linkedInUrl = this.cvDataService.getProfile().linkedIn;
  }
}
