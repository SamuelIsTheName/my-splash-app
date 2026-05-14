"use client";

import { createContext, useContext, useState } from "react";
import SplashScreen from "../SplashScreen";
import SplashScreen2 from "../SplashScreen2";
import SplashScreenMatch from "../SplashScreenMatch";

type SplashType = "default"| "default2" | "match";

type SplashContextType = {
  open: (type?:SplashType) => void;
  close: () => void;
  type: SplashType;
};

const SplashContext = createContext<SplashContextType | null>(null);

export function SplashProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<SplashType>("default");

  const open = (newType:SplashType="default") =>{
    if(newType) setType(newType);
    setIsOpen(true)
  };
  const close = () => setIsOpen(false);

  return (
    <SplashContext.Provider value={{ open, close, type }}>
      {children}

      {isOpen && type === "default" && (<SplashScreen onFinish={close} />)}
      {isOpen && type === "default2" && (<SplashScreen2 onFinish={close} />)}
      {isOpen && type === "match" && (<SplashScreenMatch onFinish={close} />)}
    </SplashContext.Provider>
  );
}

export function useSplash() {
  const context = useContext(SplashContext);
  if (!context) {
    throw new Error("useSplash must be used inside SplashProvider");
  }
  return context;
}