// server/api/carte.js
export default defineEventHandler((event) => {
  // URL du fichier PDF dans Vercel Blob
  const blobUrl = 'https://qhfpnbebjtwsbdpttcxw.supabase.co/storage/v1/object/sign/prod/cartelyon6.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kL2NhcnRlbHlvbjYucGRmIiwiaWF0IjoxNzM5MjA4MTE3LCJleHAiOjQ4OTI4MDgxMTd9.ekWTI6Wlp45h9jIXpRh0wgKhJqCDmrcuEr3dFvrBb2I';
  sendRedirect(event, blobUrl, 302);
});
