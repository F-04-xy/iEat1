import { motion } from 'motion/react';
import { UtensilsCrossed } from 'lucide-react';
import { useEffect } from 'react';

interface SplashProps {
  onNext: () => void;
}

export function Splash({ onNext }: SplashProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onNext]);

  const floatingEmojis = [
    { emoji: '😎', top: '15%', left: '28%', delay: 0, scale: 1.3, rotate: -5 },
    { emoji: '🌶️', top: '20%', left: '45%', delay: 0.5, scale: 1.2, rotate: 15 },
    { emoji: '🥰', top: '16%', left: '63%', delay: 1, scale: 1.4, rotate: 10 },
    { emoji: '🥦', top: '23%', left: '13%', delay: 1.2, scale: 1.1, rotate: -15 },
    { emoji: '👀', top: '26%', left: '29%', delay: 0.2, scale: 0.9, rotate: 0 },
    { emoji: '🥐', top: '29%', left: '43%', delay: 0.7, scale: 1.2, rotate: -5 },
    { emoji: '👅', top: '25%', left: '63%', delay: 1.4, scale: 1.4, rotate: 5 },
    { emoji: '🧊', top: '21%', left: '79%', delay: 0.4, scale: 1, rotate: 5 },
    { emoji: '🍔', top: '35%', left: '21%', delay: 0.9, scale: 1.1, rotate: -5 },
    { emoji: '💌', top: '35%', left: '71%', delay: 1.1, scale: 1, rotate: -10 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col h-full relative z-10 font-sans w-full"
    >
      <div className="flex-1 relative w-full pt-12">
        {floatingEmojis.map((item, index) => (
          <motion.div
            key={index}
            animate={{ 
              y: [0, -8, 0],
              x: [0, item.rotate > 0 ? 3 : -3, 0]
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
            className="absolute drop-shadow-md cursor-default pointer-events-none"
            style={{ 
              top: item.top, 
              left: item.left, 
              transform: `translate(-50%, -50%) scale(${item.scale}) rotate(${item.rotate}deg)`,
              fontSize: '1.75rem' 
            }}
          >
            {item.emoji}
          </motion.div>
        ))}

        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
            className="w-[110px] h-[110px] bg-white rounded-[38px] shadow-[0_12px_30px_rgb(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)] flex flex-col items-center justify-center relative mb-8 backdrop-blur-md"
          >
            <div className="relative flex items-center justify-center w-full h-full">
              <div className="absolute inset-0 m-auto border-[1.5px] border-[#adcaf8] rounded-full w-[4.5rem] h-[4.5rem] opacity-70"></div>
              <UtensilsCrossed className="w-11 h-11 text-[#83AEED] z-10 relative stroke-[1.5]" />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-3 border-b-[2px] border-[#91b7f0] rounded-[50%] opacity-60"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center px-4"
          >
            <h1 className="text-[2.25rem] font-semibold text-neutral-900 tracking-tight leading-[1.15]">
              Calm mind, <br/> healthy bite.
            </h1>
            <p className="text-neutral-500 text-sm mt-3.5 font-medium tracking-wide">开启健康有趣的一天</p>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-neutral-900 rounded-full"></div>
    </motion.div>
  );
}
