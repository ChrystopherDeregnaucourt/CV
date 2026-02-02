import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../models/cv.models';
import { CvDataService } from '../../services/cv-data.service';
import { PdfGeneratorService } from '../../services/pdf-generator.service';
import { PdfVisualService } from '../../services/pdf-visual.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profile!: Profile;

  constructor(
    private cvDataService: CvDataService,
    private pdfGeneratorService: PdfGeneratorService,
    private pdfVisualService: PdfVisualService
  ) {}

  ngOnInit(): void {
    this.profile = this.cvDataService.getProfile();
  }

  downloadPdfAts(): void {
    this.pdfGeneratorService.generatePdf();
  }

  downloadPdfVisual(): void {
    this.pdfVisualService.generateVisualPdf();
  }
}
