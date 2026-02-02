import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { CvDataService } from './cv-data.service';

@Injectable({
  providedIn: 'root'
})
export class PdfVisualService {

  constructor(private cvDataService: CvDataService) {}

  generateVisualPdf(): void {
    const doc = new jsPDF();
    const profile = this.cvDataService.getProfile();
    const experiences = this.cvDataService.getExperiences();
    const educations = this.cvDataService.getEducation();
    const skillCategories = this.cvDataService.getSkillCategories();
    const languages = this.cvDataService.getLanguages();

    let yPos = 15;
    const marginLeft = 15;
    const marginRight = 15;
    const pageWidth = 210;
    const pageHeight = 297;
    const contentWidth = pageWidth - marginLeft - marginRight;

    // Couleurs du thème
    const primaryColor: [number, number, number] = [52, 152, 219];    // Bleu
    const secondaryColor: [number, number, number] = [44, 62, 80];    // Bleu foncé
    const accentColor: [number, number, number] = [46, 204, 113];     // Vert
    const lightGray: [number, number, number] = [236, 240, 241];      // Gris clair
    const darkGray: [number, number, number] = [127, 140, 141];       // Gris foncé

    // Fonction pour vérifier et ajouter une nouvelle page si nécessaire
    const checkPageBreak = (requiredSpace: number): void => {
      if (yPos + requiredSpace > pageHeight - 20) {
        doc.addPage();
        yPos = 20;
      }
    };

    // Fonction pour dessiner un rectangle de section
    const drawSectionHeader = (title: string): void => {
      checkPageBreak(20);
      doc.setFillColor(...primaryColor);
      doc.rect(marginLeft, yPos - 5, contentWidth, 10, 'F');
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text(title.toUpperCase(), marginLeft + 5, yPos + 2);
      yPos += 12;
      doc.setTextColor(0, 0, 0);
    };

    // Fonction pour ajouter du texte avec retour à la ligne
    const addWrappedText = (text: string, x: number, maxWidth: number, fontSize: number, lineHeight: number): void => {
      doc.setFontSize(fontSize);
      // Nettoyer le texte : supprimer les retours à la ligne et normaliser les espaces
      const cleanedText = text.replace(/\s+/g, ' ').trim();
      const lines = doc.splitTextToSize(cleanedText, maxWidth);
      lines.forEach((line: string) => {
        checkPageBreak(lineHeight);
        doc.text(line, x, yPos);
        yPos += lineHeight;
      });
    };

    // ==================== EN-TÊTE ====================
    // Bandeau coloré en haut
    doc.setFillColor(...secondaryColor);
    doc.rect(0, 0, pageWidth, 50, 'F');

    // Nom
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text(profile.name, marginLeft, 20);

    // Titre
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...primaryColor);
    doc.text(profile.title, marginLeft, 30);

    // Contact (sur une ligne sous le titre)
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    const contactLine = `${profile.contact.email}  |  ${profile.contact.phone}  |  ${profile.contact.location}`;
    doc.text(contactLine, marginLeft, 40);

    yPos = 58;
    doc.setTextColor(0, 0, 0);

    // ==================== À PROPOS ====================
    drawSectionHeader('Profil');
    doc.setFont('helvetica', 'normal');
    addWrappedText(profile.about, marginLeft, contentWidth, 10, 5);
    yPos += 5;

    // ==================== EXPÉRIENCES ====================
    drawSectionHeader('Expérience Professionnelle');

    experiences.forEach((exp, index) => {
      // Estimer l'espace nécessaire pour cette expérience
      const estimatedHeight = 40 + (Math.min(exp.tasks.length, 4) * 5);
      checkPageBreak(estimatedHeight);

      // Ligne de séparation entre les expériences (sauf la première)
      if (index > 0) {
        doc.setDrawColor(...lightGray);
        doc.setLineWidth(0.5);
        doc.line(marginLeft, yPos - 3, marginLeft + contentWidth, yPos - 3);
        yPos += 2;
      }

      // Période et type de contrat (à gauche)
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...primaryColor);
      doc.text(`${exp.period}`, marginLeft, yPos);
      
      // Type de contrat (à droite)
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...darkGray);
      doc.text(exp.contractType, pageWidth - marginRight, yPos, { align: 'right' });
      yPos += 5;

