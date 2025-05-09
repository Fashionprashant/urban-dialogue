
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact: React.FC = () => {
  return (
    <PageLayout 
      title="Contact Us" 
      subtitle="Get in touch with our team"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input id="name" placeholder="Your name" className="bg-white/5 border-white/10" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" type="email" placeholder="Your email" className="bg-white/5 border-white/10" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">Company</label>
              <Input id="company" placeholder="Your company" className="bg-white/5 border-white/10" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea id="message" placeholder="How can we help you?" className="bg-white/5 border-white/10" rows={5} />
            </div>
            
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">Send Message</Button>
          </form>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Offices</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-green-400">San Francisco</h4>
                <p className="text-gray-300 mt-1">123 Tech Avenue, Suite 400<br />San Francisco, CA 94107</p>
              </div>
              
              <div>
                <h4 className="font-medium text-green-400">New York</h4>
                <p className="text-gray-300 mt-1">456 Innovation Street<br />New York, NY 10013</p>
              </div>
              
              <div>
                <h4 className="font-medium text-green-400">London</h4>
                <p className="text-gray-300 mt-1">78 Digital Lane<br />London, EC2A 4NE<br />United Kingdom</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Email Us</h3>
            <p className="text-gray-300">
              General Inquiries: <a href="mailto:info@urbanchat.ai" className="text-green-400">info@urbanchat.ai</a><br />
              Support: <a href="mailto:support@urbanchat.ai" className="text-green-400">support@urbanchat.ai</a><br />
              Sales: <a href="mailto:sales@urbanchat.ai" className="text-green-400">sales@urbanchat.ai</a>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
