import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { TrendingUp, Landmark, Compass, Eye, Shield, Target, Users as UsersIcon } from 'lucide-react';

const Horizon: React.FC = () => {
  return (
    <>
      <div className="relative bg-spiced-charcoal text-white min-h-[600px] flex flex-col justify-center py-20 overflow-hidden">
        {/* Background Image */}
         <div className="absolute inset-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover" alt="Boardroom" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-xl mb-6 text-spiced-turmeric backdrop-blur-sm">
            <TrendingUp size={32} />
          </div>
          <h1 className="font-heading font-normal text-4xl md:text-6xl mb-6">
            <span className="font-bold">Spiced</span><span className="font-bold text-spiced-paprika">:</span><span className="font-normal">Horizon</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Strategic people and governance advisory for Founders and Boards. Expert, independent perspective to navigate long-term complexity.
          </p>
        </div>
      </div>

      <Section bgColor="parchment">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center text-spiced-charcoal mb-12">
            When Your Board's Questions Outpace Your Answers
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-spiced-charcoal/5 relative">
              <span className="text-6xl text-spiced-turmeric/20 font-serif absolute top-4 left-4">"</span>
              <p className="text-lg text-gray-600 leading-relaxed italic relative z-10 pt-4">
                Your investors are shifting their focus from pure growth to governance. They're asking tough questions about executive compensation, pay equity, and succession planning. Improvising is no longer an option.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-center text-spiced-charcoal font-medium bg-white/50 p-4 rounded-lg">
                <Landmark className="text-spiced-paprika mr-4 h-6 w-6" /> 
                <span>Remuneration Committee Advisory</span>
              </div>
              <div className="flex items-center text-spiced-charcoal font-medium bg-white/50 p-4 rounded-lg">
                <Eye className="text-spiced-paprika mr-4 h-6 w-6" /> 
                <span>Organisational Health Audits</span>
              </div>
              <div className="flex items-center text-spiced-charcoal font-medium bg-white/50 p-4 rounded-lg">
                <Target className="text-spiced-paprika mr-4 h-6 w-6" /> 
                <span>Succession Planning</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl text-spiced-charcoal mb-4">From Uncertainty to Unshakeable Confidence</h2>
            <p className="text-gray-600">Prepare for the scrutiny of the next level.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, text: "Inspire Investor Confidence" },
              { icon: Compass, text: "Make Better Decisions" },
              { icon: Eye, text: "Mitigate Risk" },
              { icon: UsersIcon, text: "Align Leadership" }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-spiced-parchment rounded-lg transition-transform hover:-translate-y-1 duration-300">
                <feature.icon className="w-10 h-10 text-spiced-charcoal mb-4" />
                <span className="font-heading font-bold text-sm text-spiced-charcoal">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-spiced-charcoal text-white p-8 rounded-2xl max-w-2xl relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-spiced-charcoal to-gray-800"></div>
              <div className="relative z-10">
                <h3 className="font-heading font-bold text-xl mb-3">Who is Horizon for?</h3>
                <p className="text-gray-300 mb-6">
                    Post-Series B companies establishing formal board committees, founders preparing for a new funding round or exit, and boards seeking to professionalise their people governance.
                </p>
                <Button variant="primary" onClick={() => window.open('mailto:hello@spiced.consulting', '_blank')}>
                    Book a Confidential Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Horizon;