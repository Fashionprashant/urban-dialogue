
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { BookOpen, Users, MessageCircle, Calendar, FileText, Table } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Education: React.FC = () => {
  return (
    <PageLayout 
      title="Education Solutions" 
      subtitle="Enhance learning experiences with AI assistance"
    >
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-lg">UrbanChat.AI helps educational institutions provide 24/7 support to students, answer frequently asked questions, assist with enrollment processes, and deliver personalized learning experiences. Our education-focused chatbots integrate with existing learning management systems and student information platforms to provide seamless assistance.</p>
        <p className="text-lg">Educational institutions using our platform see improved student engagement, reduced administrative workload, and enhanced communication across all stakeholders.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mb-4">
            <BookOpen className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Student Support</h3>
          <p className="text-gray-300">Provide 24/7 answers to common questions about courses, deadlines, requirements, and campus resources.</p>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-4">
            <Users className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Admissions Support</h3>
          <p className="text-gray-300">Guide prospective students through the application process and answer questions about programs.</p>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 mb-4">
            <Calendar className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Course Management</h3>
          <p className="text-gray-300">Help students navigate course selection, registration deadlines, and schedule planning.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-4">For Students</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white">24/7 access to academic information</span>
            </li>
            <li className="flex items-center">
              <div className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white">Personalized course recommendations</span>
            </li>
            <li className="flex items-center">
              <div className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white">Instant answers to financial aid questions</span>
            </li>
            <li className="flex items-center">
              <div className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white">Campus resource guidance</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-teal-500/10 to-green-500/10 p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-4">For Administrators</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white">Reduced administrative workload</span>
            </li>
            <li className="flex items-center">
              <div className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white">Insights into student questions and concerns</span>
            </li>
            <li className="flex items-center">
              <div className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white">Streamlined enrollment processes</span>
            </li>
            <li className="flex items-center">
              <div className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white">Improved communication efficiency</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-urban-dark-2 p-8 rounded-lg border border-white/10 my-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Integration Capabilities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="inline-block h-12 w-12 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mb-4">
              <FileText className="h-6 w-6" />
            </div>
            <h4 className="font-semibold">Learning Management Systems</h4>
            <p className="text-gray-300 text-sm mt-2">Canvas, Blackboard, Moodle</p>
          </div>
          <div className="text-center p-4">
            <div className="inline-block h-12 w-12 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 mb-4">
              <Table className="h-6 w-6" />
            </div>
            <h4 className="font-semibold">Student Information Systems</h4>
            <p className="text-gray-300 text-sm mt-2">Banner, Workday Student</p>
          </div>
          <div className="text-center p-4">
            <div className="inline-block h-12 w-12 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-4">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h4 className="font-semibold">Communication Tools</h4>
            <p className="text-gray-300 text-sm mt-2">Microsoft Teams, Slack</p>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-500/20 to-teal-500/20 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to transform your educational institution?</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">Join leading universities and schools already using UrbanChat.AI to enhance student experiences</p>
        <Button className="bg-green-500 hover:bg-green-600 px-6">Schedule a Demo</Button>
      </div>
    </PageLayout>
  );
};

export default Education;
