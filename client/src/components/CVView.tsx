
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
                    Maintained enterprise customers post-onboarding, building deep trust through personalized service. Lead complex API integrations, ACME automation deployments, and CI/CD pipeline troubleshooting. Guided customers through SaaS/subscription pricing model transitions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-gray-300">95%+ CSAT across 350+ client reviews</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span className="text-gray-300">Escalation specialist for customer recovery situations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span className="text-gray-300">API integration, CI/CD setup & automation troubleshooting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      <span className="text-gray-300">SaaS subscription transition guidance & support</span>
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
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Tier 2 technical support for mobile gaming SaaS platform serving millions of users. 
                    Specialized in performance optimization, data synchronization, and account management. First wave of tech support that laid the foundation for the team structure that followed.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-gray-300">45 tickets/day average resolution</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span className="text-gray-300">90%+ customer satisfaction rate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span className="text-gray-300">Team mentoring & junior staff training</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      <span className="text-gray-300">Cross-platform account synchronization expertise</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technical Skills & Projects */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-6 border-b-2 border-purple-600 pb-2">Technical Expertise & Customer Experience</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-lg">🤝</span>
                    Customer Experience Mastery
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">Deep understanding of full customer journey through Salesforce CRM insights, retention patterns, and proactive experience optimization</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-night-700 text-gray-300 text-xs border border-purple-700/30">Salesforce CRM</Badge>
                    <Badge className="bg-night-700 text-gray-300 text-xs border border-purple-700/30">Customer Retention</Badge>
                    <Badge className="bg-night-700 text-gray-300 text-xs border border-purple-700/30">Experience Design</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-lg">🤖</span>
                    AI Agent Development
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">Built intelligent automation for SMBs using ChatGPT, deployed via Replit & Vercel</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-night-700 text-gray-300 text-xs border border-purple-700/30">OpenAI API</Badge>
                    <Badge className="bg-night-700 text-gray-300 text-xs border border-purple-700/30">Replit</Badge>
                    <Badge className="bg-night-700 text-gray-300 text-xs border border-purple-700/30">Vercel</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-lg">⚡</span>
                    Personal No-Code Projects
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">Created sophisticated personal workflows integrating Lovable, Figma, and deployment platforms for learning and experimentation</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-night-700 text-gray-300 text-xs border border-purple-700/30">Lovable</Badge>
                    <Badge className="bg-night-700 text-gray-300 text-xs border border-purple-700/30">Figma</Badge>
                    <Badge className="bg-night-700 text-gray-300 text-xs border border-purple-700/30">API Integration</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-lg">🔐</span>
                    PKI Certificate Management
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">Designed visual certificate lifecycle maps and streamlined complex PKI processes for enterprise clients</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-night-700 text-gray-300 text-xs border border-purple-700/30">PKI Systems</Badge>
                    <Badge className="bg-night-700 text-gray-300 text-xs border border-purple-700/30">ACME Protocol</Badge>
                    <Badge className="bg-night-700 text-gray-300 text-xs border border-purple-700/30">Process Design</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Core Value Proposition */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-6 border-b-2 border-purple-600 pb-2">Core Value & Impact</h2>
            <div className="grid gap-6">
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl mb-4">🎯</div>
                    <h3 className="text-xl font-semibold text-white mb-3">Creative Problem Solver & Experience Designer</h3>
                    <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
                      Four years in customer support taught me what exceptional experiences look like — and critically, 
                      what below-par experiences feel like. I want to build proprietary solutions that improve products for both 
                      front-end and back-end operations. My approach: map entire business operations like SimCity, 
                      identify optimization points, then create creative solutions that enhance the customer experience at every touchpoint.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
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
                  <span className="text-2xl">🔄</span>
                  <span className="text-gray-300">Be the bridge between the technical and non-technical (teams and users)</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-night-800/30 rounded-lg border border-purple-700/30">
                  <span className="text-2xl">⚙️</span>
                  <span className="text-gray-300">Systems architect mindset with passion for building empowering tools</span>
                </div>
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

          {/* Career Evolution */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-6 border-b-2 border-purple-600 pb-2">Career Evolution Path</h2>
            
            {/* Visual journey flow */}
            <div className="relative mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">1</div>
                  <div className="text-sm text-gray-300">Support Specialist</div>
                  <div className="text-xs text-purple-400">Foundation Built</div>
                </div>
                
                <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-4"></div>
                
                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">2</div>
                  <div className="text-sm text-gray-300">Technical Success</div>
                  <div className="text-xs text-purple-400">Current Growth</div>
                </div>
                
                <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-600 to-green-600 mx-4"></div>
                
                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">3</div>
                  <div className="text-sm text-gray-300">Product Innovation</div>
                  <div className="text-xs text-green-400">Next Chapter</div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-white mb-3">Immediate Opportunities</h3>
                  <div className="space-y-2">
                    {[
                      "Customer Experience Engineer", 
                      "Implementation Engineer", 
                      "SaaS Creator"
                    ].map((role) => (
                      <div key={role} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span className="text-gray-300 text-sm">{role}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-purple-700/50 bg-night-800/50">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-white mb-3">Future Vision</h3>
                  <div className="space-y-2">
                    {[
                      "No-Code Solutions Consultant",
                      "Product Implementation Lead", 
                      "Customer Experience Architect"
                    ].map((role) => (
                      <div key={role} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        <span className="text-gray-300 text-sm">{role}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-600/30">
              <p className="text-lg text-purple-200 italic leading-relaxed text-center">
                "Ready to transition from supporting great products to building them. 
                Four years of customer insights + technical skills + creative problem-solving = 
                the perfect foundation for product-focused roles."
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CVView;
