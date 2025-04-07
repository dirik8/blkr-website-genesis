
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAButton from '@/components/shared/CTAButton';
import { Check, ArrowRight } from 'lucide-react';

const Programs = () => {
  const tiers = [
    {
      name: "Silver",
      description: "Essential signals and market access",
      price: "$997",
      period: "per quarter",
      features: [
        "Daily trading signals (5-10 per week)",
        "Market analysis newsletter",
        "Weekly group Q&A sessions",
        "Beginner strategy guides",
        "Community Discord access",
      ],
      cta: "Apply for Silver Tier"
    },
    {
      name: "Gold",
      description: "Advanced strategies and group coaching",
      price: "$2,497",
      period: "per quarter",
      features: [
        "All Silver tier benefits",
        "Bi-weekly group coaching calls",
        "Advanced strategy workshops",
        "Priority signal alerts",
        "Monthly portfolio review",
        "Risk management templates",
        "Private Gold tier channel"
      ],
      cta: "Apply for Gold Tier",
      highlighted: true
    },
    {
      name: "Platinum Elite",
      description: "VIP mentoring and exclusive access",
      price: "$4,997",
      period: "per quarter",
      features: [
        "All Gold tier benefits",
        "1-on-1 monthly coaching sessions",
        "Custom trading plan development",
        "Exclusive mastermind retreats",
        "Direct access to lead traders",
        "Proprietary indicators access",
        "Early access to new strategies",
        "Emergency market event calls"
      ],
      cta: "Apply for Platinum Elite"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Membership Programs | BLKR Trading Community</title>
        <meta name="description" content="Explore BLKR Trading Community's membership tiers: Silver, Gold, and Platinum Elite. Each tier offers exclusive benefits to elevate your trading performance." />
        <meta name="keywords" content="trading membership, elite trading programs, crypto trading tiers, trading signals subscription" />
      </Helmet>
      
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
                Membership <span className="text-blkr-gold">Tiers</span>
              </h1>
              <p className="text-lg text-gray-300">
                Choose the level of access that matches your trading ambitions and experience.
                Each tier provides exceptional value with progressively more personalized guidance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {tiers.map((tier, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg border ${
                    tier.highlighted 
                      ? 'border-blkr-gold bg-gradient-to-b from-gray-900 to-black' 
                      : 'border-gray-800 bg-gray-900/50'
                  } p-8 flex flex-col ${tier.highlighted ? 'shadow-lg shadow-blkr-gold/10' : ''}`}
                >
                  <div className="mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-blkr-gold' : ''}`}>{tier.name}</h3>
                    <p className="text-gray-400 mb-6">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>
                  
                  <div className="mb-8 flex-grow">
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-blkr-gold mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <CTAButton 
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="w-full justify-center"
                  >
                    {tier.cta}
                  </CTAButton>
                </div>
              ))}
            </div>
            
            <div className="mb-20">
              <h2 className="text-3xl font-playfair font-bold text-center mb-10">Membership Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left px-6 py-4 bg-gray-900 border-b border-gray-800"></th>
                      <th className="text-center px-6 py-4 bg-gray-900 border-b border-gray-800">Silver</th>
                      <th className="text-center px-6 py-4 bg-gray-900 border-b border-gray-800 border-x border-gray-800">Gold</th>
                      <th className="text-center px-6 py-4 bg-gray-900 border-b border-gray-800">Platinum Elite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-6 py-4 border-b border-gray-800 font-medium">Trading Signals</td>
                      <td className="text-center px-6 py-4 border-b border-gray-800">5-10 weekly</td>
                      <td className="text-center px-6 py-4 border-b border-gray-800 border-x border-gray-800">10-15 weekly</td>
                      <td className="text-center px-6 py-4 border-b border-gray-800">15-20 weekly</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 border-b border-gray-800 font-medium">Community Access</td>
                      <td className="text-center px-6 py-4 border-b border-gray-800">Basic</td>
                      <td className="text-center px-6 py-4 border-b border-gray-800 border-x border-gray-800">Full</td>
                      <td className="text-center px-6 py-4 border-b border-gray-800">VIP</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 border-b border-gray-800 font-medium">Educational Content</td>
                      <td className="text-center px-6 py-4 border-b border-gray-800">Basic Guides</td>
                      <td className="text-center px-6 py-4 border-b border-gray-800 border-x border-gray-800">Advanced Workshops</td>
                      <td className="text-center px-6 py-4 border-b border-gray-800">Custom Curriculum</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 border-b border-gray-800 font-medium">Coaching</td>
                      <td className="text-center px-6 py-4 border-b border-gray-800">Group Q&A</td>
                      <td className="text-center px-6 py-4 border-b border-gray-800 border-x border-gray-800">Group Coaching</td>
                      <td className="text-center px-6 py-4 border-b border-gray-800">1-on-1 Sessions</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 border-b border-gray-800 font-medium">Events</td>
                      <td className="text-center px-6 py-4 border-b border-gray-800">
                        <div className="inline-block w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        </div>
                      </td>
                      <td className="text-center px-6 py-4 border-b border-gray-800 border-x border-gray-800">
                        <Check className="h-5 w-5 text-blkr-gold mx-auto" />
                      </td>
                      <td className="text-center px-6 py-4 border-b border-gray-800">
                        <Check className="h-5 w-5 text-blkr-gold mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 border-b border-gray-800 font-medium">Retreats</td>
                      <td className="text-center px-6 py-4 border-b border-gray-800">
                        <div className="inline-block w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        </div>
                      </td>
                      <td className="text-center px-6 py-4 border-b border-gray-800 border-x border-gray-800">
                        <div className="inline-block w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        </div>
                      </td>
                      <td className="text-center px-6 py-4 border-b border-gray-800">
                        <Check className="h-5 w-5 text-blkr-gold mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 border-b border-gray-800 font-medium">Custom Trading Plan</td>
                      <td className="text-center px-6 py-4 border-b border-gray-800">
                        <div className="inline-block w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        </div>
                      </td>
                      <td className="text-center px-6 py-4 border-b border-gray-800 border-x border-gray-800">
                        <div className="inline-block w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        </div>
                      </td>
                      <td className="text-center px-6 py-4 border-b border-gray-800">
                        <Check className="h-5 w-5 text-blkr-gold mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-blkr-gold/10 rounded-lg p-10 border border-blkr-gold/20 mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-playfair font-bold mb-4">Application Process</h2>
                  <p className="mb-6 text-gray-300">
                    We maintain a selective admissions process to ensure every member receives the attention they deserve and contributes positively to our community.
                  </p>
                  <ol className="space-y-4 mb-8">
                    <li className="flex">
                      <span className="w-8 h-8 rounded-full bg-blkr-gold text-black flex-shrink-0 flex items-center justify-center font-bold mr-4">1</span>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Submit Application</h3>
                        <p className="text-gray-300">Complete our detailed questionnaire about your experience and goals.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="w-8 h-8 rounded-full bg-blkr-gold text-black flex-shrink-0 flex items-center justify-center font-bold mr-4">2</span>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Screening Interview</h3>
                        <p className="text-gray-300">If selected, you'll speak with one of our community managers.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="w-8 h-8 rounded-full bg-blkr-gold text-black flex-shrink-0 flex items-center justify-center font-bold mr-4">3</span>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Membership Invitation</h3>
                        <p className="text-gray-300">Successful applicants receive a formal invitation to join.</p>
                      </div>
                    </li>
                  </ol>
                  <p className="text-sm text-gray-400 italic">Note: We only accept 50 new members each quarter to maintain our high standards.</p>
                </div>
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <h3 className="text-2xl font-bold mb-6 text-center">Request An Invitation</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blkr-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blkr-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="tier" className="block text-sm font-medium mb-2">Preferred Membership Tier</label>
                      <select 
                        id="tier" 
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blkr-gold appearance-none"
                      >
                        <option>Select a tier</option>
                        <option>Silver</option>
                        <option>Gold</option>
                        <option>Platinum Elite</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium mb-2">Trading Experience</label>
                      <select 
                        id="experience" 
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blkr-gold appearance-none"
                      >
                        <option>Select experience level</option>
                        <option>Beginner (0-1 years)</option>
                        <option>Intermediate (1-3 years)</option>
                        <option>Advanced (3-5 years)</option>
                        <option>Professional (5+ years)</option>
                      </select>
                    </div>
                    <CTAButton className="w-full justify-center" withArrow>
                      Request Invitation
                    </CTAButton>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
                Have questions about our membership tiers? Visit our comprehensive FAQ page or contact us directly.
              </p>
              <CTAButton variant="secondary" withArrow>
                Visit FAQ Page
              </CTAButton>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Programs;
