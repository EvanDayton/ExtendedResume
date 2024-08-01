import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';

// We'll set the worker source in the component that uses this function

export async function extractSources(fileContent) {
  const sources = [];

  if (fileContent.startsWith('data:application/pdf')) {
    const pdfData = atob(fileContent.split(',')[1]);
    const loadingTask = getDocument({data: pdfData});
    const pdf = await loadingTask.promise;

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const text = textContent.items.map(item => item.str).join(' ');

      // Simple regex to find potential citations
      const citationRegex = /\(([^)]+)\s+(\d{4})\)/g;
      let match;
      while ((match = citationRegex.exec(text)) !== null) {
        sources.push(`${match[1]} (${match[2]})`);
      }
    }
  } else if (fileContent.startsWith('data:image')) {
    // For images, we can't extract sources, so we'll return a placeholder
    sources.push('No sources available for image files.');
  } else {
    // For plain text or other formats
    const text = atob(fileContent.split(',')[1]);
    const citationRegex = /\(([^)]+)\s+(\d{4})\)/g;
    let match;
    while ((match = citationRegex.exec(text)) !== null) {
      sources.push(`${match[1]} (${match[2]})`);
    }
  }

  return [...new Set(sources)]; // Remove duplicates
}