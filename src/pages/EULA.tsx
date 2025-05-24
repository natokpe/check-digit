
import React from 'react';

const EULA = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
          End User License Agreement (EULA)
        </h1>
        
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-sm text-muted-foreground mb-6">
              Last updated: December 2024
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">1. License Grant</h2>
            <p className="text-muted-foreground mb-6">
              Subject to the terms of this EULA, Web Tools grants you a limited, non-exclusive, non-transferable license to use our web-based tools for personal and commercial purposes.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">2. Permitted Uses</h2>
            <p className="text-muted-foreground mb-4">
              You are permitted to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-6">
              <li>Use the tools for check digit computation and verification</li>
              <li>Access the tools from multiple devices</li>
              <li>Use the results in your projects and applications</li>
              <li>Share links to our tools with others</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">3. Restrictions</h2>
            <p className="text-muted-foreground mb-4">
              You may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-6">
              <li>Reverse engineer, decompile, or disassemble the tools</li>
              <li>Attempt to extract the source code</li>
              <li>Create derivative works based on the tools</li>
              <li>Use the tools in a way that could damage, disable, or impair our services</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">
              The tools, including their design, functionality, and underlying algorithms implementation, are owned by Web Tools and protected by copyright and other intellectual property laws.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground mb-6">
              The tools are provided "AS IS" without warranty of any kind. We disclaim all warranties, whether express, implied, or statutory, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              In no event shall Web Tools be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or relating to your use of the tools.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p className="text-muted-foreground mb-6">
              This license is effective until terminated. Your rights under this license will terminate automatically without notice if you fail to comply with any terms of this EULA.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              This EULA shall be governed by and construed in accordance with the laws of the jurisdiction where Web Tools operates, without regard to conflict of law principles.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about this EULA, please contact us through our contact page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EULA;
