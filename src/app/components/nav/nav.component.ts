import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() activeSection = 'about';
  @Output() navigate = new EventEmitter<string>();

  navItems: NavItem[] = [
    { id: 'about', label: 'À propos' },
    { id: 'experience', label: 'Expériences' },
    { id: 'education', label: 'Formations' },
    { id: 'skills', label: 'Compétences' },
    { id: 'languages', label: 'Langues' }
  ];

  onNavClick(event: Event, sectionId: string): void {
    event.preventDefault();
    this.navigate.emit(sectionId);
  }
}
