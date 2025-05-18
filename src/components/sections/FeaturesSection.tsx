
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CreditCard, 
  BarChart3, 
  ShieldCheck, 
  Smartphone, 
  CalendarClock, 
  Repeat 
} from 'lucide-react';

const features = [
  {
    title: "Multiple Payment Options",
    description: "Accept credit cards, debit cards, HSA/FSA cards, and digital wallets for patient convenience.",
    icon: CreditCard,
  },
  {
    title: "Seamless Integration",
    description: "Works directly with Dentrix software, eliminating double entry and reducing errors.",
    icon: BarChart3,
  },
  {
    title: "Secure Transactions",
    description: "PCI compliant with point-to-point encryption for maximum payment security.",
    icon: ShieldCheck,
  },
  {
    title: "Text-to-Pay",
    description: "Send payment requests via text message for quick and easy patient payments.",
    icon: Smartphone,
  },
  {
    title: "Scheduled Payments",
    description: "Set up payment plans with automatic billing for improved cash flow.",
    icon: CalendarClock,
  },
  {
    title: "Recurring Billing",
    description: "Automate membership plans and payment arrangements with recurring billing options.",
    icon: Repeat,
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dentrix-blue mb-4">Powerful Features Designed for Dental Practices</h2>
          <p className="text-lg text-dentrix-gray">
            Everything you need to process payments efficiently while providing an exceptional patient experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-dentrix-light flex items-center justify-center text-dentrix-teal mb-4">
                  <feature.icon size={24} />
                </div>
                <CardTitle className="text-xl font-bold text-dentrix-blue">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dentrix-gray">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
