import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Edit2, X } from 'lucide-react';
import { useState, useEffect } from 'react';

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

interface SugarTargetProps {
  onBack: () => void;
  onNext: () => void;
  userData: {
    weight: number;
    height: number;
    goal: string;
  };
}

export function SugarTarget({ onBack, onNext, userData }: SugarTargetProps) {
  const [sugarLimit, setSugarLimit] = useState(25);
  const [isEditingSugar, setIsEditingSugar] = useState(false);
  const [hasCustomSugar, setHasCustomSugar] = useState(false);

  useEffect(() => {
    if (!hasCustomSugar) {
      let base = 25;
      if (userData.goal === 'fatloss') base = 20;
      if (userData.goal === 'muscle') base = 30;
      const calc = Math.max(15, Math.min(50, Math.round(base * (userData.weight / 55))));
      setSugarLimit(calc);
    }
  }, [userData.weight, userData.goal, hasCustomSugar]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col h-full relative z-10 w-full"
    >
      <style dangerouslySetInnerHTML={{ __html: rangeStyle }} />

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-14 h-[4.5rem]">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={onBack}
          className="w-[2.6rem] h-[2.6rem] bg-white/70 rounded-[0.85rem] flex items-center justify-center shadow-[0_2px_10px_rgb(0,0,0,0.03)] backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6 text-neutral-700 -ml-0.5" />
        </motion.button>
        <div className="w-[3.8rem]" />
      </div>

      <div className="px-7 pt-4 flex-1 flex flex-col relative overflow-hidden">
        <h2 className="font-bold text-neutral-900 tracking-tight leading-[1.4] text-center text-[20px] whitespace-pre-line">
          为你量身定制的{'\n'}每日控糖红线
        </h2>

        <div className="flex flex-col items-center w-full mt-8 flex-1">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
            className="w-[14.5rem] h-[14.5rem] bg-white/70 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.06),inset_0_4px_16px_rgba(255,255,255,1)] border-2 border-white flex flex-col items-center justify-center relative backdrop-blur-xl"
          >
            <div className="absolute inset-4 rounded-full border border-[#83AEED]/40 border-dashed" />
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }} 
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-[#FFA8E5] text-3xl mb-1 drop-shadow-md"
            >
              🔥
            </motion.div>
            <div className="flex items-baseline gap-1 z-10">
                <span className="text-[4.5rem] font-bold text-neutral-800 tracking-tighter leading-none drop-shadow-sm">{sugarLimit}</span>
                <span className="text-[1.35rem] font-bold text-neutral-500">g</span>
            </div>
            <span className="text-xs font-bold text-neutral-400 mt-2 uppercase tracking-widest bg-neutral-100/80 px-2 py-0.5 rounded-full">每天</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-neutral-500 font-medium text-center mt-10 px-2 leading-[1.7] text-[0.95rem]"
          >
            根据你的身体数据计算得出。<br/>相当于约 <span className="font-bold text-neutral-800 bg-white/70 px-2 py-0.5 rounded-lg mx-0.5 shadow-sm ring-1 ring-white">半瓶可乐 🥤</span> 的含糖量。
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setIsEditingSugar(true)} 
            className="mt-6 text-[#759FDA] text-[0.85rem] font-bold flex items-center gap-1.5 bg-white/60 px-4 py-2 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:bg-white transition-colors border border-white/50"
          >
            觉得不合适？点击手动调整 <Edit2 className="w-3.5 h-3.5" strokeWidth={2.5} />
          </motion.button>
        </div>
      </div>

      <div className="px-6 pb-12 w-full z-20">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="w-full bg-white/95 text-neutral-900 font-bold py-4 rounded-[1.25rem] flex items-center justify-center gap-2.5 shadow-[0_8px_24px_rgb(0,0,0,0.08)] hover:bg-white transition-all duration-300 text-[1.1rem]"
        >
          <span className="translate-y-[0.5px]">开始我的计划</span>
          <ChevronRight className="w-5 h-5 -mr-1 stroke-[2.5]" />
        </motion.button>
      </div>

      <AnimatePresence>
        {isEditingSugar && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-neutral-900/10 backdrop-blur-sm"
              onClick={() => setIsEditingSugar(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', bounce: 0.4 }}
              className="relative w-full bg-white/90 backdrop-blur-2xl rounded-[2rem] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-white/80 z-10"
            >
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-lg font-bold text-neutral-800">手动调整目标</h3>
                 <button onClick={() => setIsEditingSugar(false)} className="w-[2.1rem] h-[2.1rem] flex items-center justify-center bg-neutral-100 rounded-full text-neutral-500 shadow-sm">
                   <X className="w-4 h-4" strokeWidth={2.5} />
                 </button>
              </div>
              <div className="flex flex-col items-center px-4">
                  <div className="text-[3.5rem] font-bold text-neutral-800 mb-4 leading-none">{sugarLimit}<span className="text-[1.35rem] font-bold text-neutral-400 ml-1">g</span></div>
                  <input 
                    type="range" min="10" max="60" value={sugarLimit} 
                    onChange={(e)=> {
                       setHasCustomSugar(true);
                       setSugarLimit(Number(e.target.value));
                    }} 
                    className="custom-range w-full" 
                  />
                  <div className="flex justify-between w-full text-[0.8rem] text-neutral-400 mt-3 font-bold px-1">
                     <span>严格 (10g)</span>
                     <span>宽松 (60g)</span>
                  </div>
              </div>
              <motion.button 
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsEditingSugar(false)} 
                className="w-full mt-8 bg-neutral-900 text-white font-bold py-3.5 rounded-[1.1rem] shadow-lg text-[1.05rem]"
              >
                保存设置
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-neutral-900 rounded-full z-20"></div>
    </motion.div>
  );
}
