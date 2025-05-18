
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Submitted",
      description: "A member of our team will contact you shortly.",
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-dentrix-light">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-dentrix-blue p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to simplify payments?</h2>
              <p className="text-lg mb-8 text-gray-100">
                Schedule a personalized demo to see how DentrixPay can transform payment processing at your practice.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-dentrix-teal flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">See DentrixPay in Action</h3>
                    <p className="text-gray-100">
                      Our experts will walk you through the platform and show you how it integrates with your systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-dentrix-teal flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Customized Recommendations</h3>
                    <p className="text-gray-100">
                      Get tailored advice on how to optimize payment workflows for your unique practice needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-dentrix-teal flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Easy Implementation</h3>
                    <p className="text-gray-100">
                      Our team will guide you through a smooth transition to ensure you're up and running quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-dentrix-blue mb-6">Request a Demo</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="(555) 123-4567" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="practice">Practice Name</Label>
                  <Input id="practice" placeholder="Your dental practice name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="practiceSize">Practice Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select practice size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solo">Solo Practitioner</SelectItem>
                      <SelectItem value="small">Small (2-5 providers)</SelectItem>
                      <SelectItem value="mid">Mid-size (6-10 providers)</SelectItem>
                      <SelectItem value="large">Large (11+ providers)</SelectItem>
                      <SelectItem value="dso">DSO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea id="message" placeholder="Tell us about your specific needs or questions" rows={3} />
                </div>

                <Button type="submit" className="w-full bg-dentrix-teal hover:bg-dentrix-blue text-white">
                  Request Demo
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
