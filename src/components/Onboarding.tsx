import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

const Illustration1 = () => (
  <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
      className="absolute w-52 h-48 bg-white/60 rounded-[36px] shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_4px_12px_rgba(255,255,255,0.8)] backdrop-blur-xl flex flex-col items-center justify-center gap-3 border border-white/40"
    >
      <div className="text-xs font-bold text-neutral-500 tracking-widest uppercase mb-1">今日糖分分析</div>
      <div className="flex gap-4 items-end h-[4.5rem] w-36 mx-auto justify-center pb-2 border-b border-neutral-300/40">
        <motion.div animate={{ height: ['40%', '60%', '40%'] }} transition={{ duration: 3, repeat: Infinity }} className="w-6 bg-[#A5D0FF] rounded-t-lg opacity-90 shadow-sm" />
        <motion.div animate={{ height: ['70%', '40%', '70%'] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="w-6 bg-[#83AEED] rounded-t-lg opacity-100 shadow-sm" />
        <motion.div animate={{ height: ['30%', '80%', '30%'] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="w-6 bg-[#FFBCF3] rounded-t-lg opacity-90 shadow-sm" />
      </div>
      <div className="text-[1.35rem] font-bold text-neutral-800 tracking-wide mt-1">12<span className="text-sm font-semibold text-neutral-500">g</span> / 25<span className="text-sm font-semibold text-neutral-500">g</span></div>
    </motion.div>
    
    <motion.div 
      animate={{ y: [-6, 6, -6], rotate: [0, 12, 0] }} transition={{ duration: 4, repeat: Infinity }}
      className="absolute -top-4 -right-1 text-[3.5rem] drop-shadow-xl"
    >
      🍎
    </motion.div>
    <motion.div 
       animate={{ y: [6, -6, 6], rotate: [0, -12, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
      className="absolute -bottom-6 -left-3 text-[3.8rem] drop-shadow-xl"
    >
      🧊
    </motion.div>
     <motion.div 
       animate={{ y: [-4, 4, -4], rotate: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      className="absolute top-1/2 -ml-36 text-5xl drop-shadow-lg"
    >
      📱
    </motion.div>
  </div>
);

const Illustration2 = () => (
  <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
      className="absolute w-48 h-48 bg-white/60 rounded-[40px] shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_4px_12px_rgba(255,255,255,0.8)] backdrop-blur-xl flex flex-col items-center justify-center border border-white/40 group overflow-hidden"
    >
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}
        className="text-[4rem] mb-3 drop-shadow-lg relative z-10"
      >
        🏆
      </motion.div>
      <div className="text-[0.95rem] font-bold text-[#83AEED] bg-white/70 px-4 py-1.5 rounded-full text-center tracking-wider shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-white/50 z-10">Lv. 5 控糖达人</div>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/40 pointer-events-none rounded-[40px]" />
    </motion.div>

     <motion.div 
      animate={{ y: [-8, 8, -8], scale: [1, 1.1, 1], rotate: [0, 45, 0] }} transition={{ duration: 4, repeat: Infinity }}
      className="absolute -top-6 left-2 text-5xl drop-shadow-xl opacity-90"
    >
      ✨
    </motion.div>
    <motion.div 
       animate={{ y: [5, -5, 5], rotate: [-15, 0, -15] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      className="absolute -bottom-4 right-1 text-[3.5rem] drop-shadow-xl"
    >
      🎁
    </motion.div>
     <motion.div 
       animate={{ y: [-5, 5, -5], rotate: [0, 15, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      className="absolute top-1/2 -ml-[115px] -mt-6 text-[3.2rem] drop-shadow-lg"
    >
      🏅
    </motion.div>
  </div>
);

const Illustration3 = () => (
  <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
      className="absolute w-52 h-[15.5rem] bg-white/60 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_4px_12px_rgba(255,255,255,0.8)] backdrop-blur-xl flex flex-col items-center justify-start p-6 border border-white/40"
    >
       <div className="w-full flex justify-between items-center mb-5 border-b border-neutral-300/40 pb-2.5">
          <span className="text-[0.8rem] font-bold text-neutral-600 uppercase tracking-widest pl-1">周菜单</span>
          <div className="w-6 h-6 rounded-full bg-white/70 shadow-sm flex items-center justify-center text-[11px]">✨</div>
       </div>
       <div className="flex flex-col gap-2.5 w-full">
          <div className="h-8 w-full bg-white/50 rounded-xl flex items-center px-2.5 text-[0.8rem] font-medium text-neutral-700 gap-2 border border-white/40 shadow-[0_2px_5px_rgba(0,0,0,0.02)]"><span className="text-base drop-shadow-sm">🥗</span> 轻食波奇饭</div>
          <div className="h-8 w-full bg-white/50 rounded-xl flex items-center px-2.5 text-[0.8rem] font-medium text-neutral-700 gap-2 border border-white/40 shadow-[0_2px_5px_rgba(0,0,0,0.02)]"><span className="text-base drop-shadow-sm">🍣</span> 鲜萃三文鱼</div>
          <div className="h-8 w-full bg-white/50 rounded-xl flex items-center px-2.5 text-[0.8rem] font-medium text-neutral-700 gap-2 border border-white/40 shadow-[0_2px_5px_rgba(0,0,0,0.02)]"><span className="text-base drop-shadow-sm">🥑</span> 牛油果吐司</div>
       </div>
       <div className="mt-auto w-full h-[2.35rem] bg-gradient-to-r from-[#A5D0FF] to-[#c7c7fccc] rounded-xl flex items-center justify-center text-[0.85rem] font-bold text-neutral-800 shadow-[0_4px_12px_rgba(165,208,255,0.3)] gap-1.5 cursor-default relative overflow-hidden backdrop-blur-sm ring-1 ring-white/50">
         <div className="absolute inset-0 bg-white/10"></div>
         一键分享 <span className="text-sm">📸</span>
       </div>
    </motion.div>

    <motion.div 
      animate={{ y: [-6, 6, -6], scale: [1, 1.1, 1], rotate: [-5, 5, -5] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.2 }}
      className="absolute -top-4 -right-5 text-[3.5rem] drop-shadow-xl"
    >
      💬
    </motion.div>
    <motion.div 
       animate={{ y: [6, -6, 6], rotate: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      className="absolute -bottom-3 -left-6 text-[3.8rem] drop-shadow-xl"
    >
      🎉
    </motion.div>
  </div>
);

const ONBOARDING_STEPS = [
  {
    title: '告别难熬控糖\n开启趣味闯关',
    subtitle: '自动识别食物糖分，轻松管好每日摄入',
    illustration: <Illustration1 />
  },
  {
    title: '打卡做任务\n解锁专属奖励',
    subtitle: '每日签到、饮食记录、完成挑战，攒积分升等级',
    illustration: <Illustration2 />
  },
  {
    title: '每周菜单一键导出\n轻松分享打卡',
    subtitle: '复盘一周饮食、生成专属菜单，社交平台自信分享',
    illustration: <Illustration3 />
  }
];

interface OnboardingProps {
  onBackToSplash: () => void;
  onFinish: () => void;
}

export function Onboarding({ onBackToSplash, onFinish }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }
    })
  };

  const handleNext = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    } else {
      onFinish();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    } else {
      onBackToSplash();
    }
  };

  const stepData = ONBOARDING_STEPS[currentStep];
  const isLast = currentStep === ONBOARDING_STEPS.length - 1;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col h-full relative z-10 w-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-14 h-[4.5rem]">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={handleBack}
          className="w-[2.6rem] h-[2.6rem] bg-white/70 rounded-[0.85rem] flex items-center justify-center shadow-[0_2px_10px_rgb(0,0,0,0.03)] backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6 text-neutral-700 -ml-0.5" />
        </motion.button>
        
        <div className="flex gap-2 items-center absolute left-1/2 -translate-x-1/2">
          {ONBOARDING_STEPS.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${i === currentStep ? 'w-5 bg-neutral-800' : 'w-1.5 bg-neutral-400/40'}`}
            />
          ))}
        </div>

        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={onFinish}
          className={`px-5 py-2.5 bg-white/70 rounded-[1.1rem] text-[0.95rem] font-medium shadow-[0_2px_10px_rgb(0,0,0,0.03)] backdrop-blur-md transition-opacity duration-300 ${isLast ? 'opacity-0 pointer-events-none' : 'opacity-100 text-neutral-800'}`}
        >
          跳过
        </motion.button>
      </div>

      <div className="flex-1 flex flex-col justify-center px-8 pb-10 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex-1 flex flex-col absolute inset-0 pt-8"
          >
            {/* Illustration Area */}
            <div className="flex-[1.2] flex items-center justify-center">
              {stepData.illustration}
            </div>

            {/* Text Area */}
            <div className="flex-[0.8] flex flex-col items-center pt-8 px-2 mx-auto max-w-[320px]">
              <h2 className="text-[1.7rem] font-bold mb-4 text-neutral-900 tracking-tight leading-[1.3] text-center whitespace-pre-line">
                {stepData.title}
              </h2>
              <p className="text-neutral-600 font-medium leading-[1.4] text-[0.95rem] text-center max-w-[260px]">
                {stepData.subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Button */}
      <div className="px-6 pb-12 w-full z-20">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleNext}
          className={`w-full text-neutral-900 font-semibold py-4 rounded-[1.25rem] flex items-center justify-center gap-2.5 shadow-[0_8px_20px_rgb(0,0,0,0.06)] hover:bg-white transition-all duration-300 ${isLast ? 'bg-white/95 text-[1.1rem]' : 'bg-white/80 backdrop-blur-md text-[1.05rem]'}`}
        >
          <span className="translate-y-[0.5px]">{isLast ? '立即开启' : '下一步'}</span>
          {!isLast && <ChevronRight className="w-5 h-5 -mr-1" />}
        </motion.button>
      </div>

       {/* iPhone Home Indicator Simulation */}
       <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-neutral-900 rounded-full z-20"></div>
    </motion.div>
  );
}
