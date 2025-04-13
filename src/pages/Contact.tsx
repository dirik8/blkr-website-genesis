import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAButton from '@/components/shared/CTAButton';
import UrgencyBanner from '@/components/shared/UrgencyBanner';
import { Mail, MessageSquare, Phone, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ContactFormData, sendContactFormData } from '@/utils/emailSender';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [adminEmail, setAdminEmail] = useState('admin@blkrtrading.com');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!privacyChecked) {
      toast({
        title: "Privacy Policy",
        description: "Please agree to the privacy policy to continue.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const success = await sendContactFormData(formData, adminEmail);
      
      if (success) {
        toast({
          title: "Message Sent",
          description: "Your message has been successfully sent. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setPrivacyChecked(false);
      } else {
        toast({
          title: "Error",
          description: "Failed to send your message. Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | BLKR Trading Community</title>
        <meta name="description" content="Get in touch with the BLKR Trading Community team. Ask questions, request information, or apply for membership through our contact channels." />
        <meta name="keywords" content="contact trading community, trading membership contact, crypto coaching contact, trading support" />
      </Helmet>
      
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
                Contact <span className="text-blkr-gold">Us</span>
              </h1>
              <p className="text-lg text-gray-300">
                Have questions about our community or ready to take the next step?
                Our team is here to help you on your trading journey.
              </p>
            </div>
            
            <UrgencyBanner 
              slotsLeft={2} 
              href="#contact-form" 
              className="max-w-4xl mx-auto mb-16" 
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20" id="contact-form">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-8">Get In Touch</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <Input 
                        type="text" 
                        id="name" 
                        className="bg-gray-900 border border-gray-700 text-white"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                      <Input 
                        type="email" 
                        id="email" 
                        className="bg-gray-900 border border-gray-700 text-white"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number (Optional)</label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      className="bg-gray-900 border border-gray-700 text-white"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Input 
                      type="text" 
                      id="subject" 
                      className="bg-gray-900 border border-gray-700 text-white"
                      placeholder="Membership Inquiry"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      id="message" 
                      rows={6}
                      className="bg-gray-900 border border-gray-700 text-white"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="adminEmail" className="block text-sm font-medium mb-2">Admin Email (Where to send form submissions)</label>
                    <Input 
                      type="email" 
                      id="adminEmail" 
                      className="bg-gray-900 border border-gray-700 text-white"
                      placeholder="admin@example.com"
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      id="privacy" 
                      type="checkbox" 
                      className="h-4 w-4 bg-gray-900 border-gray-700 rounded text-blkr-gold focus:ring-blkr-gold"
                      checked={privacyChecked}
                      onChange={(e) => setPrivacyChecked(e.target.checked)}
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-300">
                      I agree to the privacy policy and terms of service
                    </label>
                  </div>
                  
                  <CTAButton type="submit" className="w-full justify-center" disabled={isSubmitting}>
                    <Send className="mr-2 h-4 w-4" /> {isSubmitting ? 'Sending...' : 'Send Message'}
                  </CTAButton>
                </form>
              </div>
              
              <div>
                <div className="bg-gray-900 rounded-lg border border-gray-800 p-8 mb-8">
                  <h2 className="text-3xl font-playfair font-bold mb-8">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-blkr-gold/20 flex items-center justify-center flex-shrink-0 mr-4">
                        <Mail className="h-6 w-6 text-blkr-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Email</h3>
                        <a href="mailto:info@blkrtrading.com" className="text-gray-300 hover:text-blkr-gold transition-colors">
                          info@blkrtrading.com
                        </a>
                        <p className="text-sm text-gray-400 mt-1">Response within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-blkr-gold/20 flex items-center justify-center flex-shrink-0 mr-4">
                        <Phone className="h-6 w-6 text-blkr-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                        <a href="tel:+15551234567" className="text-gray-300 hover:text-blkr-gold transition-colors">
                          +1 (555) 123-4567
                        </a>
                        <p className="text-sm text-gray-400 mt-1">Available 9am-5pm EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-blkr-gold/20 flex items-center justify-center flex-shrink-0 mr-4">
                        <MessageSquare className="h-6 w-6 text-blkr-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Telegram</h3>
                        <a href="https://t.me/BLKRTrading" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blkr-gold transition-colors">
                          @BLKRTrading
                        </a>
                        <p className="text-sm text-gray-400 mt-1">For quick inquiries</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900 rounded-lg border border-gray-800 p-8">
                  <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                  <p className="text-gray-300 mb-6">
                    Before reaching out, you might find answers to common questions on our FAQ page.
                  </p>
                  <CTAButton variant="secondary" className="w-full justify-center" href="/faq">
                    View FAQ Page
                  </CTAButton>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-playfair font-bold mb-10 text-center">Visit Our Social Channels</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <a 
                  href="https://twitter.com/BLKRTrading" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center hover:border-blkr-gold transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-gray-800 mx-auto flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">X</span>
                  </div>
                  <h3 className="font-bold mb-1">Twitter/X</h3>
                  <p className="text-sm text-gray-400">@BLKRTrading</p>
                </a>
                
                <a 
                  href="https://linkedin.com/company/blkr-trading" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center hover:border-blkr-gold transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-gray-800 mx-auto flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">in</span>
                  </div>
                  <h3 className="font-bold mb-1">LinkedIn</h3>
                  <p className="text-sm text-gray-400">BLKR Trading</p>
                </a>
                
                <a 
                  href="https://instagram.com/blkrtrading" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center hover:border-blkr-gold transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-gray-800 mx-auto flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">IG</span>
                  </div>
                  <h3 className="font-bold mb-1">Instagram</h3>
                  <p className="text-sm text-gray-400">@BLKRTrading</p>
                </a>
                
                <a 
                  href="https://youtube.com/c/BLKRTrading" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center hover:border-blkr-gold transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-gray-800 mx-auto flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">YT</span>
                  </div>
                  <h3 className="font-bold mb-1">YouTube</h3>
                  <p className="text-sm text-gray-400">BLKR Trading Channel</p>
                </a>
              </div>
            </div>
            
            <div className="bg-blkr-gold/10 rounded-lg p-10 border border-blkr-gold/20 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Join BLKR?</h2>
              <p className="text-lg mb-8 text-gray-300">
                Apply for membership to gain access to our exclusive trading community and resources.
              </p>
              <CTAButton href="/contact#contact-form" withArrow>Apply for Membership</CTAButton>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Contact;
