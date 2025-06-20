import { useState, useEffect } from "react";

const JourneyViewNew = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const journeySteps = [
    {
      title: "Tech Early Roots",
      period: "Early Years",
      description: "PS1, PS2, World of Warcraft adventures. Jailbreaking iPhones, rooting Androids. Hardware, software, internet cafés. Curiosity over conversation.",
      x: 8,
      y: 75,
      color: "#6366F1"
    },
    {
      title: "Start Platinum Posse",
      period: "2012",
      description: "Beginning my music journey as Platinum Posse. Building creative foundations and learning the craft of music production.",
      x: 18,
      y: 65,
      color: "#8B5CF6"
    },
    {
      title: "Almost Music Video",
      period: "2016",
      description: "Solo music video propels me into a cult following. Building an audience through raw creativity and authentic connection.",
      x: 30,
      y: 50,
      color: "#EC4899"
    },
    {
      title: "Creative Peak",
      period: "2017",
      description: "Music career reaching its highest point. Earned respect through creativity on Facebook, SoundCloud, and YouTube.",
      x: 42,
      y: 25,
      color: "#A855F7"
    },
    {
      title: "Pivot from Music",
      period: "2018",
      description: "Realized music wouldn't sustain me in South Africa. Shifted focus from expression to structure — chasing stability while keeping creativity alive.",
      x: 54,
      y: 60,
      color: "#F97316"
    },
    {
      title: "Mastery Building",
      period: "2020–2024",
      description: "5CA years. SaaS expertise, mentoring, problem-solving at scale. First wave of tech support that laid the foundation for the team structure that followed.",
      x: 66,
      y: 40,
      color: "#3B82F6"
    },
    {
      title: "The Breakthrough",
      period: "2024",
      description: "Started troubleshooting my brain. ADHD medication changed my life and unlocked the gift of focus. AI + no-code fusion. Building what I imagine.",
      x: 78,
      y: 20,
      color: "#EAB308"
    },
    {
      title: "Future Forward",
      period: "Now",
      description: "Technology, creativity and customer-facing work combine in this breakthrough era of no-code + solution engineering. Creating human-centered AI tools.",
      x: 92,
      y: 10,
      color: "#22C55E"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const stepHeight = window.innerHeight;
      const stepIndex = Math.floor(scrollTop / stepHeight);
      setCurrentStep(Math.min(stepIndex, journeySteps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Static stars
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 50,
    size: Math.random() > 0.8 ? 2 : 1,
    delay: Math.random() * 10
  }));

  return (
    <div className="relative" style={{ height: `${journeySteps.length * 100}vh` }}>
      {/* Fixed night sky background */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Static stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${8 + star.delay}s ease-in-out infinite ${star.delay}s`
            }}
          />
        ))}
      </div>

      {/* Fixed mountain with journey points */}
      <div className="fixed inset-0 z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="50%" stopColor="#312e81" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <filter id="dotGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Mountain shape */}
          <path
            d="M0,85 Q8,75 18,65 Q30,50 42,25 Q54,60 66,40 Q78,20 92,10 L100,10 L100,100 L0,100 Z"
            fill="url(#mountainGrad)"
          />
          
          {/* Progress line */}
          <path
            d="M0,85 Q8,75 18,65 Q30,50 42,25 Q54,60 66,40 Q78,20 92,10"
            fill="none"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="0.4"
            strokeDasharray={`${(currentStep / (journeySteps.length - 1)) * 250} 250`}
            className="transition-all duration-700 ease-out"
          />

          {/* Journey dots */}
          {journeySteps.map((step, index) => (
            <circle
              key={index}
              cx={step.x}
              cy={step.y}
              r={index === currentStep ? "1.5" : "1"}
              fill={step.color}
              opacity={index <= currentStep ? 1 : 0.3}
              filter={index === currentStep ? "url(#dotGlow)" : "none"}
              className="transition-all duration-500"
            />
          ))}
        </svg>
      </div>

      {/* Story content for current step */}
      <div className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="max-w-2xl mx-auto px-8">
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-6 border border-slate-600/50 text-center">
            <h2 
              className="text-2xl font-bold mb-2"
              style={{ color: journeySteps[currentStep]?.color }}
            >
              {journeySteps[currentStep]?.title}
            </h2>
            <p className="text-purple-300 mb-4 font-medium">
              {journeySteps[currentStep]?.period}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {journeySteps[currentStep]?.description}
            </p>
            
            {/* Progress dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {journeySteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-white scale-125' 
                      : index < currentStep 
                        ? 'bg-purple-400' 
                        : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final quote */}
      {currentStep === journeySteps.length - 1 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 max-w-xl px-6">
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-4 border border-purple-700/50 text-center">
            <blockquote className="text-lg font-medium text-white italic">
              "AI helped me bridge the gap between creativity and technology."
            </blockquote>
          </div>
        </div>
      )}

      <style>{`
        @keyframes twinkle {
          0%, 90% { opacity: 0.3; }
          95% { opacity: 1; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default JourneyViewNew;