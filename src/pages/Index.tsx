
import { useState } from "react";
import { Button } from "@/components/ui/button";
import TraditionalResume from "@/components/TraditionalResume";
import VisualJourney from "@/components/VisualJourney";

const Index = () => {
  const [activeView, setActiveView] = useState<"resume" | "journey">("journey");

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 to-earth-100">
      {/* Header with toggle */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-warm-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-earth-900 font-display">Jared January</h1>
              <p className="text-earth-600">Technical Customer Success & Implementation</p>
            </div>
            
            <div className="flex items-center space-x-2 bg-warm-100 rounded-lg p-1">
              <Button
                variant={activeView === "journey" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveView("journey")}
                className={`${
                  activeView === "journey" 
                    ? "bg-warm-600 text-white hover:bg-warm-700" 
                    : "text-earth-700 hover:bg-warm-200"
                } transition-all duration-200`}
              >
                🌀 Visual Journey
              </Button>
              <Button
                variant={activeView === "resume" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveView("resume")}
                className={`${
                  activeView === "resume" 
                    ? "bg-warm-600 text-white hover:bg-warm-700" 
                    : "text-earth-700 hover:bg-warm-200"
                } transition-all duration-200`}
              >
                🧾 Traditional Resume
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="transition-all duration-500 ease-in-out">
        {activeView === "resume" ? <TraditionalResume /> : <VisualJourney />}
      </div>
    </div>
  );
};

export default Index;
