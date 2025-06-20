
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const JourneyView = () => {
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowQuote(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const journeyPoints = [
    {
      id: 1,
      icon: "📦",
      title: "Childhood: Roots in Tech",
      period: "Early Years",
      description: "Grew up around hardware, software, and early internet cafés. Always more curious than talkative — tech was how I expressed myself.",
      position: { x: 10, y: 80 },
      height: "low"
    },
    {
      id: 2,
      icon: "🎤",
      title: "Creative Fire",
      period: "2012–2017",
      description: "Built a social following through music. Released tracks on Facebook, SoundCloud, and YouTube under 'Platinum Posse.' Songs like Almost earned respect and emotional connection.",
      position: { x: 25, y: 40 },
      height: "high"
    },
    {
      id: 3,
      icon: "🔁",
      title: "The Pivot",
      period: "2018",
      description: "Realized music wouldn't sustain me in South Africa. Shifted focus from expression to structure — chasing stability while keeping my creativity alive.",
      position: { x: 40, y: 70 },
      height: "low"
    },
    {
      id: 4,
      icon: "🧪",
      title: "The Support Chapter",
      period: "2020–2024",
      description: "Joined 5CA. Learned to troubleshoot, explain technical concepts, and resolve complex issues. Mentored new hires. Built empathy and precision.",
      position: { x: 55, y: 55 },
      height: "medium"
    },
    {
      id: 5,
      icon: "⚡️",
      title: "The Unlock",
      period: "2024",
      description: "Vyvanse brought clarity and focus. I discovered no-code tools like Lovable, Figma, ChatGPT. For the first time, I could build what I imagined. I wasn't just supporting tech — I was creating with it.",
      position: { x: 75, y: 25 },
      height: "high"
    },
    {
      id: 6,
      icon: "🤖",
      title: "Building for Humans",
      period: "Now",
      description: "I'm building AI agents for small businesses. Designing tools that help people feel empowered. I want to create systems that are not just smart — but deeply human.",
      position: { x: 90, y: 15 },
      height: "highest"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated 3D Slope Background */}
      <div className="absolute inset-0">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          style={{ filter: 'drop-shadow(0 4px 20px rgba(147, 51, 234, 0.3))' }}
        >
          <defs>
            <linearGradient id="slopeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(88, 28, 135)" stopOpacity="0.8" />
              <stop offset="25%" stopColor="rgb(123, 58, 237)" stopOpacity="0.9" />
              <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.7" />
              <stop offset="75%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="rgb(37, 99, 235)" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="slopeBorder" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(168, 85, 247)" />
              <stop offset="50%" stopColor="rgb(139, 92, 246)" />
              <stop offset="100%" stopColor="rgb(96, 165, 250)" />
            </linearGradient>
          </defs>
          
          {/* Main flowing slope path */}
          <path
            d="M0,85 Q15,85 25,45 T40,75 Q50,75 55,60 T75,30 Q85,30 90,20 L100,15 L100,100 L0,100 Z"
            fill="url(#slopeGradient)"
            className="animate-pulse-slow"
          />
          
          {/* Top border of the slope */}
          <path
            d="M0,85 Q15,85 25,45 T40,75 Q50,75 55,60 T75,30 Q85,30 90,20 L100,15"
            fill="none"
            stroke="url(#slopeBorder)"
            strokeWidth="0.5"
            className="animate-float"
          />
        </svg>
      </div>

      {/* Journey Points */}
      <div className="relative z-10 h-screen">
        {journeyPoints.map((point, index) => (
          <div
            key={point.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
            style={{
              left: `${point.position.x}%`,
              top: `${point.position.y}%`,
              animationDelay: `${index * 0.3}s`
            }}
          >
            {/* Floating point indicator */}
            <div className="relative">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-float shadow-lg shadow-purple-500/50"></div>
              
              {/* Content card */}
              <Card className="absolute top-6 left-1/2 transform -translate-x-1/2 w-72 border-purple-700/50 bg-night-800/90 backdrop-blur-sm hover:bg-night-800/95 transition-all duration-300 hover:scale-105">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-xl">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-display">{point.title}</h3>
                      <p className="text-purple-300 font-medium text-sm">{point.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Quote */}
      {showQuote && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in">
          <Card className="max-w-2xl border-purple-600/50 bg-gradient-to-r from-night-800/95 to-purple-900/95 backdrop-blur-md shadow-2xl shadow-purple-500/20">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4 animate-float">✨</div>
              <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed font-display italic">
                "AI helped me bridge the gap between creativity and technology. 
                It showed me what a compelling experience <em className="text-purple-300">should</em> feel like — and how to build it."
              </blockquote>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-6"></div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Particle effects for ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default JourneyView;
