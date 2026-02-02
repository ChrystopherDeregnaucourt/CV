import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../models/cv.models';
import { CvDataService } from '../../services/cv-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profile!: Profile;

  constructor(private cvDataService: CvDataService) {}

  ngOnInit(): void {
    this.profile = this.cvDataService.getProfile();
  }
}
