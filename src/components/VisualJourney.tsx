
import { Card, CardContent } from "@/components/ui/card";

const VisualJourney = () => {
  const journeySteps = [
    {
      icon: "📦",
      title: "Childhood: Roots in Tech",
      period: "Early Years",
      description: "Grew up around hardware, software, and early internet cafés. Always more curious than talkative — tech was how I expressed myself.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: "🎤",
      title: "Creative Fire",
      period: "2012–2017",
      description: "Built a social following through music. Released tracks on Facebook, SoundCloud, and YouTube under 'Platinum Posse.' Songs like Almost earned respect and emotional connection.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: "🔁",
      title: "The Pivot",
      period: "2018",
      description: "Realized music wouldn't sustain me in South Africa. Shifted focus from expression to structure — chasing stability while keeping my creativity alive.",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: "🧪",
      title: "The Support Chapter",
      period: "2020–2024",
      description: "Joined 5CA. Learned to troubleshoot, explain technical concepts, and resolve complex issues. Mentored new hires. Built empathy and precision.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: "⚡️",
      title: "The Unlock",
      period: "2024",
      description: "Vyvanse brought clarity and focus. I discovered no-code tools like Lovable, Figma, ChatGPT. For the first time, I could build what I imagined. I wasn't just supporting tech — I was creating with it.",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: "🤖",
      title: "Building for Humans",
      period: "Now",
      description: "I'm building AI agents for small businesses. Designing tools that help people feel empowered. I want to create systems that are not just smart — but deeply human.",
      color: "from-warm-400 to-warm-600"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block p-8 bg-white rounded-2xl shadow-lg mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-warm-400 to-earth-600 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto">
            👋
          </div>
          <h2 className="text-3xl font-bold text-earth-900 mb-4 font-display">My Journey</h2>
          <p className="text-earth-700 max-w-2xl mx-auto">
            From music to tech support to AI innovation — this is the story of finding my path 
            through creativity, systems thinking, and the belief that technology should feel human.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-warm-300 via-earth-400 to-warm-600 h-full hidden lg:block"></div>

        <div className="space-y-12">
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-warm-500 rounded-full z-10"></div>

              {/* Content Card */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                <Card className="border-warm-200 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in">
                  <CardContent className="p-6">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-2xl`}>
                        {step.icon}
                      </div>
                      <div className={index % 2 === 0 ? '' : 'lg:text-right'}>
                        <h3 className="text-xl font-bold text-earth-900 font-display">{step.title}</h3>
                        <p className="text-warm-700 font-medium">{step.period}</p>
                      </div>
                    </div>
                    <p className="text-earth-700 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden lg:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Highlight Quote */}
      <div className="mt-20 text-center">
        <Card className="max-w-4xl mx-auto border-warm-300 shadow-xl bg-gradient-to-br from-white to-warm-50">
          <CardContent className="p-12">
            <div className="text-6xl mb-6">✨</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-earth-800 leading-relaxed font-display italic">
              "AI helped me bridge the gap between creativity and technology. 
              It showed me what a compelling experience <em>should</em> feel like — and how to build it."
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-warm-400 to-earth-600 mx-auto mt-8"></div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Card className="max-w-2xl mx-auto border-warm-300 bg-gradient-to-br from-warm-600 to-earth-700 text-white">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 font-display">Ready to Build Something Amazing?</h3>
            <p className="text-warm-100 mb-6">
              I'm looking for opportunities in Technical Customer Success, Implementation Engineering, 
              and DevOps Support where I can blend technical expertise with human-centered design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:jared.january@gmail.com" 
                className="bg-white text-earth-800 px-6 py-3 rounded-lg font-medium hover:bg-warm-100 transition-colors duration-200"
              >
                Get in Touch
              </a>
              <a 
                href="https://linkedin.com/in/jaredjanuary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-earth-800 transition-colors duration-200"
              >
                Connect on LinkedIn
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisualJourney;
