
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAButton from '@/components/shared/CTAButton';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  
  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };
  
  const faqCategories = [
    {
      title: "General Questions",
      questions: [
        {
          id: "q1",
          question: "How does my course work?",
          answer: "Our courses combine video lessons, interactive exercises, and live sessions. After enrolling, you'll receive access to our learning platform where all materials are organized into modules. You can proceed at your own pace, but we recommend following the suggested timeline. Each module builds on the previous one, creating a comprehensive learning journey."
        },
        {
          id: "q2",
          question: "How to get started?",
          answer: "Getting started is simple: First, submit your application on our website. Once approved, you'll receive an invitation to join. After completing your registration and payment, you'll get immediate access to our platform, community, and initial educational materials. We recommend starting with our orientation module to familiarize yourself with all resources available."
        },
        {
          id: "q3",
          question: "How much is the course?",
          answer: "Our programs are available at different investment levels based on the depth of education and support. The Silver tier begins at $997 per quarter, Gold at $2,497 per quarter, and our comprehensive Platinum Elite at $4,997 per quarter. Each represents a different level of access, with details available on our Programs page."
        }
      ]
    },
    {
      title: "Trading Signals & Support",
      questions: [
        {
          id: "q4",
          question: "Can I expect a specific number of signals?",
          answer: "Yes, members receive a consistent flow of trading signals, but the exact number varies based on market conditions and opportunities that meet our strict criteria. Silver members typically receive 5-10 signals weekly, Gold members 10-15, and Platinum Elite members 15-20. We prioritize quality over quantity, only issuing signals with favorable risk-reward profiles."
        },
        {
          id: "q5",
          question: "Are coaching sessions online or in-person?",
          answer: "Most of our coaching sessions are conducted online via video conferencing for convenience and accessibility. This allows us to work with traders globally. For Platinum Elite members, we also offer in-person sessions at select locations and during our exclusive retreat events. All sessions are recorded and available for review in your member dashboard."
        },
        {
          id: "q6",
          question: "I'm a beginner — can I still benefit?",
          answer: "Absolutely! We have structured learning paths designed specifically for beginners. While some of our advanced programs require prerequisite knowledge, our Silver tier membership includes comprehensive foundational education. We'll help you progress from basic concepts to more sophisticated strategies at a pace that works for you. Many of our most successful members started as complete beginners."
        }
      ]
    },
    {
      title: "Membership & Billing",
      questions: [
        {
          id: "q7",
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, direct bank transfers, and select cryptocurrencies (Bitcoin, Ethereum, and USDC). For cryptocurrency payments, we provide a secure payment portal with current exchange rates. If you require an alternative payment method, please contact our support team."
        },
        {
          id: "q8",
          question: "Is there a refund policy?",
          answer: "We offer a 14-day satisfaction guarantee for new members. If you're not satisfied with our program within the first two weeks, contact our support team for a full refund. After this period, membership fees are non-refundable for the current billing period. However, you can cancel your membership at any time to prevent future billing."
        },
        {
          id: "q9",
          question: "Can I upgrade my membership tier later?",
          answer: "Yes, you can upgrade your membership at any time. When upgrading, we'll prorate the remaining value of your current subscription toward the higher tier. This makes transitioning seamless without losing any value from your initial investment. To upgrade, simply visit the membership section in your dashboard or contact our support team."
        }
      ]
    },
    {
      title: "Technical Issues",
      questions: [
        {
          id: "q10",
          question: "How do I reset my password?",
          answer: "To reset your password, click the 'Forgot Password' link on the login page. Enter the email address associated with your account, and you'll receive a password reset link. For security reasons, this link expires after 24 hours. If you don't receive the email, check your spam folder or contact our support team for assistance."
        },
        {
          id: "q11",
          question: "What devices can I access the platform on?",
          answer: "Our platform is fully responsive and accessible on any device with an internet connection. This includes desktop computers, laptops, tablets, and smartphones. We have dedicated mobile apps available for iOS and Android for a more optimized experience on smartphones. Your learning progress syncs across all devices."
        },
        {
          id: "q12",
          question: "How do I get technical support?",
          answer: "Technical support is available through multiple channels. For immediate assistance, use the live chat feature on our website or within the member area. You can also email support@blkrtrading.com or schedule a call with our technical team. Our support hours are 24/7, ensuring assistance regardless of your time zone."
        }
      ]
    }
  ];

  const filteredFAQs = searchQuery 
    ? faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqCategories;

  return (
    <>
      <Helmet>
        <title>FAQ | BLKR Trading Community</title>
        <meta name="description" content="Find answers to frequently asked questions about BLKR Trading Community's membership, courses, trading signals, and support services." />
        <meta name="keywords" content="trading FAQ, crypto membership questions, trading course FAQ, trading community support" />
      </Helmet>
      
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
                Frequently Asked <span className="text-blkr-gold">Questions</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Find answers to common questions about our membership, courses, and trading community.
              </p>
              <div className="flex max-w-xl mx-auto">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    type="text" 
                    placeholder="Search questions..."
                    className="pl-10 bg-gray-900 border-gray-700 text-white w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-400 text-lg">No questions found matching your search.</p>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto mb-16">
                <div className="space-y-10">
                  {filteredFAQs.map((category, idx) => (
                    <div key={idx}>
                      {category.questions.length > 0 && (
                        <>
                          <h2 className="text-2xl font-playfair font-bold mb-6">{category.title}</h2>
                          <div className="space-y-4">
                            {category.questions.map((item) => (
                              <div 
                                key={item.id} 
                                className={`bg-gray-900 rounded-lg border ${
                                  openItems[item.id] ? 'border-blkr-gold' : 'border-gray-800'
                                } transition-colors duration-200`}
                              >
                                <button
                                  className="w-full flex justify-between items-center p-6 text-left"
                                  onClick={() => toggleItem(item.id)}
                                  aria-expanded={openItems[item.id]}
                                >
                                  <h3 className="text-lg font-bold pr-6">{item.question}</h3>
                                  {openItems[item.id] ? (
                                    <ChevronUp className="w-5 h-5 text-blkr-gold flex-shrink-0" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                  )}
                                </button>
                                {openItems[item.id] && (
                                  <div className="p-6 pt-0 text-gray-300">
                                    <p>{item.answer}</p>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-blkr-gold/10 rounded-lg p-10 border border-blkr-gold/20 text-center">
                <h2 className="text-3xl font-playfair font-bold mb-6">Still Have Questions?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
                  Our team is here to help with any questions you may have about our programs,
                  membership options, or anything related to trading.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <CTAButton>
                    Contact Support
                  </CTAButton>
                  <CTAButton variant="secondary">
                    Schedule a Call
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default FAQ;
