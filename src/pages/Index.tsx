
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CVView from "@/components/CVView";
import JourneyView from "@/components/JourneyView";

const Index = () => {
  const [activeView, setActiveView] = useState<"cv" | "journey">("cv");

  return (
    <div className="min-h-screen bg-gradient-to-br from-night-950 via-purple-950 to-blue-950">
      {/* Header with toggle */}
      <div className="sticky top-0 z-50 bg-night-900/90 backdrop-blur-sm border-b border-purple-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white font-display">Jared January</h1>
              <p className="text-purple-300">Technical Customer Success & Implementation</p>
              <p className="text-blue-300 text-sm">Cape Town, South Africa</p>
            </div>
            
            <div className="flex items-center space-x-2 bg-night-800/50 rounded-lg p-1 border border-purple-700/50">
              <Button
                variant={activeView === "cv" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveView("cv")}
                className={`${
                  activeView === "cv" 
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700" 
                    : "text-purple-300 hover:bg-purple-800/50 hover:text-white"
                } transition-all duration-200`}
              >
                📄 My CV
              </Button>
              <Button
                variant={activeView === "journey" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveView("journey")}
                className={`${
                  activeView === "journey" 
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700" 
                    : "text-purple-300 hover:bg-purple-800/50 hover:text-white"
                } transition-all duration-200`}
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
