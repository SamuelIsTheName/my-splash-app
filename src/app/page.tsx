"use client";

import { useState } from "react";
import SplashScreen from "@/component/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(false);

  return (
    <div>
      <button onClick={() => setShowSplash(true)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Open Splash Screen
      </button>

      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}
    </div>
  );
}