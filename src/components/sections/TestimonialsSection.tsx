
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "DentrixPay has transformed how our practice handles payments. We've reduced our administrative workload by 30% and patients love the convenience.",
    author: "Dr. Sarah Johnson",
    role: "Practice Owner, Johnson Dental",
    rating: 5
  },
  {
    quote: "The integration with our Dentrix system is seamless. No more double entry or reconciliation issues. Our office manager couldn't be happier.",
    author: "Mark Williams",
    role: "Office Manager, Bright Smile Dental",
    rating: 5
  },
  {
    quote: "Text-to-Pay has been a game-changer for our collections. We've seen our past-due accounts decrease significantly since implementing DentrixPay.",
    author: "Dr. Michael Chen",
    role: "Practice Owner, Modern Dental Care",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dentrix-blue mb-4">What Our Customers Say</h2>
          <p className="text-lg text-dentrix-gray">
            Join hundreds of dental practices already transforming their payment processing with DentrixPay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 px-6 pb-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-dentrix-teal text-dentrix-teal" />
                  ))}
                </div>
                <blockquote className="text-dentrix-gray italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-dentrix-blue">{testimonial.author}</div>
                  <div className="text-sm text-dentrix-gray">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
