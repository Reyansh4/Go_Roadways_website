import React from 'react';
import { MapPin, Clock } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Service Area',
      details: 'Greater Toronto Area',
      subtitle: 'Currently testing in Toronto',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Beta Hours',
      details: 'Limited Testing',
      subtitle: 'Beta program hours vary',
    },
  ];

  const faqs = [
    {
      question: 'How do I book a ride in Toronto?',
      answer: 'Simply open our app, enter your destination within Toronto/GTA, choose your ride type, and confirm your booking. A driver will be assigned to you instantly during our beta testing period.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, debit cards, digital wallets, and cash payments. All payments are processed securely through our platform.',
    },
    {
      question: 'How do I become a driver in Toronto?',
      answer: 'Visit our driver portal, complete the application form, submit required documents, and pass our background check. We\'re currently accepting applications from Toronto-area drivers for our beta program.',
    },
    {
      question: 'What is the beta testing program?',
      answer: 'Our beta program allows limited users in Toronto to test our platform and provide feedback. This helps us improve our service before the full launch.',
    },
    {
      question: 'Is there a cancellation fee?',
      answer: 'During beta testing, cancellation is free within the first 5 minutes. We\'re gathering data to optimize our cancellation policy.',
    },
  ];

  return (
    <section id="contact" className={`py-20 ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have questions or need assistance? We're here to help you 24/7. 
            Reach out to us through any of these channels.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Service Information */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Service Information</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl ${
                    darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                  } hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="text-primary mb-3">
                    {info.icon}
                  </div>
                  <h4 className="font-semibold mb-1">{info.title}</h4>
                  <p className="text-lg font-medium mb-1">{info.details}</p>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {info.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl ${
                    darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <h4 className="font-semibold mb-2">{faq.question}</h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;