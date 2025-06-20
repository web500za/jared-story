
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Linkedin } from "lucide-react";

const TraditionalResume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-warm-600 to-earth-600 text-white p-8">
          <h1 className="text-4xl font-bold mb-2 font-display">Jared January</h1>
          <p className="text-xl mb-4 text-warm-100">Technical Customer Success & Implementation</p>
          
          <div className="flex flex-wrap gap-4 text-warm-100">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Cape Town</span>
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

        <div className="p-8 space-y-8">
          {/* Summary */}
          <section>
            <h2 className="text-2xl font-bold text-earth-900 mb-4 border-b-2 border-warm-300 pb-2">Summary</h2>
            <p className="text-earth-700 leading-relaxed">
              Technical Support Analyst pivoting into Technical Customer Success, Implementation, and DevOps-adjacent roles. 
              Experienced in SaaS tools, certificate management systems, automation, and no-code platforms. 
              Passionate about building experiences that feel both intelligent and human.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-earth-900 mb-4 border-b-2 border-warm-300 pb-2">Experience</h2>
            <div className="space-y-6">
              <Card className="border-warm-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-earth-900">DigiCert</h3>
                      <p className="text-warm-700">Technical Support Analyst</p>
                    </div>
                    <span className="text-earth-600 font-medium">2024–Present</span>
                  </div>
                  <p className="text-earth-700">
                    SaaS support for PKI systems, ACME automation, API guidance, and subscription onboarding. 
                    95%+ CSAT from 100+ clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-warm-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-earth-900">5CA</h3>
                      <p className="text-warm-700">Technical Support Specialist</p>
                    </div>
                    <span className="text-earth-600 font-medium">2020–2024</span>
                  </div>
                  <p className="text-earth-700">
                    Tier 2 SaaS support for Golf Clash. Mentored new hires, resolved high-volume tickets, 
                    contributed to tooling feedback loops.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold text-earth-900 mb-4 border-b-2 border-warm-300 pb-2">Projects</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-warm-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-earth-900 mb-2">AI Agent Development</h3>
                  <p className="text-earth-700 text-sm">Built AI agents for SMBs using ChatGPT, Replit, Vercel</p>
                </CardContent>
              </Card>
              
              <Card className="border-warm-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-earth-900 mb-2">No-Code Workflows</h3>
                  <p className="text-earth-700 text-sm">Created workflows with Lovable, Figma, and Replit</p>
                </CardContent>
              </Card>
              
              <Card className="border-warm-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-earth-900 mb-2">Certificate Lifecycle Mapping</h3>
                  <p className="text-earth-700 text-sm">Mapped certificate logic visually (inspired by DevOps pipelines)</p>
                </CardContent>
              </Card>
              
              <Card className="border-warm-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-earth-900 mb-2">Interactive Site Deployment</h3>
                  <p className="text-earth-700 text-sm">Deployed interactive sites via Vercel to test user input flow</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold text-earth-900 mb-4 border-b-2 border-warm-300 pb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "API Support", "Automation", "SaaS Onboarding", "Rule-based Logic", 
                "ACME", "CertCentral", "ChatGPT", "Lovable", "Figma", "Replit", 
                "Vercel", "Salesforce (basic)", "Bash (basic)", "CSV/JSON/XML"
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-warm-100 text-earth-800 hover:bg-warm-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold text-earth-900 mb-4 border-b-2 border-warm-300 pb-2">Certifications</h2>
            <div className="space-y-2">
              <p className="text-earth-700">• AWS Cloud Practitioner (in progress)</p>
              <p className="text-earth-700">• DevSecOps Essentials (Coursera)</p>
              <p className="text-earth-700">• Salesforce Trailhead Admin (ongoing)</p>
              <p className="text-earth-700">• Building AI Agents (self-study)</p>
            </div>
          </section>

          {/* Growing Into */}
          <section>
            <h2 className="text-2xl font-bold text-earth-900 mb-4 border-b-2 border-warm-300 pb-2">Now Growing Into</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Technical CSM", "Implementation Engineer", "DevOps Support", "No-Code Consultant"
              ].map((role) => (
                <Badge key={role} className="bg-warm-600 text-white hover:bg-warm-700 px-3 py-1">
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

export default TraditionalResume;
