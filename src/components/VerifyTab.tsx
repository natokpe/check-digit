
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { verifyCheckDigit } from "@/utils/checkDigitAlgorithms";

interface VerifyTabProps {
  algorithm: 'luhn' | 'damm' | 'verhoeff';
  inputValue: string;
  onInputChange: (value: string) => void;
}

const VerifyTab = ({ algorithm, inputValue, onInputChange }: VerifyTabProps) => {
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    if (inputValue && /^\d+$/.test(inputValue) && inputValue.length > 1) {
      const valid = verifyCheckDigit(inputValue, algorithm);
      setIsValid(valid);
    } else {
      setIsValid(null);
    }
  }, [inputValue, algorithm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    onInputChange(value);
  };

  const clearInput = () => {
    onInputChange('');
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <label className="block text-sm font-medium text-foreground mb-2">
          Enter number (with check digit)
        </label>
        <div className="relative">
          <Input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter digits..."
            className="text-lg pr-10"
          />
          {inputValue && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0 h-full px-3"
              onClick={clearInput}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="bg-muted rounded-lg p-4 border border-border">
        <div className="flex items-center space-x-3">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
            isValid === null ? 'bg-muted-foreground/20' :
            isValid ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'
          }`}>
            {isValid === null ? (
              <span className="text-muted-foreground font-bold">?</span>
            ) : isValid ? (
              <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
            ) : (
              <X className="h-5 w-5 text-red-600 dark:text-red-400" />
            )}
          </div>
          <div>
            <p className={`text-lg font-semibold ${
              isValid === null ? 'text-muted-foreground' :
              isValid ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'
            }`}>
              {isValid === null ? '-' : isValid ? 'Valid' : 'Invalid'}
            </p>
            <p className="text-sm text-muted-foreground">
              Check digit verification result
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyTab;
