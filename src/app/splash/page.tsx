"use client";

import { useSplash } from "@/component/splash/splash-context";

export default function Page() {
  const splash = useSplash();

  return (
    <>
    <div className="flex flex-col gap-4 ">
      <button onClick={() => splash.open()} className="px-4 py-2 bg-violet-400 text-white rounded hover:bg-purple-500 transition">
        Opening Splash 1
      </button>
      <button onClick={() => splash.open("default2")} className="px-4 py-2 bg-violet-400 text-white rounded hover:bg-purple-500 transition">
        Opening Splash 2
      </button>
      <button onClick={() => splash.open("match")} className="px-4 py-2 bg-violet-400 text-white rounded hover:bg-purple-500 transition">
        Match Splash
      </button>
    </div>
    </>

  );
}