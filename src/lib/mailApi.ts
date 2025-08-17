export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
  business?: string;
  estimatedCost?: string;
  projectType?: 'commercial' | 'residential';
  services?: string[];
  subject?: string;
}

export interface MailApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
  details?: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://pacificpact.com/buildmatchpro-mail';

export class MailApi {
  private static async makeRequest(endpoint: string, data: any): Promise<MailApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || `HTTP error! status: ${response.status}`);
      }

      return result;
    } catch (error) {
      console.error('Mail API error:', error);
      throw error;
    }
  }

  static async sendContactForm(data: ContactFormData): Promise<MailApiResponse> {
    return this.makeRequest('contact.php', data);
  }

  static async sendMail(data: ContactFormData): Promise<MailApiResponse> {
    return this.makeRequest('contact.php', data);
  }

  static async testConnection(): Promise<MailApiResponse> {
    // Simple test to check if the API is reachable
    try {
      const response = await fetch(`${API_BASE_URL}/contact.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          message: 'API connection test'
        }),
      });
      
      if (response.ok) {
        return { success: true, message: 'API is reachable' };
      } else {
        return { success: false, message: `HTTP ${response.status}: ${response.statusText}` };
      }
    } catch (error) {
      return { success: false, message: 'API connection failed' };
    }
  }
}

// Utility function to validate email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Utility function to validate required fields
export const validateContactForm = (data: ContactFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!data.name?.trim()) {
    errors.push('Name is required');
  }

  if (!data.email?.trim()) {
    errors.push('Email is required');
  } else if (!validateEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!data.message?.trim()) {
    errors.push('Message is required');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
