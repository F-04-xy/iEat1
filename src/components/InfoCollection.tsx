import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Edit2, X, Check } from 'lucide-react';
import { useState } from 'react';

const rangeStyle = `
  .custom-range {
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
  }
  .custom-range:focus {
    outline: none;
  }
  .custom-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    margin-top: -12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.8);
    border: 1px solid rgba(0,0,0,0.05);
  }
  .custom-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
  }
  .custom-range::-moz-range-thumb {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.8);
    border: 1px solid rgba(0,0,0,0.05);
  }
  .custom-range::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
  }
`;

const GenderButton = ({ icon, label, selected, onClick }: any) => (
  <motion.button 
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-4 rounded-[2rem] w-[5.5rem] h-[6.5rem] transition-all duration-300 ${
      selected 
      ? 'bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] scale-105 border border-transparent' 
      : 'bg-white/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] border border-white/40'
    }`}
  >
    <span className="text-[2rem] drop-shadow-sm mb-2">{icon}</span>
    <span className={`text-xs font-bold ${selected ? 'text-neutral-800' : 'text-neutral-500'}`}>{label}</span>
  </motion.button>
);

const GoalCard = ({ icon, label, selected, onClick }: any) => (
  <motion.button 
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`flex items-center gap-4 px-5 py-4 rounded-3xl w-full transition-all duration-300 ${
      selected 
      ? 'bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-white/80' 
      : 'bg-white/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] border border-white/30'
    }`}
  >
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm transition-colors ${selected ? 'bg-neutral-50' : 'bg-white/60'}`}>
       {icon}
    </div>
    <span className={`text-[1.05rem] font-bold ${selected ? 'text-neutral-800' : 'text-neutral-600'}`}>{label}</span>
    
    <div className={`ml-auto w-[1.35rem] h-[1.35rem] rounded-full flex items-center justify-center transition-all ${selected ? 'bg-neutral-800 text-white shadow-md scale-110' : 'border-[2px] border-neutral-300/80 bg-white/50'}`}>
       {selected && <Check className="w-3.5 h-3.5" strokeWidth={3.5} />}
    </div>
  </motion.button>
);

const SUB_STEPS = [
  {
    title: '为了给你制定最科学的\n控糖计划，我们需要了解一下你。',
    showSkip: false
  },
  {
    title: '你现在的身体状态是？',
    showSkip: true
  },
  {
    title: '你的终极目标是？',
    showSkip: false
  }
];

interface InfoCollectionProps {
  onBack: () => void;
  onNext: (data: { height: number; weight: number; goal: string }) => void;
}

