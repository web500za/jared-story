
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const CVView = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 animate-fade-in">
      <div className="bg-gradient-to-br from-night-800 to-night-900 rounded-xl shadow-2xl overflow-hidden border border-purple-700/30">
        
        {/* Contact Header */}
        <div className="bg-gradient-to-r from-purple-700 to-blue-700 text-white p-6">
          <div className="flex flex-wrap gap-6 text-purple-100 justify-center">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Cape Town, South Africa</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>jared.january@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={18} />
              <span>linkedin.com/in/jaredjanuary</span>
            </div>
            <div className="flex items-center gap-2">
              <Github size={18} />
              <span>github.com/jaredjanuary</span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8 text-white">
          {/* Professional Experience */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-6 border-b-2 border-purple-600 pb-2">Professional Experience</h2>
            <div className="space-y-6">
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">DigiCert</h3>
                      <p className="text-purple-300 font-medium">Technical Support Analyst</p>
                    </div>
                    <span className="text-blue-300 font-medium">Jun 2024–Present</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Enterprise-level technical support for PKI certificate management on CertCentral SaaS platform. 
                    Lead complex API integrations, ACME automation deployments, and enterprise onboarding during critical SaaS transitions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-gray-300">95%+ CSAT across 100+ enterprise clients</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span className="text-gray-300">Cross-functional collaboration with Product & Sales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span className="text-gray-300">API integration guidance & automation setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      <span className="text-gray-300">Enterprise SaaS subscription transitions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">5CA (Golf Clash SaaS)</h3>
                      <p className="text-purple-300 font-medium">Technical Support Specialist</p>
                    </div>
                    <span className="text-blue-300 font-medium">Apr 2020–Apr 2024</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Tier 2 technical support for mobile gaming SaaS platform serving millions of users. 
                    Specialized in performance optimization, data synchronization, and account management. Mentored junior team members and contributed to internal tooling improvements.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="text-xs bg-night-700 text-purple-300 px-2 py-1 rounded">45 tickets/day average</span>
                    <span className="text-xs bg-night-700 text-blue-300 px-2 py-1 rounded">90%+ satisfaction rate</span>
                    <span className="text-xs bg-night-700 text-green-300 px-2 py-1 rounded">Team mentoring & training</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technical Skills & Projects */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-6 border-b-2 border-purple-600 pb-2">Technical Expertise & Innovation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-lg">🚀</span>
                    AI Agent Development
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">Built intelligent automation for SMBs using ChatGPT, deployed via Replit & Vercel</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs">OpenAI API</Badge>
                    <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-xs">Replit</Badge>
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">Vercel</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-lg">⚡</span>
                    No-Code Automation
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">Created sophisticated workflows integrating Lovable, Figma, and deployment platforms</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs">Lovable</Badge>
                    <Badge className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs">Figma</Badge>
                    <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-xs">API Integration</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-lg">🔐</span>
                    PKI & DevOps Logic
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">Designed visual certificate lifecycle maps inspired by DevOps pipeline thinking</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs">PKI Systems</Badge>
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs">ACME Protocol</Badge>
                    <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-xs">Process Design</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-lg">🌐</span>
                    Interactive Deployments
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">Built and deployed interactive testing environments for user workflow validation</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">Vercel Deploy</Badge>
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs">UX Testing</Badge>
                    <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-xs">User Workflows</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Strengths */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-6 border-b-2 border-purple-600 pb-2">Core Strengths & Value</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-night-800/30 rounded-lg border border-purple-700/30">
                <span className="text-2xl">🗣️</span>
                <span className="text-gray-300">Transform complex technical concepts into clear, actionable guidance</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-night-800/30 rounded-lg border border-purple-700/30">
                <span className="text-2xl">🎨</span>
                <span className="text-gray-300">Creative problem-solving with security-first and user-centric approach</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-night-800/30 rounded-lg border border-purple-700/30">
                <span className="text-2xl">🤝</span>
                <span className="text-gray-300">Bridge technical and business teams through empathetic communication</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-night-800/30 rounded-lg border border-purple-700/30">
                <span className="text-2xl">⚙️</span>
                <span className="text-gray-300">Systems architect mindset with passion for building empowering tools</span>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-6 border-b-2 border-purple-600 pb-2">Certifications & Continuous Learning</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                  <span className="text-gray-300">AWS Cloud Practitioner (in progress)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-gray-300">Coursera: DevSecOps Essentials</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-gray-300">Salesforce Trailhead Admin Fundamentals</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="text-gray-300">Self-study: AI Agents Bootcamp</span>
                </div>
              </div>
            </div>
          </section>

          {/* Growing Into */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-6 border-b-2 border-purple-600 pb-2">Career Trajectory</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Technical Customer Success Manager", 
                "Implementation Engineer", 
                "DevOps Support Specialist", 
                "No-Code Solutions Consultant"
              ].map((role) => (
                <Badge key={role} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-4 py-2 text-sm">
                  {role}
                </Badge>
              ))}
            </div>
            <div className="mt-6 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-600/30">
              <p className="text-lg text-purple-200 italic leading-relaxed">
                "Currently seeking opportunities to merge technical expertise with creative problem-solving in customer-facing implementation and success roles. 
                Ready to help teams bridge the gap between complex technology and human-centered experiences."
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CVView;
