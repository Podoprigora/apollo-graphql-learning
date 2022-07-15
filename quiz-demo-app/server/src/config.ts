import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(__dirname, './.env'),
});

export const config = Object.freeze({
  port: process.env.PORT,
  apiBaseUrl: process.env.API_BASE_URL,
});
