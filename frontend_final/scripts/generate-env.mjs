import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const envPath = path.join(projectRoot, '.env');
if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
}

const defaultBackend = 'http://localhost:8010';
const backendBase = process.env.BACKEND_URL || defaultBackend;
const assignmentsApiUrl = process.env.ASSIGNMENTS_API_URL || `${backendBase}/api/assignments`;

const outputPath = path.join(projectRoot, 'src', 'app', 'shared', 'app-env.ts');
const fileContent = `// Fichier généré automatiquement par scripts/generate-env.mjs. Ne pas éditer à la main.

export const APP_ENV = {
  assignmentsApiUrl: ${JSON.stringify(assignmentsApiUrl)},
  backendBaseUrl: ${JSON.stringify(backendBase)},
} as const;
`;

fs.writeFileSync(outputPath, fileContent, { encoding: 'utf8' });
console.log(`[generate-env] Écrit: ${path.relative(projectRoot, outputPath)}`);
console.log(`[generate-env] Backend base URL: ${backendBase}`);
console.log(`[generate-env] Assignments API URL: ${assignmentsApiUrl}`);
