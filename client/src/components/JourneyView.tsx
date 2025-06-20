
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

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
      position: { x: 0, y: 85 },
      color: "from-gray-600 to-blue-600"
    },
    {
      id: 2,
      icon: "🎵",
      title: "Almost Solo Music Video",
      period: "2012",
      description: "Solo music video propels me into a cult following. Building an audience through raw creativity and authentic connection.",
      position: { x: 16.6, y: 70 },
      color: "from-pink-600 to-purple-600"
    },
    {
      id: 3,
      icon: "🎤",
      title: "Creative Peak",
      period: "2012–2017",
      description: "Music career as 'Platinum Posse.' Built audience, earned respect through creativity on Facebook, SoundCloud, and YouTube.",
      position: { x: 33.2, y: 65 },
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      icon: "🔄",
      title: "Pivot from Music",
      period: "2018",
      description: "Realized music wouldn't sustain me in South Africa. Shifted focus from expression to structure — chasing stability while keeping creativity alive.",
      position: { x: 49.8, y: 75 },
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      icon: "🔧",
      title: "Mastery Building",
      period: "2020–2024",
      description: "5CA years. SaaS expertise, mentoring, problem-solving at scale. Learning to troubleshoot, explain, and resolve complex issues.",
      position: { x: 66.4, y: 55 },
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 6,
      icon: "⚡",
      title: "The Breakthrough",
      period: "2024",
      description: "Started troubleshooting my brain. ADHD medication changed my life and unlocked the gift of focus. AI + no-code fusion. Building what I imagine.",
      position: { x: 83, y: 35 },
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 7,
      icon: "🚀",
      title: "Future Forward",
      period: "Now",
      description: "Technology, creativity and customer-facing work combine in this breakthrough era of no-code + solution engineering. Creating human-centered AI tools.",
      position: { x: 100, y: 15 },
      color: "from-green-500 to-blue-500"
    }
  ];

  const handleSliderDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current || !isDragging) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const newPosition = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    
    setSliderPosition(newPosition);
    
    // Update current point based on position
    const pointIndex = Math.floor((newPosition / 100) * (journeyPoints.length - 1));
    setCurrentPoint(Math.min(pointIndex, journeyPoints.length - 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleSliderDrag(e);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleSliderDrag(e);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleSliderDrag(e as any);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        handleSliderDrag(e as any);
      }
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  // Auto-advance timeline
  useEffect(() => {
    if (!isDragging) {
      const timer = setInterval(() => {
        setSliderPosition(prev => {
          const newPos = (prev + 0.5) % 100;
          const pointIndex = Math.floor((newPos / 100) * (journeyPoints.length - 1));
          setCurrentPoint(Math.min(pointIndex, journeyPoints.length - 1));
          return newPos;
        });
      }, 150);
      return () => clearInterval(timer);
    }
  }, [isDragging, journeyPoints.length]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Interactive Slider at Top */}
      <div className="sticky top-0 z-50 bg-night-900/95 backdrop-blur-sm border-b border-purple-800/50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Interactive Journey Timeline</h2>
            <p className="text-purple-300">Drag the button below to explore my path</p>
          </div>
          
          {/* Custom Slider */}
          <div 
            ref={sliderRef}
            className="relative h-16 bg-gradient-to-r from-night-700 to-night-600 rounded-full border border-purple-700/50 cursor-pointer select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* Progress Track */}
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${sliderPosition}%` }}
            />
            
            {/* Journey Point Markers */}
            {journeyPoints.map((point, index) => (
              <div
                key={point.id}
                className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${(index / (journeyPoints.length - 1)) * 100}%` }}
              >
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${point.color} border-2 border-white shadow-lg transition-all duration-300 ${
                  index <= currentPoint ? 'scale-110 opacity-100' : 'scale-75 opacity-50'
                }`} />
              </div>
            ))}
            
            {/* Draggable Button */}
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-300 ease-out"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r from-white to-purple-100 rounded-full border-4 border-purple-400 shadow-xl cursor-grab active:cursor-grabbing flex items-center justify-center text-lg hover:scale-110 transition-transform duration-200 ${
                isDragging ? 'scale-125 shadow-2xl' : ''
              }`}>
                {journeyPoints[currentPoint]?.icon}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-night-950 via-purple-950 to-blue-950" />

      {/* Current Journey Point Display */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-purple-700/50 bg-night-800/90 backdrop-blur-md shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${journeyPoints[currentPoint]?.color} rounded-full flex items-center justify-center text-4xl mx-auto mb-4 animate-float`}>
                  {journeyPoints[currentPoint]?.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 font-display">
                  {journeyPoints[currentPoint]?.title}
                </h3>
                <p className="text-purple-300 text-lg font-medium">
                  {journeyPoints[currentPoint]?.period}
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                  {journeyPoints[currentPoint]?.description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-2">
                  {journeyPoints.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index <= currentPoint 
                          ? 'bg-gradient-to-r from-purple-400 to-blue-400' 
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Inspirational Quote */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 max-w-3xl px-6">
        <Card className="border-purple-600/50 bg-gradient-to-r from-night-800/95 to-purple-900/95 backdrop-blur-md shadow-xl">
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
