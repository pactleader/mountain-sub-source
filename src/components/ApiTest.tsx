import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { MailApi } from '@/lib/mailApi';

const ApiTest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [testResult, setTestResult] = useState<any>(null);
  const { toast } = useToast();

  const testApiConnection = async () => {
    setIsLoading(true);
    try {
      const response = await MailApi.testConnection();
      setTestResult(response);
      if (response.success) {
        toast({
          title: "API Test Successful",
          description: "The mail API is working correctly!",
        });
      } else {
        toast({
          title: "API Test Failed",
          description: response.message || "Could not connect to the API",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('API test failed:', error);
      setTestResult({ error: error instanceof Error ? error.message : 'Unknown error' });
      toast({
        title: "API Test Failed",
        description: "Could not connect to the mail API. Check the console for details.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const testEmailSending = async () => {
    setIsLoading(true);
    try {
      const response = await MailApi.sendContactForm({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test email from the API test component.',
        phone: '555-1234',
        business: 'Test Company',
        estimatedCost: '$10k–$50k',
        projectType: 'commercial',
        services: ['roofing', 'electrical']
      });
      setTestResult(response);
      toast({
        title: "Email Test Successful",
        description: "Test email sent successfully!",
      });
    } catch (error) {
      console.error('Email test failed:', error);
      setTestResult({ error: error instanceof Error ? error.message : 'Unknown error' });
      toast({
        title: "Email Test Failed",
        description: "Could not send test email. Check the console for details.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">API Connection Test</h3>
      
      <div className="flex gap-2 mb-4">
        <Button 
          onClick={testApiConnection} 
          disabled={isLoading}
        >
          {isLoading ? 'Testing...' : 'Test API Connection'}
        </Button>
        
        <Button 
          onClick={testEmailSending} 
          disabled={isLoading}
          variant="outline"
        >
          {isLoading ? 'Sending...' : 'Test Email Sending'}
        </Button>
      </div>

      {testResult && (
        <div className="mt-4">
          <h4 className="font-medium mb-2">Test Result:</h4>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto max-h-96">
            {JSON.stringify(testResult, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ApiTest;
