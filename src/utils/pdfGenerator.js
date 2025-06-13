// src/utils/pdfGenerator.js
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async () => {
  try {
    const element = document.getElementById('resume');
    if (!element) {
      console.error('Resume element not found');
      return;
    }

    // Store original styles
    const originalStyles = {
      position: element.style.position,
      visibility: element.style.visibility,
      height: element.style.height,
      width: element.style.width,
      left: element.style.left,
      top: element.style.top,
    };

    // Make element visible but off-screen
    element.style.position = 'absolute';
    element.style.visibility = 'visible';
    element.style.height = 'auto';
    element.style.width = '1000px';
    element.style.left = '-10000px';
    element.style.top = '0';

    // Wait for fonts and images to load
    await document.fonts.ready;
    await new Promise(resolve => setTimeout(resolve, 500));

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: true,
      backgroundColor: '#ffffff',
      allowTaint: true,
      scrollX: 0,
      scrollY: 0,
    });

    // Restore original styles
    element.style.position = originalStyles.position;
    element.style.visibility = originalStyles.visibility;
    element.style.height = originalStyles.height;
    element.style.width = originalStyles.width;
    element.style.left = originalStyles.left;
    element.style.top = originalStyles.top;

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('Melese_Abrham_Resume.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};