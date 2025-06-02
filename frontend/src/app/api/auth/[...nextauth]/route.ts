import { NextResponse } from 'next/server';
import { api } from '@/lib/api';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    
    // Forward to the appropriate backend endpoint
    const pathname = new URL(request.url).pathname;
    const endpoint = pathname.replace('/api/auth', ''); // Remove our frontend prefix
    
    const response = await api.post(endpoint, { email, password });
    return NextResponse.json(response.data);
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || 'Authentication failed';
    
    return NextResponse.json(
      { error: message },
      { status }
    );
  }
}