import React from 'react';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
          About Web Tools
        </h1>
        
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Web Tools is a collection of useful, fast, and reliable web-based utilities designed to help you with various computational and verification tasks.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              We believe in providing free, accessible tools that anyone can use without registration or payment. Our goal is to create simple, efficient solutions for common computational needs.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>No registration required</li>
              <li>Completely free to use</li>
              <li>Privacy-focused - no data collection</li>
              <li>Fast and responsive design</li>
              <li>Works on all devices</li>
              <li>Regular updates and improvements</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">Check Digit Tool</h2>
            <p className="text-muted-foreground mb-4">
              Our flagship tool supports three industry-standard check digit algorithms:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-6">
              <li><strong>Luhn Algorithm:</strong> Widely used for credit card numbers</li>
              <li><strong>Damm Algorithm:</strong> Detects all single-digit errors and adjacent transposition errors</li>
              <li><strong>Verhoeff Algorithm:</strong> Advanced algorithm that catches more error types</li>
            </ul>
            
            <p className="text-muted-foreground">
              Whether you're a developer, data analyst, or just need to verify some numbers, our tools are designed to be intuitive and reliable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
