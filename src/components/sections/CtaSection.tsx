
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="bg-dentrix-blue py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Patient Payments at Your Practice?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Join hundreds of dental practices already using DentrixPay to streamline operations, 
            improve cash flow, and enhance the patient experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-dentrix-teal hover:bg-white hover:text-dentrix-blue text-white text-lg px-8 py-6">
              Request a Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dentrix-blue text-lg px-8 py-6">
              Learn More <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
