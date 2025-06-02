import jwt from 'jsonwebtoken';
import config from '../config'; // Make sure config has proper types

// Correct implementation
export const generateToken = (id: string) => {
  return jwt.sign(
    { id },
    config.jwtSecret as string, // Explicitly type as string
    {
      expiresIn: '1h' // or use number in seconds (3600)
    }
  );
};