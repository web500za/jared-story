import { useState, useEffect, useRef } from "react";

const JourneyViewNew = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  const journeySteps = [
    {
      title: "Tech Early Roots",
      period: "Early Years",
      description: "PS1, PS2, World of Warcraft adventures. Jailbreaking iPhones, rooting Androids. Hardware, software, internet cafés. Curiosity over conversation.",
      x: 5,
      y: 80,
      color: "#00D2FF"
    },
    {
      title: "Start Platinum Posse",
      period: "2012",
      description: "Beginning my music journey as Platinum Posse. Building creative foundations and learning the craft of music production.",
      x: 15,
      y: 70,
      color: "#8B5CF6"
    },
    {
      title: "Almost Music Video",
      period: "2016",
      description: "Solo music video propels me into a cult following. Building an audience through raw creativity and authentic connection.",
      x: 25,
      y: 55,
      color: "#FF1744"
    },
    {
      title: "Creative Peak",
      period: "2017",
      description: "Music career reaching its highest point. Earned respect through creativity on Facebook, SoundCloud, and YouTube.",
      x: 35,
      y: 20,
      color: "#E91E63"
    },
    {
      title: "Pivot from Music",
      period: "2018",
      description: "Realized music wouldn't sustain me in South Africa. Shifted focus from expression to structure — chasing stability while keeping creativity alive.",
      x: 50,
      y: 75,
      color: "#FF9800"
    },
    {
      title: "Learning Phase",
      period: "2019",
      description: "Transitioning into tech. Learning new skills, adapting to different environments, and finding my place in the technology world.",
      x: 60,
      y: 60,
      color: "#2196F3"
    },
    {
      title: "Mastery Building",
      period: "2020–2024",
      description: "5CA years. SaaS expertise, mentoring, problem-solving at scale. First wave of tech support that laid the foundation for the team structure that followed.",
      x: 70,
      y: 35,
      color: "#3F51B5"
    },
    {
      title: "The Breakthrough",
      period: "2024",
      description: "Started troubleshooting my brain. ADHD medication changed my life and unlocked the gift of focus. AI + no-code fusion. Building what I imagine.",
      x: 85,
      y: 15,
      color: "#FFEB3B"
    },
    {
      title: "Future Forward",
      period: "Now",
      description: "Technology, creativity and customer-facing work combine in this breakthrough era of no-code + solution engineering. Creating human-centered AI tools.",
      x: 95,
      y: 5,
      color: "#4CAF50"
    }
  ];

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      setIsScrolling(true);
      
      if (e.deltaY > 0 && currentStep < journeySteps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else if (e.deltaY < 0 && currentStep > 0) {
        setCurrentStep(prev => prev - 1);
      }
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentStep < journeySteps.length - 1) {
        e.preventDefault();
        setCurrentStep(prev => prev + 1);
      } else if (e.key === 'ArrowUp' && currentStep > 0) {
        e.preventDefault();
        setCurrentStep(prev => prev - 1);
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(scrollTimeout);
    };
  }, [currentStep, isScrolling, journeySteps.length]);

  // Fixed star field
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 40,
    size: Math.random() > 0.9 ? 2 : 1,
    opacity: Math.random() * 0.8 + 0.2,
    twinkleDelay: Math.random() * 15 + 5
  }));

  const generateMountainPath = () => {
    let path = `M0,90`;
    
    journeySteps.forEach((step, index) => {
      if (index === 0) {
        path += ` L${step.x},${step.y}`;
      } else {
        const prevStep = journeySteps[index - 1];
        const midX = (prevStep.x + step.x) / 2;
        path += ` Q${midX},${Math.min(prevStep.y, step.y) - 5} ${step.x},${step.y}`;
      }
    });
    
    path += ` L100,${journeySteps[journeySteps.length - 1].y} L100,100 L0,100 Z`;
    return path;
  };

  const generateProgressPath = () => {
    if (currentStep === 0) return `M0,90 L${journeySteps[0].x},${journeySteps[0].y}`;
    
    let path = `M0,90 L${journeySteps[0].x},${journeySteps[0].y}`;
    
    for (let i = 1; i <= currentStep; i++) {
      const prevStep = journeySteps[i - 1];
      const currentStepData = journeySteps[i];
      const midX = (prevStep.x + currentStepData.x) / 2;
      path += ` Q${midX},${Math.min(prevStep.y, currentStepData.y) - 5} ${currentStepData.x},${currentStepData.y}`;
    }
    
    return path;
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden bg-black"
      style={{ height: '100vh' }}
    >
      {/* Starfield Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `slowTwinkle ${star.twinkleDelay}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      {/* Mountain Graph */}
      <div className="absolute inset-0 z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f0f23" />
              <stop offset="30%" stopColor="#1a1a2e" />
              <stop offset="70%" stopColor="#16213e" />
              <stop offset="100%" stopColor="#0f3460" />
            </linearGradient>
            
            <filter id="neonGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            <filter id="lineGlow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Mountain silhouette */}
          <path
            d={generateMountainPath()}
            fill="url(#mountainGradient)"
            opacity="0.9"
          />
          
          {/* Animated progress line */}
          <path
            d={generateProgressPath()}
            fill="none"
            stroke="#00D2FF"
            strokeWidth="0.5"
            filter="url(#lineGlow)"
            className="transition-all duration-1000 ease-out"
          />

          {/* Journey touchpoints */}
          {journeySteps.map((step, index) => (
            <g key={index}>
              <circle
                cx={step.x}
                cy={step.y}
                r={index === currentStep ? "2" : index <= currentStep ? "1.5" : "1"}
                fill={step.color}
                opacity={index <= currentStep ? 1 : 0.4}
                filter={index === currentStep ? "url(#neonGlow)" : "none"}
                className="transition-all duration-800 ease-out"
              />
              {index === currentStep && (
                <circle
                  cx={step.x}
                  cy={step.y}
                  r="3"
                  fill="none"
                  stroke={step.color}
                  strokeWidth="0.3"
                  opacity="0.6"
                  className="animate-ping"
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Full-height story card */}
      <div className="absolute inset-0 z-20 flex items-center justify-center p-8">
        <div 
          className="w-full max-w-4xl h-full flex flex-col justify-center transition-all duration-1000 ease-out"
          key={currentStep}
        >
          <div className="bg-gray-900/80 backdrop-blur-lg rounded-3xl p-12 border border-gray-700/50 text-center transform transition-all duration-1000 ease-out">
            <div 
              className="w-4 h-4 rounded-full mx-auto mb-8 animate-pulse"
              style={{ backgroundColor: journeySteps[currentStep]?.color }}
            />
            
            <h1 
              className="text-5xl font-bold mb-4 transition-colors duration-700"
              style={{ color: journeySteps[currentStep]?.color }}
            >
              {journeySteps[currentStep]?.title}
            </h1>
            
            <p className="text-2xl text-gray-300 mb-8 font-light">
              {journeySteps[currentStep]?.period}
            </p>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              {journeySteps[currentStep]?.description}
            </p>
            
            {/* Step indicator */}
            <div className="flex justify-center mt-12 space-x-3">
              {journeySteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    index === currentStep 
                      ? 'scale-125 opacity-100' 
                      : index < currentStep 
                        ? 'opacity-70' 
                        : 'opacity-30'
                  }`}
                  style={{ 
                    backgroundColor: index <= currentStep ? journeySteps[index].color : '#4B5563'
                  }}
                />
              ))}
            </div>

            {/* Navigation hint */}
            <div className="mt-8 text-gray-500 text-sm">
              {currentStep < journeySteps.length - 1 ? (
                <>Scroll down or use ↓ to continue</>
              ) : (
                <>Journey complete</>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Final quote overlay */}
      {currentStep === journeySteps.length - 1 && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-30 max-w-2xl px-6">
          <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl p-6 border border-green-500/30 text-center">
            <blockquote className="text-lg font-medium text-white italic">
              "AI helped me bridge the gap between creativity and technology."
            </blockquote>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slowTwinkle {
          0%, 92% { opacity: 0.2; }
          96% { opacity: 1; transform: scale(1.5); }
          100% { opacity: 0.2; transform: scale(1); }
        }
        
        body {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default JourneyViewNew;