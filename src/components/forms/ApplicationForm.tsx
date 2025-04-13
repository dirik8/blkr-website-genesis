
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import CTAButton from '../shared/CTAButton';
import { AlertTriangle, ArrowLeft, ArrowRight, CheckCircle2, CircleDot } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendContactFormData } from '@/utils/emailSender';

// Form schemas for each step
const personalInfoSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  countryTimeZone: z.string().min(2, "Please enter your country and time zone"),
});

const profileSchema = z.object({
  age: z.string().min(1, "Please enter your age"),
  maritalStatus: z.string().min(1, "Please select your marital status"),
  occupation: z.string().min(2, "Please enter your occupation"),
  jobStatus: z.string().min(1, "Please select your job status"),
  monthlyIncome: z.string().min(1, "Please enter your approximate monthly income"),
  disposableIncome: z.string().min(1, "Please enter your disposable income"),
  riskAppetite: z.string().min(1, "Please select your risk appetite"),
});

const goalsSchema = z.object({
  shortTermGoals: z.string().min(5, "Please describe your short-term goals"),
  longTermGoals: z.string().min(5, "Please describe your long-term goals"),
  investmentPreference: z.string().min(1, "Please select your investment preference"),
  feedbackFrequency: z.string().min(1, "Please select your preferred feedback frequency"),
});

