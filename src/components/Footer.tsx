
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy;{(new Date()).getFullYear()} <a 
                href="https://nat.com.ng" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Nat Okpe
              </a> | All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link 
              to="/terms" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link 
              to="/privacy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/eula" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              EULA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
