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
      padding: element.style.padding,
      backgroundColor: element.style.backgroundColor,
    };

    // A4 dimensions in mm (standard)
    const A4_WIDTH_MM = 210;
    const A4_HEIGHT_MM = 297;
    
    // Calculate pixel equivalents at 96 DPI
    const A4_WIDTH_PX = Math.floor((A4_WIDTH_MM * 96) / 25.4);
    const A4_HEIGHT_PX = Math.floor((A4_HEIGHT_MM * 96) / 25.4);

    // Prepare the element for capture
    element.style.position = 'absolute';
    element.style.visibility = 'visible';
    element.style.width = `${A4_WIDTH_PX}px`;
    element.style.height = 'auto'; // Let content determine height
    element.style.left = '-10000px';
    element.style.top = '0';
    element.style.padding = '20px';
    element.style.backgroundColor = '#ffffff';
    element.style.boxSizing = 'border-box';

    // Wait for layout to stabilize
    await new Promise(resolve => setTimeout(resolve, 500));
    await document.fonts.ready;

    // Capture with high quality
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      allowTaint: true,
      scrollX: 0,
      scrollY: 0,
      windowWidth: A4_WIDTH_PX,
      windowHeight: element.scrollHeight,
    });

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Calculate image dimensions
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = A4_WIDTH_MM;
    const imgHeight = (canvas.height * A4_WIDTH_MM) / canvas.width;

    // Add image to PDF with proper scaling
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

    // Check if content exceeds one page
    if (imgHeight > A4_HEIGHT_MM) {
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, -(A4_HEIGHT_MM), imgWidth, imgHeight);
    }

    // Restore original styles
    Object.assign(element.style, originalStyles);

    // Save the PDF
    pdf.save('Melese_Abrham_Resume.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};