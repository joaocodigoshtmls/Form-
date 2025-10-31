import { createApp } from './app';

const app = createApp();
const port = Number(process.env.PORT || 4100);

app.listen(port, () => {
  console.log(`🚀 API server running on http://localhost:${port}`);
  const origins = process.env.WEB_ORIGINS || process.env.WEB_ORIGIN || 'http://localhost:3000';
  console.log(`📡 CORS origins: ${origins}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🗄️  Database: ${process.env.DATABASE_URL ? '✅ Connected' : '❌ Not configured'}`);
});
