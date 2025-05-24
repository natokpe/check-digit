import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, X } from "lucide-react";
import { computeCheckDigit } from "@/utils/checkDigitAlgorithms";
import { useToast } from "@/hooks/use-toast";

interface ComputeTabProps {
  algorithm: 'luhn' | 'damm' | 'verhoeff';
  inputValue: string;
  onInputChange: (value: string) => void;
}

const ComputeTab = ({ algorithm, inputValue, onInputChange }: ComputeTabProps) => {
  const [checkDigit, setCheckDigit] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (inputValue && /^\d+$/.test(inputValue)) {
      const digit = computeCheckDigit(inputValue, algorithm);
      setCheckDigit(digit);
    } else {
      setCheckDigit(null);
    }
  }, [inputValue, algorithm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    onInputChange(value);
  };

  const clearInput = () => {
    onInputChange('');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
      duration: 2000,
    });
  };

  const fullNumber = inputValue && checkDigit !== null ? inputValue + checkDigit : '';

  return (
    <div className="space-y-6">
      <div className="relative">
        <label className="block text-sm font-medium text-foreground mb-2">
          Enter number (without check digit)
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

      <div className="space-y-4">
        <div className="bg-muted rounded-lg p-4 border border-border">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">Check Digit</p>
              <p className="text-2xl font-bold text-foreground">
                {checkDigit !== null ? checkDigit : '-'}
              </p>
            </div>
            {checkDigit !== null && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(checkDigit.toString())}
              >
                <Copy className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="bg-muted rounded-lg p-4 border border-border">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-sm text-muted-foreground mb-1">Complete Number</p>
              <p className="text-xl text-foreground font-mono break-all">
                {fullNumber || '-'}
              </p>
            </div>
            {fullNumber && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(fullNumber)}
                className="ml-2 flex-shrink-0"
              >
                <Copy className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputeTab;
