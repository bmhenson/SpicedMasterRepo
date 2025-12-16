import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Users, Briefcase, Zap, TrendingUp, UserPlus, FastForward } from 'lucide-react';

const Catalyst: React.FC = () => {
  return (
    <>
      <div className="relative bg-spiced-charcoal text-white min-h-[600px] flex flex-col justify-center py-20 overflow-hidden">
        {/* Background Image */}
         <div className="absolute inset-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover" alt="Team Collaboration" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-xl mb-6 text-spiced-turmeric backdrop-blur-sm">
            <Users size={32} />
          </div>
          <h1 className="font-heading font-normal text-4xl md:text-6xl mb-6">
            <span className="font-bold">Spiced</span><span className="font-bold text-spiced-paprika">:</span><span className="font-normal">Catalyst</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Embed a seasoned, senior-level people leader into your team. Accelerate critical initiatives and bridge leadership gaps without the cost of a full-time hire.
          </p>
        </div>
      </div>

      <Section bgColor="white">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold text-3xl text-spiced-charcoal mb-6">
            When a Lack of Leadership Becomes Your Bottleneck
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your growth has outpaced your internal people leadership. A critical project is stalled, your junior HR team needs senior mentorship, or you're navigating a complex transition between permanent hires.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Interim Leadership", desc: "Acting Head of People to stabilize and guide.", icon: Briefcase },
             { title: "Strategic Projects", desc: "Leading complex initiatives like M&A or Restructuring.", icon: Zap },
             { title: "Mentoring", desc: "Upskilling your existing team members.", icon: TrendingUp }
           ].map((item, i) => (
             <div key={i} className="bg-spiced-parchment p-8 rounded-xl border border-spiced-charcoal/5 hover:border-spiced-paprika/20 transition-colors">
               <item.icon className="w-10 h-10 text-spiced-paprika mb-4" />
               <h3 className="font-heading font-bold text-xl mb-3 text-spiced-charcoal">{item.title}</h3>
               <p className="text-gray-600">{item.desc}</p>
             </div>
           ))}
        </div>
      </Section>

      <Section bgColor="parchment">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="font-heading font-bold text-3xl text-spiced-charcoal mb-6">From Stalled to Accelerated</h2>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white/50 rounded-lg">
                  <FastForward className="w-6 h-6 text-spiced-turmeric mr-4 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Maintain Momentum during transitions</span>
                </div>
                <div className="flex items-center p-4 bg-white/50 rounded-lg">
                  <UserPlus className="w-6 h-6 text-spiced-turmeric mr-4 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Reduce Hiring Risk for key roles</span>
                </div>
                <div className="flex items-center p-4 bg-white/50 rounded-lg">
                  <Briefcase className="w-6 h-6 text-spiced-turmeric mr-4 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Immediate Access to C-Suite Expertise</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg border border-spiced-charcoal/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-spiced-turmeric/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <h3 className="font-heading font-bold text-xl mb-4 relative z-10">Ideal for...</h3>
              <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                Companies navigating a leadership transition, needing to accelerate a specific people-related project, or requiring senior strategic expertise before they are ready for a full-time CPO.
              </p>
              <Button variant="secondary" className="w-full relative z-10" onClick={() => window.open('mailto:hello@spiced.consulting', '_blank')}>
                Enquire About a Catalyst
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Catalyst;