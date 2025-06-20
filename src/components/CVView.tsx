
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Linkedin } from "lucide-react";

const CVView = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-fade-in">
      <div className="bg-gradient-to-br from-night-800 to-night-900 rounded-xl shadow-2xl overflow-hidden border border-purple-700/30">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-700 to-blue-700 text-white p-8">
          <h1 className="text-4xl font-bold mb-2 font-display">Jared January</h1>
          <p className="text-xl mb-4 text-purple-100">Technical Customer Success & Implementation</p>
          
          <div className="flex flex-wrap gap-4 text-purple-100">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Cape Town, South Africa</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>jared.january@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <span>linkedin.com/in/jaredjanuary</span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8 text-white">
          {/* Professional Experience */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b-2 border-purple-600 pb-2">Professional Experience</h2>
            <div className="space-y-6">
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">DigiCert</h3>
                      <p className="text-purple-300">Technical Support Analyst</p>
                    </div>
                    <span className="text-blue-300 font-medium">Jun 2024–Present</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Provide technical support to enterprise clients on SaaS certificate management platform CertCentral. 
                    Guide API integration, ACME automation, and onboarding during SaaS subscription transition. 
                    Collaborate with product and sales teams to resolve complex issues. Maintained 95%+ CSAT from 100+ reviews.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">5CA (Golf Clash SaaS)</h3>
                      <p className="text-purple-300">Technical Support Specialist</p>
                    </div>
                    <span className="text-blue-300 font-medium">Apr 2020–Apr 2024</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Tier 2 support for a SaaS mobile game with millions of users. Managed performance, sync, and account issues. 
                    Mentored new hires and enhanced internal tooling. Averaged 45 tickets/day with 90%+ satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b-2 border-purple-600 pb-2">Projects & Personal Initiatives</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">AI Agent Development</h3>
                  <p className="text-gray-300 text-sm">Built AI agents for SMBs using ChatGPT, Replit, Vercel</p>
                </CardContent>
              </Card>
              
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">No-Code Workflows</h3>
                  <p className="text-gray-300 text-sm">Created workflows integrating Lovable, Figma, Replit</p>
                </CardContent>
              </Card>
              
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">DevOps Certificate Mapping</h3>
                  <p className="text-gray-300 text-sm">Designed visual DevOps-inspired certificate lifecycle logic maps</p>
                </CardContent>
              </Card>
              
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">Interactive Deployments</h3>
                  <p className="text-gray-300 text-sm">Deployed interactive mini-sites on Vercel to test user workflows</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Strengths */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b-2 border-purple-600 pb-2">Strengths & Superpowers</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-night-800/30 rounded-lg border border-purple-700/30">
                <span className="text-2xl">🗣️</span>
                <span className="text-gray-300">Translate complex tech into human terms</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-night-800/30 rounded-lg border border-purple-700/30">
                <span className="text-2xl">🎨</span>
                <span className="text-gray-300">Creative problem solving with security and UX focus</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-night-800/30 rounded-lg border border-purple-700/30">
                <span className="text-2xl">🤝</span>
                <span className="text-gray-300">Emotional intelligence and mentoring</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-night-800/30 rounded-lg border border-purple-700/30">
                <span className="text-2xl">⚙️</span>
                <span className="text-gray-300">Systems thinker with passion for empowerment through tools</span>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b-2 border-purple-600 pb-2">Certifications & Learning</h2>
            <div className="space-y-2">
              <p className="text-gray-300">• AWS Cloud Practitioner (in progress)</p>
              <p className="text-gray-300">• Coursera: DevSecOps Essentials</p>
              <p className="text-gray-300">• Salesforce Trailhead Admin Fundamentals</p>
              <p className="text-gray-300">• Self-study: AI Agents Bootcamp</p>
            </div>
          </section>

          {/* Growing Into */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b-2 border-purple-600 pb-2">Now Growing Into</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Technical CSM", "Implementation Engineer", "DevOps Support", "No-Code Consultant"
              ].map((role) => (
                <Badge key={role} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-3 py-1">
                  {role}
                </Badge>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CVView;
