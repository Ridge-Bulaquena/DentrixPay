
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-dentrix-light to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dentrix-blue leading-tight">
              Streamline Patient Payments for Your Dental Practice
            </h1>
            <p className="text-xl text-dentrix-gray max-w-lg">
              The complete payment solution that simplifies transactions, reduces costs, and improves the patient experience.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button className="bg-dentrix-teal hover:bg-dentrix-blue text-white text-lg px-8 py-6">
                Request a Demo
              </Button>
              <Button variant="outline" className="border-dentrix-blue text-dentrix-blue hover:bg-dentrix-blue hover:text-white text-lg px-8 py-6">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10 transform rotate-1">
              <div className="bg-dentrix-lightgray p-4 rounded-lg mb-6">
                <div className="bg-dentrix-teal h-8 w-3/4 rounded-md flex items-center px-3">
                  <span className="text-white font-medium text-sm">Payment Complete</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-dentrix-gray">Patient Payment</span>
                  <span className="font-bold">$156.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dentrix-gray">Date</span>
                  <span>May 18, 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dentrix-gray">Payment Method</span>
                  <span>Visa ****4242</span>
                </div>
                <div className="h-px bg-gray-200 my-4"></div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Receipt #</span>
                  <span>DP8273645</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-dentrix-blue text-white p-4 rounded-xl shadow-xl transform -rotate-3">
              <div className="font-bold">Automatic Integration</div>
              <div className="text-sm opacity-75">Syncs with Dentrix Software</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
