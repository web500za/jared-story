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
      color: "#6366F1", // Indigo-500
      mood: "discovery"
    },
    {
      id: 2,
      title: "Almost Solo Music Video",
      period: "2012",
      description: "Solo music video propels me into a cult following. Building an audience through raw creativity and authentic connection.",
      elevation: 45,
      color: "#EC4899", // Pink-500
      mood: "breakthrough"
    },
    {
      id: 3,
      title: "Creative Peak",
      period: "2012–2017",
      description: "Music career as 'Platinum Posse.' Built audience, earned respect through creativity on Facebook, SoundCloud, and YouTube.",
      elevation: 75,
      color: "#A855F7", // Purple-500
      mood: "triumph"
    },
    {
      id: 4,
      title: "Pivot from Music",
      period: "2018",
      description: "Realized music wouldn't sustain me in South Africa. Shifted focus from expression to structure — chasing stability while keeping creativity alive.",
      elevation: 35,
      color: "#F97316", // Orange-500
      mood: "transition"
    },
    {
      id: 5,
      title: "Mastery Building",
      period: "2020–2024",
      description: "5CA years. SaaS expertise, mentoring, problem-solving at scale. First wave of tech support that laid the foundation for the team structure that followed.",
      elevation: 55,
      color: "#3B82F6", // Blue-500
      mood: "growth"
    },
    {
      id: 6,
      title: "The Breakthrough",
      period: "2024",
      description: "Started troubleshooting my brain. ADHD medication changed my life and unlocked the gift of focus. AI + no-code fusion. Building what I imagine.",
      elevation: 85,
      color: "#EAB308", // Yellow-500
      mood: "transformation"
    },
    {
      id: 7,
      title: "Future Forward",
      period: "Now",
      description: "Technology, creativity and customer-facing work combine in this breakthrough era of no-code + solution engineering. Creating human-centered AI tools.",
      elevation: 95,
      color: "#22C55E", // Green-500
      mood: "aspiration"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
      
      // More accurate step calculation
      const stepIndex = Math.round(progress * (journeySteps.length - 1));
      setCurrentStep(Math.min(stepIndex, journeySteps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [journeySteps.length]);

  // Generate fixed stars with dramatic twinkling
  const generateStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 70,
      size: Math.random() * 3 + 1,
      brightness: Math.random() > 0.7 ? 'bright' : 'dim',
      twinkleDelay: Math.random() * 8 + 2 // 2-10 second delays for more dramatic effect
    }));
  };

  const stars = generateStars(80);

  return (
    <div className="min-h-[500vh] relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950">
      {/* Static Night Sky Background */}
      <div className="fixed inset-0 z-0">
        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute rounded-full ${star.brightness === 'bright' ? 'bg-purple-200' : 'bg-blue-200'}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.brightness === 'bright' ? 0.9 : 0.4,
              animation: `dramaticTwinkle ${star.twinkleDelay}s ease-in-out infinite`
            }}
          />
        ))}
        
        {/* Occasional shooting stars */}
        <div className="shooting-star" style={{ animationDelay: '5s' }} />
        <div className="shooting-star" style={{ animationDelay: '12s' }} />
        <div className="shooting-star" style={{ animationDelay: '20s' }} />
      </div>

      {/* Mountain Range */}
      <div className="fixed inset-0 z-10">
        <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(30, 27, 75)" stopOpacity="0.95" />
              <stop offset="40%" stopColor="rgb(45, 55, 72)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="rgb(26, 32, 44)" stopOpacity="0.85" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
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
                    x={Math.max(20, Math.min(780, 143 + (index * 143) - 150))}
                    y={Math.max(20, 520 - step.elevation * 3 - 140)}
                    width="300"
                    height="120"
                    className="animate-fade-in"
                  >
                    <div className="bg-slate-800/95 backdrop-blur-md rounded-xl p-4 border border-purple-700/50 text-white shadow-2xl">
                      <div className="text-lg font-bold mb-2 text-center" style={{ color: step.color }}>{step.title}</div>
                      <div className="text-sm text-purple-300 mb-3 text-center font-medium">{step.period}</div>
                      <div className="text-sm text-gray-300 leading-relaxed text-center">{step.description}</div>
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
        <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-30 max-w-2xl px-6 animate-fade-in">
          <div className="bg-slate-800/90 backdrop-blur-md rounded-xl p-6 border border-purple-700/50 shadow-2xl text-center">
            <blockquote className="text-lg font-medium text-white leading-relaxed italic">
              "AI helped me bridge the gap between creativity and technology. 
              It showed me what a compelling experience <em className="text-purple-300">should</em> feel like — and how to build it."
            </blockquote>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-green-400 mx-auto mt-4"></div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes dramaticTwinkle {
          0%, 95% { 
            opacity: 0.1; 
            transform: scale(1);
          }
          97% { 
            opacity: 1; 
            transform: scale(1.5);
          }
          100% { 
            opacity: 0.1; 
            transform: scale(1);
          }
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
          background: #A855F7;
          border-radius: 50%;
          animation: shooting 12s linear infinite;
          opacity: 0;
          top: 10%;
          right: 100%;
        }
        
        @keyframes shooting {
          0% {
            opacity: 0;
            transform: translate(0, 0) rotate(45deg);
          }
          5% {
            opacity: 1;
          }
          15% {
            opacity: 1;
          }
          20% {
            opacity: 0;
            transform: translate(-150vw, 150vh) rotate(45deg);
          }
          100% {
            opacity: 0;
            transform: translate(-150vw, 150vh) rotate(45deg);
          }
        }
        
        .shooting-star:before {
          content: '';
          position: absolute;
          width: 80px;
          height: 1px;
          background: linear-gradient(to right, #A855F7, transparent);
          transform: translateX(-80px) rotate(45deg);
        }
      `}</style>
    </div>
  );
};

export default JourneyViewNew;