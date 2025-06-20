
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CVView from "@/components/CVView";
import JourneyView from "@/components/JourneyView";

const Index = () => {
  const [activeView, setActiveView] = useState<"cv" | "journey">("cv");

  return (
    <div className="min-h-screen bg-gradient-to-br from-night-950 via-purple-950 to-blue-950">
      {/* Centered Toggle */}
      <div className="sticky top-0 z-50 bg-night-900/90 backdrop-blur-sm border-b border-purple-800/50">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white font-display">Jared January</h1>
              <p className="text-purple-300 text-lg">Technical Customer Success & Implementation</p>
              <p className="text-blue-300">Cape Town, South Africa</p>
            </div>
            
            <div className="flex items-center space-x-2 bg-night-800/50 rounded-lg p-1 border border-purple-700/50 relative">
              <div 
                className="absolute inset-y-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md transition-all duration-300 ease-out"
                style={{
                  left: activeView === "cv" ? "4px" : "50%",
                  width: "calc(50% - 8px)"
                }}
              />
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setActiveView("cv")}
                className={`${
                  activeView === "cv" 
                    ? "text-white relative z-10" 
                    : "text-purple-300 hover:text-white relative z-10"
                } transition-all duration-200 px-8 py-3 hover:bg-transparent`}
              >
                📄 My CV
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setActiveView("journey")}
                className={`${
                  activeView === "journey" 
                    ? "text-white relative z-10" 
                    : "text-purple-300 hover:text-white relative z-10"
                } transition-all duration-200 px-8 py-3 hover:bg-transparent`}
              >
                🌀 My Journey
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="transition-all duration-500 ease-in-out">
        {activeView === "cv" ? <CVView /> : <JourneyView />}
      </div>
    </div>
  );
};

export default Index;
