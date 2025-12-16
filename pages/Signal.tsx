import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Zap, Layout, PieChart, Sliders, Rocket, CheckSquare, Lightbulb, TrendingUp } from 'lucide-react';

const Signal: React.FC = () => {
  return (
    <>
      <div className="relative bg-spiced-charcoal text-white min-h-[600px] flex flex-col justify-center py-20 overflow-hidden">
        {/* Background Image */}
         <div className="absolute inset-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover" alt="Technology Abstract" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-xl mb-6 text-spiced-turmeric backdrop-blur-sm">
            <Zap size={32} />
          </div>
          <h1 className="font-heading font-normal text-4xl md:text-6xl mb-6">
            <span className="font-bold">Spiced</span><span className="font-bold text-spiced-paprika">:</span><span className="font-normal">Signal</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to our innovation lab. Spiced:Signal is where we explore the future of people operations, prototyping and testing the next generation of CompTech tools. We package our deep service expertise into intelligent software.
          </p>
        </div>
      </div>

      <Section bgColor="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl text-spiced-charcoal mb-6">
              Beyond the Spreadsheet, Before the Enterprise Suite
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              You're too sophisticated for chaotic spreadsheets, but off-the-shelf HR software is too rigid for your unique culture. You need specialised tools to model complex compensation scenarios, but building them internally is a massive distraction.
            </p>
          </div>
          <div className="bg-spiced-parchment p-8 rounded-xl border border-spiced-charcoal/5 shadow-sm">
            <div className="flex items-center text-spiced-paprika font-bold mb-4">
              <Lightbulb className="mr-3 w-6 h-6" />
              <span className="text-xl font-heading">Our Approach</span>
            </div>
            <p className="text-lg text-spiced-charcoal font-medium mb-4">
              Service as a Software: Expert-Led Tools
            </p>
            <p className="text-gray-600 leading-relaxed">
              We identify the most common, high-friction challenges our clients face. Then, within Spiced:Signal, we build lightweight, intelligent prototype tools to solve them.
            </p>
          </div>
        </div>
      </Section>

      <Section bgColor="parchment">
        <div className="text-center mb-16">
           <h2 className="font-heading font-bold text-3xl text-spiced-charcoal mb-4">Prototype Gallery</h2>
           <p className="text-gray-600">Explore the tools currently in our lab.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-spiced-turmeric hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-spiced-parchment w-14 h-14 rounded-full flex items-center justify-center mb-6 text-spiced-charcoal">
               <Layout size={28} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-spiced-charcoal">The Comp Cycle Modeller</h3>
            <p className="text-gray-600">Forecast the impact of salary review cycles on your budget and pay equity in real-time.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-spiced-paprika hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-spiced-parchment w-14 h-14 rounded-full flex items-center justify-center mb-6 text-spiced-charcoal">
               <PieChart size={28} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-spiced-charcoal">The Equity Scenario Planner</h3>
            <p className="text-gray-600">A tool for founders to model the impact of new funding rounds and option pools.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-spiced-charcoal hover:-translate-y-1 transition-transform duration-300">
             <div className="bg-spiced-parchment w-14 h-14 rounded-full flex items-center justify-center mb-6 text-spiced-charcoal">
               <Sliders size={28} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-spiced-charcoal">The Levelling Calibrator</h3>
            <p className="text-gray-600">An interactive framework to help leadership teams build consistent job architectures.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center text-spiced-charcoal mb-12">Access Innovation. Make Smarter Decisions.</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
             {[
               { icon: CheckSquare, label: "Solve Niche Problems" },
               { icon: Rocket, label: "Access Innovation Early" },
               { icon: TrendingUp, label: "De-risk Your Decisions" },
               { icon: Lightbulb, label: "Inform the Future" },
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center text-center p-4">
                 <div className="bg-white p-4 rounded-full shadow-sm mb-4 text-spiced-paprika">
                    <item.icon className="w-6 h-6" />
                 </div>
                 <h4 className="font-heading font-bold text-spiced-charcoal text-sm">{item.label}</h4>
               </div>
             ))}
          </div>

          <div className="bg-spiced-charcoal text-white rounded-2xl p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden shadow-2xl">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -ml-10 -mt-10"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-spiced-paprika/20 rounded-full blur-3xl -mr-10 -mb-10"></div>
            
            <div className="relative z-10 text-center">
                <h3 className="font-heading font-bold text-2xl mb-2 text-spiced-turmeric">For the Innovators</h3>
                <p className="text-gray-400 text-sm mb-8 uppercase tracking-wider font-semibold">Join the Lab</p>
                
                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                  Spiced:Signal is for forward-thinking leaders who believe technology can provide a competitive advantage but are frustrated by the limitations of existing software. It's for leaders who want to be partners in innovation.
                </p>

                <h2 className="font-heading font-bold text-3xl mb-4">Explore the Lab</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    Interested in getting a demo of one of our prototypes or becoming a design partner for our next great idea?
                </p>
                <Button variant="primary" onClick={() => window.open('mailto:hello@spiced.consulting', '_blank')}>
                  Become a Design Partner
                </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Signal;