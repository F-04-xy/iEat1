import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';

interface GoalSelectionProps {
  onBack: () => void;
  onNext: () => void;
}

const goalList = [
  { id: '1', emoji: '🍑', text: '学习健康知识' },
  { id: '2', emoji: '💦', text: '多喝水' },
  { id: '3', emoji: '🎮', text: '虚拟吃糖' },
  { id: '4', emoji: '👁️', text: '抗糖抗初老' },
  { id: '5', emoji: '📺', text: '健康控糖' },
  { id: '6', emoji: '🏄', text: '轻盈体态' },
  { id: '7', emoji: '🎉', text: '看食谱' },
  { id: '8', emoji: '🛡️', text: '预防疾病' },
  { id: '9', emoji: '📱', text: '打卡社交' },
  { id: '10', emoji: '🌴', text: '调整能量' },
  { id: '11', emoji: '😌', text: '想养成好习惯' },
  { id: '12', emoji: '🍕', text: '记录饮食' },
  { id: '13', emoji: '🍷', text: '查糖分' },
];

export function GoalSelection({ onBack, onNext }: GoalSelectionProps) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>(['5']);

  const toggleGoal = (id: string) => {
    if (selectedGoals.includes(id)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== id));
    } else {
      setSelectedGoals([...selectedGoals, id]);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col h-full relative z-10 w-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-14">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={onBack}
          className="w-[2.6rem] h-[2.6rem] bg-white/70 rounded-[0.85rem] flex items-center justify-center shadow-[0_2px_10px_rgb(0,0,0,0.03)] backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6 text-neutral-700 -ml-0.5" />
        </motion.button>
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="px-5 py-2.5 bg-white/70 rounded-[1.1rem] text-[0.95rem] font-medium shadow-[0_2px_10px_rgb(0,0,0,0.03)] backdrop-blur-md text-neutral-800"
        >
          跳过
        </motion.button>
      </div>

      <div className="px-7 pt-16 flex-1 flex flex-col">
        <h2 className="text-[20px] font-semibold mb-8 text-neutral-900 tracking-tight">你还喜欢...</h2>

        {/* Goals Cloud Layout */}
        <div className="flex flex-wrap gap-x-2.5 gap-y-3.5 justify-center w-full mx-auto pb-24 px-2">
          {goalList.map((goal) => {
            const isSelected = selectedGoals.includes(goal.id);
            return (
              <motion.button
                key={goal.id}
                whileTap={{ scale: 0.96 }}
                onClick={() => toggleGoal(goal.id)}
                className={`whitespace-nowrap flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[0.95rem] transition-all duration-300 relative ${
                  isSelected 
                    ? 'bg-white text-neutral-900 shadow-[0_6px_16px_rgb(0,0,0,0.09)] scale-[1.02] z-10 font-medium border border-transparent' 
                    : 'bg-transparent border-[0.75px] border-neutral-400/30 text-neutral-700/90 hover:bg-white/30 font-normal'
                }`}
              >
                {/* Soft Inner Highlight for selected state to match neumorphism */}
                {isSelected && (
                   <div className="absolute inset-0 rounded-full border border-white/50 pointer-events-none"></div>
                )}
                <span className="text-base drop-shadow-sm">{goal.emoji}</span>
                <span className="tracking-wide">{goal.text}</span>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Bottom Button */}
      <div className="px-6 pb-12 w-full">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="w-full bg-white/95 text-neutral-900 font-semibold py-4 rounded-[1.25rem] shadow-[0_8px_20px_rgb(0,0,0,0.06)] hover:bg-white transition-colors text-[1.05rem]"
        >
          下一步
        </motion.button>
      </div>

       {/* iPhone Home Indicator Simulation */}
       <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-neutral-900 rounded-full"></div>
    </motion.div>
  );
}