      // Titre du poste
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...secondaryColor);
      doc.text(exp.title, marginLeft, yPos);
      yPos += 5;

      // Entreprise et lieu
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(...darkGray);
      doc.text(`${exp.company} - ${exp.location}`, marginLeft, yPos);
      yPos += 6

      // Description courte
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0);
      addWrappedText(exp.description, marginLeft, contentWidth, 9, 4);
      yPos += 2;

      // Tâches principales (max 4)
      const tasksToShow = exp.tasks.slice(0, 4);
      doc.setFontSize(9);
      tasksToShow.forEach((task) => {
        checkPageBreak(5);
        // Puce colorée
        doc.setFillColor(...accentColor);
        doc.circle(marginLeft + 2, yPos - 1.5, 1, 'F');
        
        doc.setTextColor(0, 0, 0);
        const taskLines = doc.splitTextToSize(task, contentWidth - 8);
        taskLines.forEach((line: string, i: number) => {
          doc.text(line, marginLeft + 6, yPos);
          yPos += 4;
          if (i === 0) checkPageBreak(4);
        });
      });

      // Compétences techniques (badges)
      yPos += 2;
      let xPos = marginLeft;
      doc.setFontSize(7);
      
      // Afficher toutes les compétences (sans limite)
      exp.skills.forEach((skill) => {
        const skillText = skill.name;
        const textWidth = doc.getTextWidth(skillText) + 4;
        
        // Nouvelle ligne si dépassement
        if (xPos + textWidth > pageWidth - marginRight) {
          xPos = marginLeft;
          yPos += 5;
          checkPageBreak(5);
        }
        
        // Badge de compétence
        doc.setFillColor(...lightGray);
        doc.roundedRect(xPos, yPos - 3, textWidth, 4.5, 1, 1, 'F');
        doc.setTextColor(...secondaryColor);
        doc.text(skillText, xPos + 2, yPos);
        xPos += textWidth + 2;
      });
      
      yPos += 8;
    });

    // ==================== FORMATIONS ====================
    drawSectionHeader('Formation');

    educations.forEach((edu, index) => {
      checkPageBreak(18);

      if (index > 0) {
        yPos += 3;
      }

      // Année
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...primaryColor);
      doc.text(edu.year, marginLeft, yPos);
      yPos += 5;

      // Titre de la formation
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...secondaryColor);
      doc.text(edu.title, marginLeft, yPos);
      yPos += 5;

      // Institution
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(...darkGray);
      doc.text(edu.institution, marginLeft, yPos);
      yPos += 7;
    });

    // ==================== COMPÉTENCES ====================
    checkPageBreak(60);
    drawSectionHeader('Compétences Techniques');

    // Disposition en colonnes
    const colWidth = contentWidth / 2;
    let col = 0;
    let colYStart = yPos;
    let maxYInRow = yPos;

    skillCategories.forEach((category) => {
      const xOffset = marginLeft + (col * colWidth);
      
      // Nom de la catégorie
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...secondaryColor);
      doc.text(category.name, xOffset, yPos);
      yPos += 5;

      // Compétences avec niveau visuel
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      
      category.skills
        .sort((a, b) => b.level - a.level)
        .slice(0, 6)
        .forEach((skill) => {
          checkPageBreak(6);
          
          // Nom de la compétence
          doc.setTextColor(0, 0, 0);
          doc.text(skill.name, xOffset, yPos);
          
          // Barre de niveau
          const barX = xOffset + colWidth - 35;
          const barWidth = 30;
          const barHeight = 3;
          
          // Fond de la barre
          doc.setFillColor(...lightGray);
          doc.roundedRect(barX, yPos - 2.5, barWidth, barHeight, 1, 1, 'F');
          
          // Remplissage selon le niveau
          const fillWidth = (skill.level / 100) * barWidth;
          doc.setFillColor(...primaryColor);
          doc.roundedRect(barX, yPos - 2.5, fillWidth, barHeight, 1, 1, 'F');
          
          yPos += 5;
        });

      maxYInRow = Math.max(maxYInRow, yPos);
      
      // Alterner les colonnes
      col++;
      if (col >= 2) {
        col = 0;
        yPos = maxYInRow + 5;
        colYStart = yPos;
      } else {
        yPos = colYStart;
      }
    });

    yPos = maxYInRow + 8;

    // ==================== LANGUES ====================
    checkPageBreak(30);
    drawSectionHeader('Langues');

    let langX = marginLeft;
    languages.forEach((lang) => {
      const boxWidth = 45;
      
      if (langX + boxWidth > pageWidth - marginRight) {
        langX = marginLeft;
        yPos += 20;
        checkPageBreak(20);
      }

      // Boîte pour la langue
      doc.setFillColor(...lightGray);
      doc.roundedRect(langX, yPos, boxWidth, 15, 2, 2, 'F');
      
      // Nom de la langue
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...secondaryColor);
      doc.text(lang.name, langX + 3, yPos + 6);
      
      // Niveau
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...darkGray);
      doc.text(lang.description, langX + 3, yPos + 11);

      langX += boxWidth + 5;
    });

    // ==================== PIED DE PAGE ====================
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(...darkGray);
      doc.text(
        `${profile.name} - CV - Page ${i}/${totalPages}`,
        pageWidth / 2,
        pageHeight - 10,
        { align: 'center' }
      );
    }

    // Télécharger
    doc.save('CV_Chrystopher_Deregnaucourt.pdf');
  }
}
