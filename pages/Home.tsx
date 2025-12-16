import React from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { Scale, Users, TrendingUp, Layers, AlertTriangle, Shuffle, Zap, Banknote } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection
        headline="Are You Accumulating People Debt?"
        subHeadline={
          <>
            As you scale, you're probably making hundreds of unwritten people-related decisions. Unchecked, this 'people debt' creates friction, slows you down, and puts your culture at risk.
            <br /><br />
            Most of our clients get in touch right after their first people crisis; the smart ones call us 6 months before.
          </>
        }
        primaryCtaText="Explore Our Solutions"
        primaryCtaAction={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
        backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" // Modern office meeting abstract
      />

      <Section id="problem" bgColor="white" className="border-t border-spiced-charcoal/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-spiced-charcoal mb-6">
              Scaling Shouldn't Feel Like You're Breaking.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              For high-growth companies, the "messy middle" is where great products are undermined by internal chaos. If you're experiencing inconsistent decision-making or losing top talent to ambiguity, you're not alone. This is the cost of scaling without a deliberate people framework.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-spiced-parchment p-6 rounded-lg border border-spiced-charcoal/5">
              <Shuffle className="text-spiced-paprika w-8 h-8 mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">Inconsistent Management</h3>
              <p className="text-sm text-gray-600">Disparate styles and standards confusing your team.</p>
            </div>
            <div className="bg-spiced-parchment p-6 rounded-lg border border-spiced-charcoal/5">
              <Layers className="text-spiced-paprika w-8 h-8 mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">Ambiguous Career Paths</h3>
              <p className="text-sm text-gray-600">Talent leaving because they can't see a future.</p>
            </div>
            <div className="bg-spiced-parchment p-6 rounded-lg border border-spiced-charcoal/5">
              <AlertTriangle className="text-spiced-paprika w-8 h-8 mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">Reactive Firefighting</h3>
              <p className="text-sm text-gray-600">Solving the same people problems over and over.</p>
            </div>
            <div className="bg-spiced-parchment p-6 rounded-lg border border-spiced-charcoal/5">
              <Banknote className="text-spiced-paprika w-8 h-8 mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">Ad-Hoc Pay Decisions</h3>
              <p className="text-sm text-gray-600">Creating unfairness and budget blowouts.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="parchment" className="text-center">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl h-96">
             <img 
               src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Spices and Ingredients" 
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-spiced-charcoal/10"></div>
          </div>
          <div className="order-1 md:order-2 text-left">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-spiced-charcoal mb-6">
              The Essential Ingredient for Sustainable Growth.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <span className="font-heading font-bold">Spiced</span><span className="font-heading font-bold text-spiced-paprika">:</span> is a boutique consultancy that provides the expert-led frameworks to de-risk your journey. 
              <br /><br />
              You already have the ingredients; we use our deep expertise to bring structure, clarity, and character to your people operations—turning it from a source of friction into your greatest engine for growth.
            </p>
          </div>
        </div>
      </Section>

      <Section id="solutions" bgColor="white">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-spiced-charcoal mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A suite of services designed to provide strategic leverage at every stage of your scale-up journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card 
            title="Spiced:Clarity" 
            description="Build a fair, scalable, and transparent compensation infrastructure." 
            linkTo="/clarity"
            icon={Scale}
          />
          <Card 
            title="Spiced:Catalyst" 
            description="Embed senior-level, fractional expertise into your team to accelerate progress." 
            linkTo="/catalyst"
            icon={Users}
          />
          <Card 
            title="Spiced:Horizon" 
            description="Equip your board with the strategic foresight and governance frameworks for long-term health." 
            linkTo="/horizon"
            icon={TrendingUp}
          />
          <Card 
            title="Spiced:Signal" 
            description="Rapidly prototype and validate your CompTech ideas with our agile, expert-led sprints." 
            linkTo="/signal"
            icon={Zap}
          />
        </div>
      </Section>

      <Section bgColor="charcoal" className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
               alt="Modern Architecture" 
               className="w-full h-full object-cover"
             />
        </div>
        <div className="relative z-10 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Ready to Build with Intention?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss where you are on your journey and how a deliberate people strategy can become your competitive advantage.
          </p>
          <Button variant="primary" onClick={() => window.open('mailto:hello@spiced.consulting', '_blank')}>
            Schedule a Discovery Call
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Home;