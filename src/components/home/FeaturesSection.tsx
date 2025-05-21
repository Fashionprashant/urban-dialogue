
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Check, Video, LineChart, Users, Settings, CalendarCheck, MessageSquare, FileText } from "lucide-react";

const features = [
  {
    icon: Check,
    title: "Effortless Filtering",
    description: "Find needles, not haystacks. Let AI filter, sort, and organize applicants—instantly."
  },
  {
    icon: FileText,
    title: "Precision Shortlisting",
    description: "Only the best surface. AI reads between the lines for experience, fit, and talent."
  },
  {
    icon: MessageSquare,
    title: "Always-On Responses",
    description: "Every candidate gets real, human-like replies—even on weekends and holidays."
  },
  {
    icon: Video,
    title: "Interview, Automated",
    description: "Live AI video interviews. Smart prompts, instant assessments, zero scheduling hassle."
  },
  {
    icon: Users,
    title: "Bias-Free Assessment",
    description: "Fair, evidence-backed rating on strengths, potential, and presence."
  },
  {
    icon: LineChart,
    title: "Actionable Insights",
    description: "See real results with visual analytics—your pipeline, progress, and wins."
  },
  {
    icon: CalendarCheck,
    title: "Schedule, Handled",
    description: "AI syncs, suggests slots, and eliminates back-and-forth for you and your team."
  },
  {
    icon: Settings,
    title: "Full Customization",
    description: "Build your dream recruiter—set tone, scripts, evaluation, and more. No code. Zero limits."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-urban-dark-2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-urban-purple/20 text-urban-purple hover:bg-urban-purple/30">
            Why UrbanRecruiter.AI
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Designed for the Modern Hiring Team
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            UrbanRecruiter.AI blends intelligence, automation, and deeply human understanding to help you build the team of tomorrow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <div className="mr-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-urban-purple to-urban-teal">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
