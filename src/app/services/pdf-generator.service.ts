import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { CvDataService } from './cv-data.service';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  constructor(private cvDataService: CvDataService) {}

  generatePdf(): void {
    const doc = new jsPDF();
    const profile = this.cvDataService.getProfile();
    const experiences = this.cvDataService.getExperiences();
    const educations = this.cvDataService.getEducation();
    const skillCategories = this.cvDataService.getSkillCategories();
    const languages = this.cvDataService.getLanguages();

    let yPos = 20;
    const marginLeft = 20;
    const pageWidth = 210;
    const contentWidth = pageWidth - 2 * marginLeft;

    // Fonction pour ajouter une nouvelle page si nécessaire
    const checkPageBreak = (requiredSpace: number): void => {
      if (yPos + requiredSpace > 280) {
        doc.addPage();
        yPos = 20;
      }
    };

    // Fonction pour wrapper le texte
    const addWrappedText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number): number => {
      const lines = doc.splitTextToSize(text, maxWidth);
      lines.forEach((line: string) => {
        checkPageBreak(lineHeight);
        doc.text(line, x, yPos);
        yPos += lineHeight;
      });
      return yPos;
    };

    // ========== EN-TÊTE ==========
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text(profile.name, marginLeft, yPos);
    yPos += 10;

    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(52, 152, 219); // Couleur bleue
    doc.text(profile.title, marginLeft, yPos);
    yPos += 10;

    // Informations de contact
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(`Email: ${profile.contact.email}`, marginLeft, yPos);
    yPos += 5;
    doc.text(`Téléphone: ${profile.contact.phone}`, marginLeft, yPos);
    yPos += 5;
    doc.text(`Adresse: ${profile.contact.location}`, marginLeft, yPos);
    yPos += 10;

    // Ligne de séparation
    doc.setDrawColor(52, 152, 219);
    doc.setLineWidth(0.5);
    doc.line(marginLeft, yPos, pageWidth - marginLeft, yPos);
    yPos += 10;

    // ========== À PROPOS ==========
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(44, 62, 80);
    doc.text('À PROPOS', marginLeft, yPos);
    yPos += 8;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    addWrappedText(profile.about, marginLeft, yPos, contentWidth, 5);
    yPos += 5;

    // ========== EXPÉRIENCES ==========
    checkPageBreak(20);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(44, 62, 80);
    doc.text('EXPÉRIENCE PROFESSIONNELLE', marginLeft, yPos);
    yPos += 8;

    experiences.forEach((exp) => {
      checkPageBreak(30);
      
      // Période et type de contrat
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(52, 152, 219);
      doc.text(`${exp.period} - ${exp.contractType}`, marginLeft, yPos);
      yPos += 5;

      // Titre du poste
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text(exp.title, marginLeft, yPos);
      yPos += 5;

      // Entreprise et lieu
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.text(`${exp.company}, ${exp.location}`, marginLeft, yPos);
      yPos += 5;

      // Description
      doc.setFont('helvetica', 'normal');
      addWrappedText(exp.description, marginLeft, yPos, contentWidth, 5);

      // Tâches principales (max 3 pour le PDF)
      const tasksToShow = exp.tasks.slice(0, 3);
      tasksToShow.forEach((task) => {
        checkPageBreak(6);
        doc.text(`• ${task}`, marginLeft + 5, yPos);
        yPos += 5;
      });

      // Compétences techniques (en ligne)
      const skillsText = exp.skills.map(s => s.name).join(', ');
      doc.setFontSize(9);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(100, 100, 100);
      addWrappedText(`Technologies: ${skillsText}`, marginLeft, yPos, contentWidth, 4);
      doc.setTextColor(0, 0, 0);
      yPos += 5;
    });

    // ========== FORMATIONS ==========
    checkPageBreak(20);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(44, 62, 80);
    doc.text('FORMATIONS', marginLeft, yPos);
    yPos += 8;

    educations.forEach((edu) => {
      checkPageBreak(15);
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(52, 152, 219);
      doc.text(edu.year, marginLeft, yPos);
      yPos += 5;

      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text(edu.title, marginLeft, yPos);
      yPos += 5;

      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.text(edu.institution, marginLeft, yPos);
      yPos += 7;
    });

    // ========== COMPÉTENCES ==========
    checkPageBreak(20);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(44, 62, 80);
    doc.text('COMPÉTENCES TECHNIQUES', marginLeft, yPos);
    yPos += 8;

    skillCategories.forEach((category) => {
      checkPageBreak(10);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text(category.name + ':', marginLeft, yPos);
      yPos += 5;

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      const skillsList = category.skills
        .sort((a, b) => b.level - a.level)
        .map(s => s.name)
        .join(', ');
      addWrappedText(skillsList, marginLeft + 5, yPos, contentWidth - 5, 5);
      yPos += 3;
    });

    // ========== LANGUES ==========
    checkPageBreak(15);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(44, 62, 80);
    doc.text('LANGUES', marginLeft, yPos);
    yPos += 8;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    languages.forEach((lang) => {
      doc.text(`${lang.name}: ${lang.description}`, marginLeft, yPos);
      yPos += 5;
    });

    // Télécharger le PDF
    doc.save('CV_Chrystopher_Deregnaucourt.pdf');
  }
}
