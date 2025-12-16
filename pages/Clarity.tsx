import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Scale, CheckCircle, ShieldCheck, PieChart, Users, ArrowRight } from 'lucide-react';

const Clarity: React.FC = () => {
  return (
    <>
      <div className="relative bg-spiced-charcoal text-white min-h-[600px] flex flex-col justify-center py-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-10">
           <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover" alt="Data Structure" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-xl mb-6 text-spiced-turmeric backdrop-blur-sm">
            <Scale size={32} />
          </div>
          <h1 className="font-heading font-normal text-4xl md:text-6xl mb-6">
            <span className="font-bold">Spiced</span><span className="font-bold text-spiced-paprika">:</span><span className="font-normal">Clarity</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A comprehensive service to build your company's compensation infrastructure. We replace guesswork with a fair, equitable, and scalable system.
          </p>
        </div>
      </div>

      <Section bgColor="white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl text-spiced-charcoal mb-6">
              When Pay Becomes a Pain Point
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Without a clear framework, compensation becomes your most significant source of friction. Founders are caught in endless salary negotiations, managers make inconsistent offers, and your best people quietly leave for competitors.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <ShieldCheck className="w-5 h-5 text-spiced-paprika mt-1 mr-3 flex-shrink-0" />
                <span>Eliminate equity and pay discrepancies.</span>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="w-5 h-5 text-spiced-paprika mt-1 mr-3 flex-shrink-0" />
                <span>Stop reactive counter-offers.</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-spiced-paprika/5 transform rotate-3 rounded-xl z-0"></div>
            <div className="relative bg-spiced-parchment p-8 rounded-xl border border-spiced-charcoal/5 z-10">
                <h3 className="font-heading font-bold text-xl mb-6 border-b border-gray-200 pb-4">The Blueprint for Fair Compensation</h3>
                <div className="space-y-6">
                <div className="flex">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-spiced-paprika shadow-sm mr-4 flex-shrink-0">
                    <PieChart size={24} />
                    </div>
                    <div>
                    <h4 className="font-bold text-spiced-charcoal">Reward Philosophy</h4>
                    <p className="text-sm text-gray-600">Defining how and why you pay.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-spiced-paprika shadow-sm mr-4 flex-shrink-0">
                    <Layers size={24} />
                    </div>
                    <div>
                    <h4 className="font-bold text-spiced-charcoal">Job Architecture & Levelling</h4>
                    <p className="text-sm text-gray-600">Clear career tracks and expectations.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-spiced-paprika shadow-sm mr-4 flex-shrink-0">
                    <Users size={24} />
                    </div>
                    <div>
                    <h4 className="font-bold text-spiced-charcoal">Market Benchmarking</h4>
                    <p className="text-sm text-gray-600">Data-driven salary bands.</p>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="parchment">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center text-spiced-charcoal mb-12">From Ambiguity to Advantage</h2>
          <div className="grid sm:grid-cols-2 gap-6">
             {['Hire Faster', 'Improve Retention', 'Ensure Fairness', 'Save Leadership Time'].map((item) => (
               <div key={item} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-spiced-charcoal/5">
                 <CheckCircle className="text-spiced-turmeric w-6 h-6 mr-3" />
                 <span className="font-semibold text-spiced-charcoal">{item}</span>
               </div>
             ))}
          </div>
          
          <div className="mt-16 bg-spiced-charcoal text-white p-8 md:p-12 rounded-2xl text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-spiced-paprika/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h3 className="font-heading font-bold text-2xl mb-4 relative z-10">Ideal for Series A-B Companies</h3>
            <p className="text-gray-300 mb-8 relative z-10">
              Perfect for organizations scaling senior and specialist roles that need to move beyond founder-led pay decisions to a professional, structured system.
            </p>
            <Button variant="primary" onClick={() => window.open('mailto:hello@spiced.consulting', '_blank')} className="relative z-10">
              Discuss Your Compensation Strategy
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

// Helper icon
const Layers = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

export default Clarity;