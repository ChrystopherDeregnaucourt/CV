import { Component, OnInit, AfterViewInit, HostListener, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory } from '../../models/cv.models';
import { CvDataService } from '../../services/cv-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skillCategories: SkillCategory[] = [];
  animatedSkills = new Set<string>();

  @ViewChildren('skillLevel') skillLevelElements!: QueryList<ElementRef>;

  constructor(private cvDataService: CvDataService) {}

  ngOnInit(): void {
    this.skillCategories = this.cvDataService.getSkillCategories();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.animateVisibleSkills(), 100);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.animateVisibleSkills();
  }

  private animateVisibleSkills(): void {
    this.skillLevelElements?.forEach((el: ElementRef) => {
      if (this.isInViewport(el.nativeElement)) {
        const skillName = el.nativeElement.getAttribute('data-skill');
        if (!this.animatedSkills.has(skillName)) {
          this.animatedSkills.add(skillName);
        }
      }
    });
  }

  private isInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  isAnimated(skillName: string): boolean {
    return this.animatedSkills.has(skillName);
  }

  getSkillId(categoryName: string, skillName: string): string {
    return `${categoryName}-${skillName}`;
  }
}
