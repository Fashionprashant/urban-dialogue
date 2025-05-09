
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Shield, Heart, Clock, User, FileText, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Healthcare: React.FC = () => {
  return (
    <PageLayout 
      title="Healthcare Solutions" 
      subtitle="Streamline patient communications and administrative processes"
    >
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-lg">Our HIPAA-compliant AI solutions help healthcare providers improve patient engagement, streamline appointment scheduling, provide medical information, and reduce administrative burdens. UrbanChat.AI healthcare chatbots can be deployed across websites, patient portals, and messaging platforms to provide consistent, accurate information to patients.</p>
        <p className="text-lg">Healthcare organizations using our platform report a 40% reduction in administrative phone calls and a significant improvement in patient satisfaction metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mb-4">
            <Shield className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">HIPAA Compliant</h3>
          <p className="text-gray-300">Our healthcare solutions are fully HIPAA compliant, ensuring patient data remains secure and protected at all times.</p>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-red-500/20 text-red-400 mb-4">
            <Heart className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Patient Engagement</h3>
          <p className="text-gray-300">Improve patient satisfaction with personalized communication that guides them through their healthcare journey.</p>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-4">
            <Clock className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
          <p className="text-gray-300">Provide answers to patient questions around the clock, improving accessibility to healthcare information.</p>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 mb-4">
            <User className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Appointment Management</h3>
          <p className="text-gray-300">Allow patients to schedule, reschedule, or cancel appointments through AI-powered conversations.</p>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-400 mb-4">
            <FileText className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Form Completion</h3>
          <p className="text-gray-300">Guide patients through form completion, reducing errors and improving information collection.</p>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-teal-500/20 text-teal-400 mb-4">
            <MessageCircle className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Symptom Screening</h3>
          <p className="text-gray-300">Initial patient triage through AI-powered symptom screening to direct patients to appropriate care.</p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">How Healthcare Providers Benefit from UrbanChat.AI</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-semibold mb-4">Administrative Efficiency</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Reduce call volume by 40-60%</li>
              <li>Automate appointment reminders</li>
              <li>Streamline patient intake processes</li>
              <li>Efficiently answer common questions</li>
            </ul>
          </div>
          
          <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-semibold mb-4">Patient Experience</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>24/7 access to healthcare information</li>
              <li>Reduced wait times for answers</li>
              <li>Personalized healthcare guidance</li>
              <li>Simplified appointment scheduling</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-500/20 to-teal-500/20 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to transform patient engagement?</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">Join leading healthcare providers who have improved patient satisfaction and operational efficiency with UrbanChat.AI</p>
        <Button className="bg-green-500 hover:bg-green-600 px-6">Request a Demo</Button>
      </div>
    </PageLayout>
  );
};

export default Healthcare;
