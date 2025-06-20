import { useState, useEffect } from "react";

const JourneyViewNew = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const journeySteps = [
    {
      id: 1,
      title: "Tech Early Roots",
      period: "Early Years",
      description: "PS1, PS2, World of Warcraft adventures. Jailbreaking iPhones, rooting Androids. Hardware, software, internet cafés. Curiosity over conversation.",
      elevation: 25,
      color: "#4F46E5", // Indigo
      mood: "discovery"
    },
    {
      id: 2,
      title: "Almost Solo Music Video",
      period: "2012",
      description: "Solo music video propels me into a cult following. Building an audience through raw creativity and authentic connection.",
      elevation: 45,
      color: "#EC4899", // Pink
      mood: "breakthrough"
    },
    {
      id: 3,
      title: "Creative Peak",
      period: "2012–2017",
      description: "Music career as 'Platinum Posse.' Built audience, earned respect through creativity on Facebook, SoundCloud, and YouTube.",
      elevation: 75,
      color: "#8B5CF6", // Purple
      mood: "triumph"
    },
    {
      id: 4,
      title: "Pivot from Music",
      period: "2018",
      description: "Realized music wouldn't sustain me in South Africa. Shifted focus from expression to structure — chasing stability while keeping creativity alive.",
      elevation: 35,
      color: "#F97316", // Orange
      mood: "transition"
    },
    {
      id: 5,
      title: "Mastery Building",
      period: "2020–2024",
      description: "5CA years. SaaS expertise, mentoring, problem-solving at scale. First wave of tech support that laid the foundation for the team structure that followed.",
      elevation: 55,
      color: "#3B82F6", // Blue
      mood: "growth"
    },
    {
      id: 6,
      title: "The Breakthrough",
      period: "2024",
      description: "Started troubleshooting my brain. ADHD medication changed my life and unlocked the gift of focus. AI + no-code fusion. Building what I imagine.",
      elevation: 85,
      color: "#F59E0B", // Amber
      mood: "transformation"
    },
    {
      id: 7,
      title: "Future Forward",
      period: "Now",
      description: "Technology, creativity and customer-facing work combine in this breakthrough era of no-code + solution engineering. Creating human-centered AI tools.",
      elevation: 95,
      color: "#10B981", // Emerald
      mood: "aspiration"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
      
      const stepIndex = Math.floor(progress * journeySteps.length);
      setCurrentStep(Math.min(stepIndex, journeySteps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [journeySteps.length]);

  // Generate random stars
  const generateStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 60,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleDelay: Math.random() * 3
    }));
  };

  const stars = generateStars(100);

  return (
    <div className="min-h-[500vh] relative overflow-hidden">
      {/* Night Sky Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `twinkle 3s ease-in-out infinite ${star.twinkleDelay}s`
            }}
          />
        ))}
        
        {/* Shooting stars */}
        <div className="shooting-star" style={{ animationDelay: '2s' }} />
        <div className="shooting-star" style={{ animationDelay: '8s' }} />
        <div className="shooting-star" style={{ animationDelay: '15s' }} />
      </div>

      {/* Mountain Range */}
      <div className="fixed inset-0 z-1">
        <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(15, 23, 42)" stopOpacity="0.9" />
              <stop offset="50%" stopColor="rgb(30, 41, 59)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="rgb(51, 65, 85)" stopOpacity="0.7" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Smooth mountain path */}
          <path
            d={`M0,520 
                C50,${520 - journeySteps[0].elevation * 3} 120,${520 - journeySteps[0].elevation * 3} 143,${520 - journeySteps[0].elevation * 3}
                C170,${520 - journeySteps[1].elevation * 3} 260,${520 - journeySteps[1].elevation * 3} 286,${520 - journeySteps[1].elevation * 3}
                C320,${520 - journeySteps[2].elevation * 3} 400,${520 - journeySteps[2].elevation * 3} 429,${520 - journeySteps[2].elevation * 3}
                C460,${520 - journeySteps[3].elevation * 3} 540,${520 - journeySteps[3].elevation * 3} 571,${520 - journeySteps[3].elevation * 3}
                C600,${520 - journeySteps[4].elevation * 3} 680,${520 - journeySteps[4].elevation * 3} 714,${520 - journeySteps[4].elevation * 3}
                C750,${520 - journeySteps[5].elevation * 3} 820,${520 - journeySteps[5].elevation * 3} 857,${520 - journeySteps[5].elevation * 3}
                C890,${520 - journeySteps[6].elevation * 3} 970,${520 - journeySteps[6].elevation * 3} 1000,${520 - journeySteps[6].elevation * 3}
                L1000,600 L0,600 Z`}
            fill="url(#mountainGradient)"
            className="transition-all duration-1000"
          />
          
          {/* Glowing progress line */}
          <path
            d={`M0,520 
                C50,${520 - journeySteps[0].elevation * 3} 120,${520 - journeySteps[0].elevation * 3} 143,${520 - journeySteps[0].elevation * 3}
                C170,${520 - journeySteps[1].elevation * 3} 260,${520 - journeySteps[1].elevation * 3} 286,${520 - journeySteps[1].elevation * 3}
                C320,${520 - journeySteps[2].elevation * 3} 400,${520 - journeySteps[2].elevation * 3} 429,${520 - journeySteps[2].elevation * 3}
                C460,${520 - journeySteps[3].elevation * 3} 540,${520 - journeySteps[3].elevation * 3} 571,${520 - journeySteps[3].elevation * 3}
                C600,${520 - journeySteps[4].elevation * 3} 680,${520 - journeySteps[4].elevation * 3} 714,${520 - journeySteps[4].elevation * 3}
                C750,${520 - journeySteps[5].elevation * 3} 820,${520 - journeySteps[5].elevation * 3} 857,${520 - journeySteps[5].elevation * 3}
                C890,${520 - journeySteps[6].elevation * 3} 970,${520 - journeySteps[6].elevation * 3} 1000,${520 - journeySteps[6].elevation * 3}`}
            fill="none"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="2"
            strokeDasharray={`${scrollProgress * 2500} 2500`}
            filter="url(#glow)"
            className="transition-all duration-500 ease-out"
          />

          {/* Journey points */}
          {journeySteps.map((step, index) => {
            const isActive = index === currentStep;
            const isPassed = index < currentStep;
            
            return (
              <g key={step.id}>
                <circle
                  cx={143 + (index * 143)}
                  cy={520 - step.elevation * 3}
                  r={isActive ? "8" : "6"}
                  fill={step.color}
                  className={`transition-all duration-500 ${
                    isPassed || isActive ? 'opacity-100' : 'opacity-30'
                  }`}
                  filter={isActive ? "url(#glow)" : "none"}
                />
                
                {/* Story tooltip above each point */}
                {isActive && (
                  <foreignObject
                    x={143 + (index * 143) - 120}
                    y={520 - step.elevation * 3 - 120}
                    width="240"
                    height="100"
                    className="animate-fade-in"
                  >
                    <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-slate-600/50 text-white text-center shadow-xl">
                      <div className="text-sm font-semibold mb-1" style={{ color: step.color }}>{step.title}</div>
                      <div className="text-xs text-slate-300 mb-2">{step.period}</div>
                      <div className="text-xs text-slate-200 leading-relaxed">{step.description}</div>
                    </div>
                  </foreignObject>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Quote at the end */}
      {currentStep === journeySteps.length - 1 && (
        <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-20 max-w-2xl px-6 animate-fade-in">
          <div className="bg-slate-800/80 backdrop-blur-md rounded-lg p-6 border border-slate-600/30 shadow-2xl text-center">
            <blockquote className="text-lg font-medium text-white leading-relaxed italic">
              "AI helped me bridge the gap between creativity and technology. 
              It showed me what a compelling experience <em className="text-purple-300">should</em> feel like — and how to build it."
            </blockquote>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-green-400 mx-auto mt-4"></div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: shooting 8s linear infinite;
          opacity: 0;
        }
        
        @keyframes shooting {
          0% {
            opacity: 0;
            transform: translate(100vw, 0) rotate(45deg);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(-100px, 100px) rotate(45deg);
          }
        }
        
        .shooting-star:before {
          content: '';
          position: absolute;
          width: 50px;
          height: 1px;
          background: linear-gradient(to right, white, transparent);
          transform: translateX(-50px) rotate(45deg);
        }
      `}</style>
    </div>
  );
};

export default JourneyViewNew;