import React from 'react';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="container py-10 flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link href="/">
        <a className="cyber-button">Return Home</a>
      </Link>
    </div>
  );
}
