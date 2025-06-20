
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const JourneyView = () => {
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowQuote(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const journeyPoints = [
    {
      id: 1,
      icon: "📦",
      title: "Tech Roots",
      period: "Early Years",
      description: "Hardware, software, internet cafés. Curiosity over conversation.",
      position: { x: 15, y: 85 },
      color: "from-gray-600 to-blue-600"
    },
    {
      id: 2,
      icon: "🎤",
      title: "Creative Peak",
      period: "2012–2017",
      description: "Music career as 'Platinum Posse.' Built audience, earned respect through creativity.",
      position: { x: 30, y: 65 },
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      icon: "🔄",
      title: "Reality Check",
      period: "2018",
      description: "Pivoted from music to sustainable tech career. Creativity + stability.",
      position: { x: 45, y: 75 },
      color: "from-orange-600 to-red-600"
    },
    {
      id: 4,
      icon: "🔧",
      title: "Mastery Building",
      period: "2020–2024",
      description: "5CA years. SaaS expertise, mentoring, problem-solving at scale.",
      position: { x: 60, y: 55 },
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 5,
      icon: "⚡",
      title: "The Breakthrough",
      period: "2024",
      description: "Focus unlocked. AI + no-code fusion. Building what I imagine.",
      position: { x: 75, y: 35 },
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      icon: "🚀",
      title: "Future Forward",
      period: "Now",
      description: "Creating human-centered AI tools. Technical + Creative + Empowering.",
      position: { x: 90, y: 15 },
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Simplified upward slope */}
      <div className="absolute inset-0">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="upwardSlope" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(75, 85, 99)" stopOpacity="0.4" />
              <stop offset="25%" stopColor="rgb(139, 92, 246)" stopOpacity="0.5" />
              <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
              <stop offset="75%" stopColor="rgb(34, 197, 94)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          <path
            d="M0,90 Q20,88 30,70 T45,80 Q55,80 60,60 T75,40 Q85,40 90,20 L100,15 L100,100 L0,100 Z"
            fill="url(#upwardSlope)"
            className="animate-pulse-slow"
          />
          
          <path
            d="M0,90 Q20,88 30,70 T45,80 Q55,80 60,60 T75,40 Q85,40 90,20 L100,15"
            fill="none"
            stroke="url(#upwardSlope)"
            strokeWidth="0.3"
            className="animate-float"
          />
        </svg>
      </div>

      {/* Journey points - simplified */}
      <div className="relative z-10 h-screen p-8">
        {journeyPoints.map((point, index) => (
          <div
            key={point.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
            style={{
              left: `${point.position.x}%`,
              top: `${point.position.y}%`,
              animationDelay: `${index * 0.4}s`
            }}
          >
            {/* Glowing point */}
            <div className="relative group">
              <div className={`w-6 h-6 bg-gradient-to-r ${point.color} rounded-full animate-float shadow-lg`}
                   style={{ animationDelay: `${index * 0.5}s` }}>
              </div>
              
              {/* Hover card - cleaner */}
              <Card className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64 opacity-0 group-hover:opacity-100 transition-all duration-300 border-purple-700/50 bg-night-800/95 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 bg-gradient-to-br ${point.color} rounded-full flex items-center justify-center text-lg`}>
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{point.title}</h3>
                      <p className="text-purple-300 text-xs">{point.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{point.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Floating quote - positioned better */}
      {showQuote && (
        <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in max-w-3xl px-6">
          <Card className="border-purple-600/50 bg-gradient-to-r from-night-800/98 to-purple-900/98 backdrop-blur-md shadow-2xl">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4 animate-float">✨</div>
              <blockquote className="text-lg md:text-xl font-medium text-white leading-relaxed italic">
                "AI helped me bridge the gap between creativity and technology. 
                It showed me what a compelling experience <em className="text-purple-300">should</em> feel like — and how to build it."
              </blockquote>
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-green-400 mx-auto mt-4"></div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default JourneyView;
