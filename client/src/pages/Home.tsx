import React from 'react';

export default function Home() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-4">Barito Solution</h1>
      <p className="text-xl mb-8">Professional Laptop Repair Services</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="cyber-card">
          <h2 className="text-2xl font-semibold mb-2">Grand Opening</h2>
          <p>Welcome to our new location!</p>
        </div>
        <div className="cyber-card">
          <h2 className="text-2xl font-semibold mb-2">Services</h2>
          <p>We fix hardware and software issues.</p>
        </div>
      </div>
    </div>
  );
}
