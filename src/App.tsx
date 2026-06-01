import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Splash } from './components/Splash';
import { Onboarding } from './components/Onboarding';
import { InfoCollection } from './components/InfoCollection';
import { GoalSelection } from './components/GoalSelection';
import { SugarTarget } from './components/SugarTarget';
import { LoginScreen } from './components/LoginScreen';

export default function App() {
  // step 1: splash, step 2: onboarding, step 3: info, step 4: goals, step 5: sugar target, step 6: login
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({ height: 165, weight: 55, goal: 'maintain' });

  return (
    <div className="flex items-center justify-center min-h-screen bg-white w-full overflow-hidden font-sans select-none sm:py-8">
      {/* iPhone Outer Casing */}
      <div className="relative w-full h-[100dvh] sm:h-[844px] sm:w-[390px] sm:rounded-[55px] sm:shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col shrink-0 box-content sm:p-[2px] sm:bg-[#58585A]">
        
        {/* Hardware Buttons (Visible on Desktop) */}
        <div className="hidden sm:block absolute -left-[4px] top-[115px] w-[4px] h-[32px] bg-[#58585A] rounded-l-[3px]"></div>
        <div className="hidden sm:block absolute -left-[4px] top-[175px] w-[4px] h-[60px] bg-[#58585A] rounded-l-[3px]"></div>
        <div className="hidden sm:block absolute -left-[4px] top-[250px] w-[4px] h-[60px] bg-[#58585A] rounded-l-[3px]"></div>
        <div className="hidden sm:block absolute -right-[4px] top-[200px] w-[4px] h-[90px] bg-[#58585A] rounded-r-[3px]"></div>

        {/* Inner Black Bezel */}
        <div className="relative w-full h-full sm:rounded-[53px] flex flex-col sm:border-[8px] sm:border-black bg-black overflow-hidden shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]">
          {/* Active Screen Area */}
          <div className="relative w-full h-full sm:rounded-[45px] overflow-hidden flex flex-col bg-gradient-to-b from-[#A5D0FF] via-[#D6D6FA] to-[#FFBCF3]">
            
            {/* Dynamic Island */}
            <div className="hidden sm:flex absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-[24px] z-50 justify-end items-center pr-3">
              {/* Camera lens reflection */}
              <div className="w-[11px] h-[11px] rounded-full bg-[#111] shadow-[inset_0_0_4px_rgba(255,255,255,0.2)] flex items-center justify-center relative">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1E]"></div>
                 <div className="absolute w-[4px] h-[4px] rounded-full bg-indigo-800/40 right-0 bottom-0 blur-[1px]"></div>
              </div>
            </div>

            {/* Soft subtle noise overlay to enrich the gradient feeling perfectly */}
            <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            {/* Content Layers */}
            <div className="flex-1 relative w-full h-full">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <Splash key="splash" onNext={() => setStep(2)} />
                )}
                {step === 2 && (
                  <Onboarding key="onboarding" onBackToSplash={() => setStep(1)} onFinish={() => setStep(3)} />
                )}
                {step === 3 && (
                  <InfoCollection key="info" onBack={() => setStep(2)} onNext={(data) => { setUserData(data); setStep(4); }} />
                )}
                {step === 4 && (
                  <GoalSelection key="goals" onBack={() => setStep(3)} onNext={() => setStep(5)} />
                )}
                {step === 5 && (
                  <SugarTarget key="sugartarget" onBack={() => setStep(4)} onNext={() => setStep(6)} userData={userData} />
                )}
                {step === 6 && (
                  <LoginScreen key="login" onBack={() => setStep(5)} onNext={() => alert('进入App主页！')} />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
