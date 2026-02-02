import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language } from '../../models/cv.models';
import { CvDataService } from '../../services/cv-data.service';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  languages: Language[] = [];

  constructor(private cvDataService: CvDataService) {}

  ngOnInit(): void {
    this.languages = this.cvDataService.getLanguages();
  }

  getDots(level: number): boolean[] {
    return Array(5).fill(false).map((_, i) => i < level);
  }
}
