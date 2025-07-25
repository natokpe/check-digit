
import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
          Terms and Conditions
        </h1>
        
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-sm text-muted-foreground mb-6">
              Last updated: December 2024
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing and using Web Tools, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily use Web Tools for personal and commercial purposes. This includes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-6">
              <li>Using the tools for computational and verification tasks</li>
              <li>Accessing the tools from any device or location</li>
              <li>Sharing results generated by the tools</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p className="text-muted-foreground mb-6">
              The tools and information on this website are provided on an 'as is' basis. Web Tools makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability of the tools or information.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
            <p className="text-muted-foreground mb-4">
              In no event shall Web Tools be liable for any:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-6">
              <li>Direct, indirect, incidental, or consequential damages</li>
              <li>Loss of data or profits</li>
              <li>Business interruption</li>
              <li>Errors or omissions in the tools or results</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">5. Prohibited Uses</h2>
            <p className="text-muted-foreground mb-4">
              You may not use our tools:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-6">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">6. Revisions</h2>
            <p className="text-muted-foreground mb-6">
              Web Tools may revise these terms of use at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms and Conditions.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms and Conditions, please contact us through our contact page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
