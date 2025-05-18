
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Easy Integration",
    description: "DentrixPay integrates seamlessly with your existing Dentrix practice management system.",
  },
  {
    number: "02",
    title: "Patient Setup",
    description: "Securely save patient payment methods and set up payment plans or recurring billing.",
  },
  {
    number: "03",
    title: "Payment Processing",
    description: "Process payments in-office or send text/email payment requests to patients.",
  },
  {
    number: "04",
    title: "Automatic Reconciliation",
    description: "Payments are automatically recorded in Dentrix with detailed reporting.",
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-dentrix-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dentrix-blue mb-4">How DentrixPay Works</h2>
          <p className="text-lg text-dentrix-gray">
            A simple four-step process to revolutionize payment processing at your practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg shadow-md p-8 h-full relative z-10 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-dentrix-teal mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-dentrix-blue mb-3">{step.title}</h3>
                <p className="text-dentrix-gray">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                  <div className="w-8 h-8 border-t-2 border-r-2 border-dentrix-teal transform rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-dentrix-gray max-w-3xl mx-auto">
            The entire process is designed to be simple yet powerful, reducing administrative workload while improving your practice's cash flow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
