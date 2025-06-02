import { Request, Response } from 'express';
import User from '../models/User';
import { generateToken } from '../utils/jwt';
import asyncHandler from 'express-async-handler';

// @desc    Register a new user
// @route   POST /api/auth/signup
// @access  Public
export const signup = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    res.status(400);
    throw new Error('Please provide both email and password');
  }

  // Check if user exists (case-insensitive match)
  const userExists = await User.findOne({ 
    email: { $regex: new RegExp(`^${email}$`, 'i') } 
  });
  
  if (userExists) {
    res.status(409); // 409 Conflict for duplicate resources
    throw new Error('User with this email already exists');
  }

  // Create user
  const user = await User.create({ 
    email: email.toLowerCase().trim(), // Ensure consistent formatting
    password
  });

  // Generate token
  const token = generateToken(user._id.toString());

  // Return response without password
  res.status(201).json({
    _id: user._id,
    email: user.email,
    createdAt: user.createdAt,
    token,
    expiresIn: '30d' // Match token expiration
  });
});

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    res.status(400);
    throw new Error('Please provide both email and password');
  }

  // Find user with password (since it's normally excluded)
  const user = await User.findOne({ 
    email: { $regex: new RegExp(`^${email}$`, 'i') } 
  }).select('+password');

  // Check user and password
  if (!user || !(await user.comparePassword(password))) {
    res.status(401);
    throw new Error('Invalid email or password');
  }

  // Generate token
  const token = generateToken(user._id.toString());

  // Return response without password
  res.json({
    _id: user._id,
    email: user.email,
    token,
    expiresIn: '30d' 
  });
});