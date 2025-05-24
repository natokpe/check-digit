
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
          Contact Us
        </h1>
        
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              We'd love to hear from you! Get in touch with us for any questions, suggestions, or feedback about our tools.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> support@webtools.com
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Website:</strong> <a href="https://tools.nat.com.ng" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">tools.nat.com.ng</a>
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Support</h3>
                <p className="text-muted-foreground mb-4">
                  For technical support or bug reports, please include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Description of the issue</li>
                  <li>Steps to reproduce</li>
                  <li>Browser and version</li>
                  <li>Any error messages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
