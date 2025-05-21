
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, FileText, Video, CalendarCheck, LineChart, Check, Mail, Settings } from "lucide-react";

const useCases = [
  {
    title: "Automatic Email Filtering",
    description: "AI scans every inbound email for relevant job applications, removing spam and surfacing real talent instantly.",
    icon: Mail,
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "Candidate Qualification",
    description: "Shortlist top candidates with AI that analyzes resumes, experience, and your custom criteria.",
    icon: FileText,
    gradient: "from-green-500 to-emerald-400"
  },
  {
    title: "Automated Communication",
    description: "AI sends personalized replies and schedules interviews in real-time, keeping every candidate engaged.",
    icon: MessageSquare,
    gradient: "from-purple-600 to-indigo-500"
  },
  {
    title: "AI Video Interviews",
    description: "Let AI conduct interviews, ask tailored questions, and prompt camera-on for a true virtual recruiter experience.",
    icon: Video,
    gradient: "from-pink-500 to-orange-500"
  },
  {
    title: "Real-Time Behavioral Analysis",
    description: "AI tracks body language, lip sync, and sentiment to ensure authenticity and uncover true potential.",
    icon: Users,
    gradient: "from-amber-500 to-yellow-400"
  },
  {
    title: "Instant Interview Summaries",
    description: "Receive full transcripts, analytical scoring, and AI recommendations after every interview.",
    icon: LineChart,
    gradient: "from-red-500 to-pink-500"
  },
  {
    title: "Calendar Integration",
    description: "Seamlessly sync interviews and proposals with your calendar. AI matches times with instant precision.",
    icon: CalendarCheck,
    gradient: "from-teal-500 to-sky-400"
  },
  {
    title: "Funnel & Analytics",
    description: "Visualize your candidate pipeline at each stage—from application to hire. Spot bottlenecks. Improve outcomes.",
    icon: LineChart,
    gradient: "from-purple-300 to-blue-300"
  },
  {
    title: "Modular Management",
    description: "Unified dashboard, custom recruiter builder, team controls, analytics and settings—all in one place.",
    icon: Settings,
    gradient: "from-gray-600 to-gray-400"
  }
];

const UseCasesSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Unleash the Power of AI Recruiting
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Streamline hiring, save time, and make smarter decisions. This is the future of talent acquisition, delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="glass-morphism border-none hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${useCase.gradient}`}></div>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${useCase.gradient} text-white`}>
                    <useCase.icon size={24} />
                  </div>
                  <CardTitle>{useCase.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base">
                  {useCase.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
