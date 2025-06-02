import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  mongoUri: string;
  jwtSecret: string;
  jwtExpiresIn: string;
}

const config: Config = {
  port: parseInt(process.env.PORT || '5001'),
 mongoUri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/blog-platform',
  jwtSecret: process.env.JWT_SECRET || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h'
};

export default config;  // Default export