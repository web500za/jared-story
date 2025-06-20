
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef } from "react";

const JourneyView = () => {
  const [currentPoint, setCurrentPoint] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const journeyPoints = [
    {
      id: 1,
      icon: "📦",
      title: "Tech Early Roots",
      period: "Early Years",
      description: "PS1, PS2, World of Warcraft adventures. Jailbreaking iPhones, rooting Androids. Hardware, software, internet cafés. Curiosity over conversation.",
      position: { x: 15, y: 85 },
      color: "from-gray-600 to-blue-600"
    },
    {
      id: 2,
      icon: "🎵",
      title: "Almost Solo Music Video",
      period: "2012",
      description: "Solo music video propels me into a cult following. Building an audience through raw creativity and authentic connection.",
      position: { x: 25, y: 70 },
      color: "from-pink-600 to-purple-600"
    },
    {
      id: 3,
      icon: "🎤",
      title: "Creative Peak",
      period: "2012–2017",
      description: "Music career as 'Platinum Posse.' Built audience, earned respect through creativity on Facebook, SoundCloud, and YouTube.",
      position: { x: 40, y: 65 },
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      icon: "🔄",
      title: "Pivot from Music",
      period: "2018",
      description: "Realized music wouldn't sustain me in South Africa. Shifted focus from expression to structure — chasing stability while keeping creativity alive.",
      position: { x: 55, y: 75 },
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      icon: "🔧",
      title: "Mastery Building",
      period: "2020–2024",
      description: "5CA years. SaaS expertise, mentoring, problem-solving at scale. First wave of tech support that laid the foundation for the team structure that followed.",
      position: { x: 70, y: 55 },
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 6,
      icon: "⚡",
      title: "The Breakthrough",
      period: "2024",
      description: "Started troubleshooting my brain. ADHD medication changed my life and unlocked the gift of focus. AI + no-code fusion. Building what I imagine.",
      position: { x: 80, y: 35 },
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 7,
      icon: "🚀",
      title: "Future Forward",
      period: "Now",
      description: "Technology, creativity and customer-facing work combine in this breakthrough era of no-code + solution engineering. Creating human-centered AI tools.",
      position: { x: 90, y: 15 },
      color: "from-green-500 to-blue-500"
    }
  ];

  const handleSliderDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const newPosition = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    
    setSliderPosition(newPosition);
    
    // Update current point based on position
    const pointIndex = Math.round((newPosition / 100) * (journeyPoints.length - 1));
    setCurrentPoint(Math.min(pointIndex, journeyPoints.length - 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleSliderDrag(e);
    
    const handleMouseMove = (moveEvent: MouseEvent) => {
      handleSliderDrag(moveEvent as any);
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleSliderDrag(e);
    
    const handleTouchMove = (moveEvent: TouchEvent) => {
      moveEvent.preventDefault();
      handleSliderDrag(moveEvent as any);
    };
    
    const handleTouchEnd = () => {
      setIsDragging(false);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Minimalist Draggable Control */}
      <div className="sticky top-4 z-50 flex justify-center px-6">
        <div className="bg-night-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-700/30">
          <div 
            ref={sliderRef}
            className="relative w-64 h-2 bg-night-600 rounded-full cursor-pointer"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-200"
              style={{ width: `${sliderPosition}%` }}
            />
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-lg cursor-grab active:cursor-grabbing transition-all duration-200 hover:scale-110"
              style={{ left: `${sliderPosition}%` }}
            />
          </div>
        </div>
      </div>

      {/* Mountain slopes background */}
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
            d="M0,90 Q20,88 25,75 T40,70 Q55,70 55,80 T70,60 Q80,60 80,40 T90,20 L100,15 L100,100 L0,100 Z"
            fill="url(#upwardSlope)"
            className="transition-all duration-1000"
          />
          
          <path
            d="M0,90 Q20,88 25,75 T40,70 Q55,70 55,80 T70,60 Q80,60 80,40 T90,20 L100,15"
            fill="none"
            stroke="url(#upwardSlope)"
            strokeWidth="0.3"
          />
        </svg>
      </div>

      {/* Journey points on the mountain */}
      <div className="relative z-10 h-screen p-8">
        {journeyPoints.map((point, index) => (
          <div
            key={point.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
              index === currentPoint ? 'scale-110 z-20' : index < currentPoint ? 'opacity-80' : 'opacity-40'
            }`}
            style={{
              left: `${point.position.x}%`,
              top: `${point.position.y}%`,
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="relative group">
              <div className={`w-8 h-8 bg-gradient-to-r ${point.color} rounded-full shadow-xl flex items-center justify-center text-lg transition-all duration-500 ${
                index === currentPoint ? 'animate-pulse ring-4 ring-white/30' : ''
              }`}>
                {point.icon}
              </div>
              
              {/* Info card appears for current point */}
              {index === currentPoint && (
                <Card className="absolute top-12 left-1/2 transform -translate-x-1/2 w-72 border-purple-700/50 bg-night-800/95 backdrop-blur-sm animate-fade-in">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h3 className="text-white font-semibold mb-1">{point.title}</h3>
                      <p className="text-purple-300 text-xs mb-2">{point.period}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        ))}
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

export default JourneyView;