export function InfoCollection({ onBack, onNext }: InfoCollectionProps) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  
  // Form State
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(165);
  const [weight, setWeight] = useState(55);
  const [bodyGoal, setBodyGoal] = useState('maintain');
  const [sugarLimit, setSugarLimit] = useState(25);
  
  const [isEditingSugar, setIsEditingSugar] = useState(false);
  const [hasCustomSugar, setHasCustomSugar] = useState(false);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] } },
    exit: (dir: number) => ({ x: dir < 0 ? 40 : -40, opacity: 0, transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } })
  };

  const handleNext = () => {
    if (step < 2) {
      setDirection(1);
      setStep(prev => prev + 1);
    } else {
      onNext({ height, weight, goal: bodyGoal });
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setDirection(-1);
      setStep(prev => prev - 1);
    } else {
      onBack();
    }
  };

  const isLast = step === 2;
  const currentStepData = SUB_STEPS[step];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col h-full relative z-10 w-full"
    >
      <style dangerouslySetInnerHTML={{ __html: rangeStyle }} />

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-14 h-[4.5rem]">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={handleBack}
          className="w-[2.6rem] h-[2.6rem] bg-white/70 rounded-[0.85rem] flex items-center justify-center shadow-[0_2px_10px_rgb(0,0,0,0.03)] backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6 text-neutral-700 -ml-0.5" />
        </motion.button>

        {currentStepData.showSkip ? (
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="px-4 py-2 bg-neutral-200/50 rounded-xl text-[0.85rem] font-semibold text-neutral-500 backdrop-blur-sm shadow-sm"
          >
            跳过
          </motion.button>
        ) : (
          <div className="w-[3.8rem]" /> // balance empty space
        )}
      </div>

      {/* Main Content Area */}
      <div className="px-7 pt-6 flex-1 flex flex-col relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex-1 flex flex-col absolute inset-0 px-7 pt-4"
          >
            <h2 className="font-bold text-neutral-900 tracking-tight leading-[1.4] whitespace-pre-line text-[20px]">
              {currentStepData.title}
            </h2>

            {step === 0 && (
               <div className="flex flex-col items-center w-full gap-10 mt-10">
                 <div className="w-full">
                    <h3 className="text-sm font-semibold text-neutral-500 mb-3 ml-2 text-center">性别</h3>
                    <div className="flex justify-center gap-3 w-full">
                        <GenderButton icon="👨" label="男" selected={gender==='male'} onClick={()=>setGender('male')} />
                        <GenderButton icon="👩" label="女" selected={gender==='female'} onClick={()=>setGender('female')} />
                        <GenderButton icon="😶‍🌫️" label="保密" selected={gender==='secret'} onClick={()=>setGender('secret')} />
                    </div>
                 </div>
                 <div className="w-full px-2 mt-2">
                    <h3 className="text-sm font-semibold text-neutral-500 mb-1 text-center">年龄</h3>
                    <div className="text-center text-[3.2rem] font-bold text-neutral-800 mb-2 leading-none mt-2">{age}<span className="text-xl text-neutral-400 font-bold ml-1">岁</span></div>
                    <input type="range" min="12" max="100" value={age} onChange={(e)=>setAge(Number(e.target.value))} className="custom-range mt-5" />
                 </div>
              </div>
            )}

            {step === 1 && (
              <div className="flex flex-col items-center w-full gap-6 mt-8">
                 <div className="w-full bg-white/40 p-6 rounded-[2rem] border border-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.02),inset_0_2px_4px_rgba(255,255,255,0.6)] backdrop-blur-sm">
                    <div className="flex justify-between items-end mb-5">
                       <h3 className="text-[1.05rem] font-bold text-neutral-600">身高</h3>
                       <div className="text-[2.2rem] font-bold text-neutral-800 leading-none">{height}<span className="text-base text-neutral-400 font-bold ml-1">cm</span></div>
                    </div>
                    <input type="range" min="100" max="220" value={height} onChange={(e)=>setHeight(Number(e.target.value))} className="custom-range mt-2" />
                 </div>
                 <div className="w-full bg-white/40 p-6 rounded-[2rem] border border-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.02),inset_0_2px_4px_rgba(255,255,255,0.6)] backdrop-blur-sm">
                    <div className="flex justify-between items-end mb-5">
                       <h3 className="text-[1.05rem] font-bold text-neutral-600">体重</h3>
                       <div className="text-[2.2rem] font-bold text-neutral-800 leading-none">{weight}<span className="text-base text-neutral-400 font-bold ml-1">kg</span></div>
                    </div>
                    <input type="range" min="30" max="150" value={weight} onChange={(e)=>setWeight(Number(e.target.value))} className="custom-range mt-2" />
                 </div>
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col w-full gap-4 mt-8">
                 <GoalCard icon="🔥" label="减脂减重" selected={bodyGoal==='fatloss'} onClick={()=>setBodyGoal('fatloss')} />
                 <GoalCard icon="🧘‍♀️" label="保持现状，健康抗糖" selected={bodyGoal==='maintain'} onClick={()=>setBodyGoal('maintain')} />
                 <GoalCard icon="💪" label="增肌塑形" selected={bodyGoal==='muscle'} onClick={()=>setBodyGoal('muscle')} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Button */}
      <div className="px-6 pb-12 w-full z-20">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleNext}
          className="w-full bg-white/95 text-neutral-900 font-bold py-4 rounded-[1.25rem] flex items-center justify-center gap-2.5 shadow-[0_8px_24px_rgb(0,0,0,0.08)] hover:bg-white transition-all duration-300 text-[1.1rem]"
        >
          <span className="translate-y-[0.5px]">下一步</span>
          <ChevronRight className="w-5 h-5 -mr-1 stroke-[2.5]" />
        </motion.button>
      </div>

      {/* iPhone Home Indicator Simulation */}
       <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-neutral-900 rounded-full z-20"></div>
    </motion.div>
  );
}
