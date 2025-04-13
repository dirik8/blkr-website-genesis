
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const sendContactFormData = async (formData: ContactFormData, adminEmail: string): Promise<boolean> => {
  try {
    // Log detailed information about the submission
    console.log(`📧 Form data would be sent to admin email: ${adminEmail}`);
    console.log('📝 Form data details:', formData);
    
    // Show the formatted message as it would appear in an email
    const formattedMessage = `
===== New Message From ${formData.name} =====
Sender: ${formData.name} <${formData.email}>
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}
===================================
    `;
    
    console.log('📄 Formatted message for email:');
    console.log(formattedMessage);
    
    // In a real application, this would send data to a backend service that handles emails
    // For now, we'll simulate a successful submission with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here's where you would normally send an actual API request to your backend
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ ...formData, adminEmail })
    // });
    // return response.ok;
    
    return true;
  } catch (error) {
    console.error('❌ Error sending contact form data:', error);
    return false;
  }
};
