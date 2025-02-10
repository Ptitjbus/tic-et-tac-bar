// server/api/carte.js
export default defineEventHandler((event) => {
  // URL du fichier PDF dans Vercel Blob
  const blobUrl = 'https://saearo5tshjpghmn.public.blob.vercel-storage.com/cartelyon6.pdf';
  sendRedirect(event, blobUrl, 302);
});
