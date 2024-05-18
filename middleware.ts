import type { NextRequest } from 'next/server';
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';

// Middleware function
export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

// Middleware configuration
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
