import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComputeTab from "@/components/ComputeTab";
import VerifyTab from "@/components/VerifyTab";

type Algorithm = 'luhn' | 'damm' | 'verhoeff';

const CheckDigitTool = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm>('luhn');
  const [activeTab, setActiveTab] = useState<string>('compute');
  const [computeInput, setComputeInput] = useState<string>('');
  const [verifyInput, setVerifyInput] = useState<string>('');

  // Load saved preferences on component mount
  useEffect(() => {
    const savedAlgorithm = localStorage.getItem('checkDigit_selectedAlgorithm');
    const savedTab = localStorage.getItem('checkDigit_activeTab');
    const savedComputeInput = localStorage.getItem('checkDigit_computeInput');
    const savedVerifyInput = localStorage.getItem('checkDigit_verifyInput');
    
    if (savedAlgorithm && ['luhn', 'damm', 'verhoeff'].includes(savedAlgorithm)) {
      setSelectedAlgorithm(savedAlgorithm as Algorithm);
    }
    if (savedTab && ['compute', 'verify'].includes(savedTab)) {
      setActiveTab(savedTab);
    }
    if (savedComputeInput) setComputeInput(savedComputeInput);
    if (savedVerifyInput) setVerifyInput(savedVerifyInput);
  }, []);

  // Save preferences when they change
  useEffect(() => {
    localStorage.setItem('checkDigit_selectedAlgorithm', selectedAlgorithm);
  }, [selectedAlgorithm]);

  useEffect(() => {
    localStorage.setItem('checkDigit_activeTab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem('checkDigit_computeInput', computeInput);
  }, [computeInput]);

  useEffect(() => {
    localStorage.setItem('checkDigit_verifyInput', verifyInput);
  }, [verifyInput]);

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-lg shadow-lg p-6 border border-border">

          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">
              Algorithm
            </label>
            <Select 
              value={selectedAlgorithm} 
              onValueChange={(value: Algorithm) => setSelectedAlgorithm(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an algorithm" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="luhn">Luhn</SelectItem>
                <SelectItem value="damm">Damm</SelectItem>
                <SelectItem value="verhoeff">Verhoeff</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="compute">Compute</TabsTrigger>
              <TabsTrigger value="verify">Validate</TabsTrigger>
            </TabsList>
            
            <TabsContent value="compute" className="mt-6">
              <ComputeTab 
                algorithm={selectedAlgorithm} 
                inputValue={computeInput}
                onInputChange={setComputeInput}
              />
            </TabsContent>
            
            <TabsContent value="verify" className="mt-6">
              <VerifyTab 
                algorithm={selectedAlgorithm} 
                inputValue={verifyInput}
                onInputChange={setVerifyInput}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CheckDigitTool;