// Combined schema for all steps
const applicationSchema = z.object({
  ...personalInfoSchema.shape,
  ...profileSchema.shape,
  ...goalsSchema.shape,
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

interface ApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ApplicationForm = ({ open, onOpenChange }: ApplicationFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<ApplicationFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [adminEmail, setAdminEmail] = useState('admin@blkrtrading.com');
  const { toast } = useToast();
  
  const totalSteps = 3;
  
  // Form for current step
  const form = useForm<any>({
    resolver: zodResolver(
      step === 1 ? personalInfoSchema : 
      step === 2 ? profileSchema : 
      goalsSchema
    ),
    defaultValues: step === 1 ? {
      name: formData.name || '',
      email: formData.email || '',
      phone: formData.phone || '',
      countryTimeZone: formData.countryTimeZone || '',
    } : step === 2 ? {
      age: formData.age || '',
      maritalStatus: formData.maritalStatus || '',
      occupation: formData.occupation || '',
      jobStatus: formData.jobStatus || '',
      monthlyIncome: formData.monthlyIncome || '',
      disposableIncome: formData.disposableIncome || '',
      riskAppetite: formData.riskAppetite || '',
    } : {
      shortTermGoals: formData.shortTermGoals || '',
      longTermGoals: formData.longTermGoals || '',
      investmentPreference: formData.investmentPreference || '',
      feedbackFrequency: formData.feedbackFrequency || '',
    }
  });
  
  const handleNext = async (data: any) => {
    const updatedFormData = { ...formData, ...data };
    setFormData(updatedFormData);
    
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Final submission
      setIsSubmitting(true);
      try {
        // Format the data for email sending
        const emailData = {
          name: updatedFormData.name || '',
          email: updatedFormData.email || '',
          phone: updatedFormData.phone || '',
          subject: 'Membership Application',
          message: `
            Application Details:
            
            Personal Information:
            Full Name: ${updatedFormData.name}
            Email: ${updatedFormData.email}
            Phone: ${updatedFormData.phone || 'Not provided'}
            Country & Time Zone: ${updatedFormData.countryTimeZone}
            
            Basic Profile:
            Age: ${updatedFormData.age}
            Marital Status: ${updatedFormData.maritalStatus}
            Current Occupation: ${updatedFormData.occupation}
            Job Status: ${updatedFormData.jobStatus}
            Monthly Income: ${updatedFormData.monthlyIncome}
            Disposable Income: ${updatedFormData.disposableIncome}
            Risk Appetite: ${updatedFormData.riskAppetite}
            
            Goals & Expectations:
            Short-term Goals: ${updatedFormData.shortTermGoals}
            Long-term Goals: ${updatedFormData.longTermGoals}
            Investment Preference: ${updatedFormData.investmentPreference}
            Feedback Frequency: ${updatedFormData.feedbackFrequency}
          `
        };
        
        const success = await sendContactFormData(emailData, adminEmail);
        
        if (success) {
          toast({
            title: "Application Submitted",
            description: "Thank you for applying! We'll review your application and get back to you soon.",
          });
          
          // Reset and close form
          setFormData({});
          setStep(1);
          onOpenChange(false);
        } else {
          toast({
            title: "Submission Error",
            description: "There was a problem submitting your application. Please try again.",
            variant: "destructive"
          });
        }
      } catch (error) {
        toast({
          title: "Submission Error",
          description: "An unexpected error occurred. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-6">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <React.Fragment key={index}>
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step > index + 1 
                  ? 'bg-green-500 text-white' 
                  : step === index + 1 
                    ? 'bg-blkr-gold text-black' 
                    : 'bg-gray-700 text-gray-300'
              }`}
            >
              {step > index + 1 ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            {index < totalSteps - 1 && (
              <div 
                className={`h-1 w-12 ${
                  step > index + 1 ? 'bg-green-500' : 'bg-gray-700'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };
  
  const renderPersonalInfoForm = () => (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleNext)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="John Doe" 
                  {...field} 
                  className="bg-gray-900 border-gray-700"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  {...field} 
                  className="bg-gray-900 border-gray-700"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input 
                  placeholder="+1 (555) 123-4567" 
                  {...field} 
                  className="bg-gray-900 border-gray-700"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="countryTimeZone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country & Time Zone</FormLabel>
              <FormControl>
                <Input 
                  placeholder="United States, EST" 
                  {...field} 
                  className="bg-gray-900 border-gray-700"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="pt-4 flex justify-between">
          <div />
          <CTAButton type="submit" variant="primary">
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </CTAButton>
        </div>
      </form>
    </Form>
  );
  
  const renderProfileForm = () => (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleNext)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="35" 
                    {...field} 
                    className="bg-gray-900 border-gray-700"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="maritalStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marital Status</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-gray-900 border-gray-700">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Occupation</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Software Developer" 
                  {...field} 
                  className="bg-gray-900 border-gray-700"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="jobStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Status</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="bg-gray-900 border-gray-700">
                    <SelectValue placeholder="Select job status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="employed">Employed</SelectItem>
                  <SelectItem value="self-employed">Self-employed</SelectItem>
                  <SelectItem value="retired">Retired</SelectItem>
                  <SelectItem value="unemployed">Unemployed</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="monthlyIncome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly Income (approx.)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="$5,000" 
                    {...field} 
                    className="bg-gray-900 border-gray-700"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="disposableIncome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly Disposable Income</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="$1,500" 
                    {...field} 
                    className="bg-gray-900 border-gray-700"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="riskAppetite"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>What's your current risk appetite?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="low" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Low – preserve capital
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="moderate" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Moderate – steady growth
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="high" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      High – growth-focused, comfortable with volatility
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="pt-4 flex justify-between">
          <CTAButton type="button" variant="secondary" onClick={handlePrevious}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </CTAButton>
          <CTAButton type="submit" variant="primary">
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </CTAButton>
        </div>
      </form>
    </Form>
  );
  
  const renderGoalsForm = () => (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleNext)} className="space-y-4">
        <FormField
          control={form.control}
          name="shortTermGoals"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What are your short-term (3–6 month) investment goals?</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="I want to..." 
                  className="bg-gray-900 border-gray-700 min-h-[80px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="longTermGoals"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What are your long-term (12+ month) financial goals?</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="My long-term financial goals are..." 
                  className="bg-gray-900 border-gray-700 min-h-[80px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="investmentPreference"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Would you like to reinvest profits or take regular withdrawals?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="reinvest" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Reinvest
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="withdraw" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Withdraw
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mix" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Mix of both
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="feedbackFrequency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred trading feedback frequency:</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="bg-gray-900 border-gray-700">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="weekly">Weekly updates</SelectItem>
                  <SelectItem value="biweekly">Bi-weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="as-needed">As needed</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="pt-4 flex justify-between">
          <CTAButton type="button" variant="secondary" onClick={handlePrevious}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </CTAButton>
          <CTAButton type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </CTAButton>
        </div>
      </form>
    </Form>
  );
  
  const renderAdminEmail = () => (
    <div className="mt-8 pt-4 border-t border-gray-800">
      <div className="text-sm text-gray-500 mb-2">Admin Settings</div>
      <div className="flex items-center gap-2">
        <Input
          type="email"
          placeholder="Admin email for form submissions"
          value={adminEmail}
          onChange={(e) => setAdminEmail(e.target.value)}
          className="bg-gray-900 border-gray-700 text-sm"
        />
      </div>
    </div>
  );
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 border border-gray-800 text-white sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair flex items-center gap-2">
            <CircleDot className="h-5 w-5 text-blkr-gold" />
            Apply for Membership {step > 1 && `- Step ${step} of ${totalSteps}`}
          </DialogTitle>
        </DialogHeader>
        
        {renderStepIndicator()}
        
        <div className="mt-2">
          {step === 1 ? renderPersonalInfoForm() : 
           step === 2 ? renderProfileForm() : 
           renderGoalsForm()}
        </div>
        
        {renderAdminEmail()}
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationForm;
