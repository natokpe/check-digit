
import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-sm text-muted-foreground mb-6">
              Last updated: December 2024
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-6">
              Web Tools is designed with privacy in mind. We do not collect, store, or transmit any personal information or data you enter into our tools. All computations are performed locally in your browser.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">2. Local Storage</h2>
            <p className="text-muted-foreground mb-6">
              We use browser local storage to remember your preferences (such as selected algorithms and theme settings) to improve your user experience. This data never leaves your device and can be cleared by you at any time through your browser settings.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
            <p className="text-muted-foreground mb-6">
              We do not use cookies to track users or collect personal information. Any browser storage used is strictly for functionality purposes (remembering your settings).
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p className="text-muted-foreground mb-6">
              Our website does not integrate with third-party analytics, advertising, or tracking services. We do not share any information with third parties because we don't collect any information in the first place.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground mb-6">
              Since all processing happens locally in your browser and we don't store any data on our servers, your information remains completely private and secure. The numbers you enter into our tools are processed entirely within your browser session.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">6. Children's Privacy</h2>
            <p className="text-muted-foreground mb-6">
              Our tools are safe for users of all ages. Since we don't collect any personal information, there are no special considerations for children's privacy beyond the general privacy protections described above.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-6">
              We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated revision date.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this privacy policy, please contact us through our contact page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
