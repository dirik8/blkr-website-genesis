
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const sendContactFormData = async (formData: ContactFormData, adminEmail: string): Promise<boolean> => {
  try {
    // In a real application, this would send the data to a backend service
    // For now, we'll simulate a successful submission
    console.log(`Form data would be sent to admin email: ${adminEmail}`);
    console.log('Form data:', formData);
    
    // Simulate an API call with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would normally send an actual API request to your backend
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ ...formData, adminEmail })
    // });
    // return response.ok;
    
    return true;
  } catch (error) {
    console.error('Error sending contact form data:', error);
    return false;
  }
};
