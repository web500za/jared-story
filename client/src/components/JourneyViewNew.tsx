import { Card, CardContent } from "@/components/ui/card";
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
      elevation: 20,
      color: "from-slate-600 to-blue-600",
      mood: "discovery"
    },
    {
      id: 2,
      title: "Almost Solo Music Video",
      period: "2012",
      description: "Solo music video propels me into a cult following. Building an audience through raw creativity and authentic connection.",
      elevation: 40,
      color: "from-pink-600 to-purple-600",
      mood: "breakthrough"
    },
    {
      id: 3,
      title: "Creative Peak",
      period: "2012–2017",
      description: "Music career as 'Platinum Posse.' Built audience, earned respect through creativity on Facebook, SoundCloud, and YouTube.",
      elevation: 70,
      color: "from-purple-600 to-pink-600",
      mood: "triumph"
    },
    {
      id: 4,
      title: "Pivot from Music",
      period: "2018",
      description: "Realized music wouldn't sustain me in South Africa. Shifted focus from expression to structure — chasing stability while keeping creativity alive.",
      elevation: 30,
      color: "from-orange-600 to-red-600",
      mood: "transition"
    },
    {
      id: 5,
      title: "Mastery Building",
      period: "2020–2024",
      description: "5CA years. SaaS expertise, mentoring, problem-solving at scale. First wave of tech support that laid the foundation for the team structure that followed.",
      elevation: 50,
      color: "from-blue-600 to-purple-600",
      mood: "growth"
    },
    {
      id: 6,
      title: "The Breakthrough",
      period: "2024",
      description: "Started troubleshooting my brain. ADHD medication changed my life and unlocked the gift of focus. AI + no-code fusion. Building what I imagine.",
      elevation: 80,
      color: "from-yellow-500 to-orange-500",
      mood: "transformation"
    },
    {
      id: 7,
      title: "Future Forward",
      period: "Now",
      description: "Technology, creativity and customer-facing work combine in this breakthrough era of no-code + solution engineering. Creating human-centered AI tools.",
      elevation: 90,
      color: "from-green-500 to-blue-500",
      mood: "aspiration"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
      
      const stepIndex = Math.floor(progress * (journeySteps.length - 1));
      setCurrentStep(Math.min(stepIndex, journeySteps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [journeySteps.length]);

  const getMoodAnimation = (mood: string) => {
    switch (mood) {
      case 'discovery': return 'animate-pulse';
      case 'breakthrough': return 'animate-bounce';
      case 'triumph': return 'animate-ping';
      case 'transition': return 'animate-pulse';
      case 'growth': return 'animate-pulse';
      case 'transformation': return 'animate-bounce';
      case 'aspiration': return 'animate-float';
      default: return '';
    }
  };

  return (
    <div className="min-h-[500vh] relative">
      {/* Fixed Mountain Range Background */}
      <div className="fixed inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(30, 41, 59)" stopOpacity="0.8" />
              <stop offset="20%" stopColor="rgb(139, 92, 246)" stopOpacity="0.6" />
              <stop offset="40%" stopColor="rgb(59, 130, 246)" stopOpacity="0.7" />
              <stop offset="60%" stopColor="rgb(34, 197, 94)" stopOpacity="0.8" />
              <stop offset="80%" stopColor="rgb(251, 191, 36)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          
          {/* Mountain range path that represents life's journey */}
          <path
            d={`M0,500 
                Q143,${500 - journeySteps[0].elevation * 4} 143,${500 - journeySteps[0].elevation * 4}
                T286,${500 - journeySteps[1].elevation * 4}
                Q429,${500 - journeySteps[2].elevation * 4} 429,${500 - journeySteps[2].elevation * 4}
                T571,${500 - journeySteps[3].elevation * 4}
                Q714,${500 - journeySteps[4].elevation * 4} 714,${500 - journeySteps[4].elevation * 4}
                T857,${500 - journeySteps[5].elevation * 4}
                Q1000,${500 - journeySteps[6].elevation * 4} 1000,${500 - journeySteps[6].elevation * 4}
                L1000,600 L0,600 Z`}
            fill="url(#mountainGradient)"
            className="transition-all duration-1000"
          />
          
          {/* Progress line showing journey completion */}
          <path
            d={`M0,500 
                Q143,${500 - journeySteps[0].elevation * 4} 143,${500 - journeySteps[0].elevation * 4}
                T286,${500 - journeySteps[1].elevation * 4}
                Q429,${500 - journeySteps[2].elevation * 4} 429,${500 - journeySteps[2].elevation * 4}
                T571,${500 - journeySteps[3].elevation * 4}
                Q714,${500 - journeySteps[4].elevation * 4} 714,${500 - journeySteps[4].elevation * 4}
                T857,${500 - journeySteps[5].elevation * 4}
                Q1000,${500 - journeySteps[6].elevation * 4} 1000,${500 - journeySteps[6].elevation * 4}`}
            fill="none"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="3"
            strokeDasharray={`${scrollProgress * 2000} 2000`}
            className="transition-all duration-300"
          />

          {/* Journey points on the mountain */}
          {journeySteps.map((step, index) => (
            <g key={step.id}>
              <circle
                cx={143 + (index * 143)}
                cy={500 - step.elevation * 4}
                r={index === currentStep ? "12" : "8"}
                className={`fill-white transition-all duration-500 ${
                  index <= currentStep ? 'opacity-100' : 'opacity-40'
                } ${index === currentStep ? getMoodAnimation(step.mood) : ''}`}
                stroke="rgba(100, 100, 100, 0.5)"
                strokeWidth="2"
              />
              {index === currentStep && (
                <circle
                  cx={143 + (index * 143)}
                  cy={500 - step.elevation * 4}
                  r="20"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="1"
                  className="animate-ping"
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Sticky story card */}
      <div className="sticky top-1/2 transform -translate-y-1/2 z-10 px-8">
        <Card className="max-w-2xl mx-auto border-purple-700/50 bg-night-800/95 backdrop-blur-md shadow-2xl">
          <CardContent className="p-8">
            <div className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-r ${journeySteps[currentStep]?.color} rounded-full mx-auto mb-4 flex items-center justify-center ${getMoodAnimation(journeySteps[currentStep]?.mood)}`}>
                <div className="w-8 h-8 bg-white rounded-full" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 font-display">
                {journeySteps[currentStep]?.title}
              </h2>
              <p className="text-purple-300 mb-4 font-medium">
                {journeySteps[currentStep]?.period}
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                {journeySteps[currentStep]?.description}
              </p>
              
              {/* Progress indicator */}
              <div className="mt-6 flex justify-center space-x-2">
                {journeySteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index <= currentStep 
                        ? 'bg-gradient-to-r from-purple-400 to-blue-400' 
                        : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Scroll indicator */}
              <div className="mt-6 text-purple-400 text-sm opacity-60">
                {currentStep < journeySteps.length - 1 ? '↓ Continue scrolling to journey forward' : '✨ Journey complete'}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom quote */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 max-w-3xl px-6">
        <Card className="border-purple-600/50 bg-gradient-to-r from-night-800/90 to-purple-900/90 backdrop-blur-md shadow-xl">
          <CardContent className="p-4 text-center">
            <blockquote className="text-lg font-medium text-white leading-relaxed italic">
              "AI helped me bridge the gap between creativity and technology. 
              It showed me what a compelling experience <em className="text-purple-300">should</em> feel like — and how to build it."
            </blockquote>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-green-400 mx-auto mt-3"></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JourneyViewNew;