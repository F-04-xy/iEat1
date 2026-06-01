import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';

const AppleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-[1.125rem] h-[1.125rem] fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.59 10.32c-.03-2.3 1.88-3.41 1.95-3.46-1.07-1.57-2.73-1.78-3.32-1.81-1.42-.14-2.77.83-3.5.83-.71 0-1.83-.81-3.01-.79-1.53.02-2.95.89-3.74 2.27-1.59 2.76-.41 6.84 1.15 9.09.76 1.09 1.65 2.3 2.82 2.26 1.12-.04 1.55-.73 2.92-.73 1.36 0 1.76.73 2.94.7 1.2-.02 1.98-1.12 2.73-2.22.86-1.26 1.22-2.48 1.23-2.55-.02-.01-2.38-.91-2.4-3.56L16.59 10.32ZM15.42 7.02c.62-.75 1.04-1.79.93-2.83-.9.04-1.98.6-2.62 1.36-.57.67-1.07 1.75-.93 2.77 1.01.08 2-.51 2.62-1.3Z"/>
  </svg>
);

const WeChatLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.2 14.5c-.3.1-.6.2-.9.2-2.8 0-5.1-1.9-5.1-4.2s2.3-4.2 5.1-4.2 5.1 1.9 5.1 4.2c0 .4-.1.7-.1 1.1 1.3-1 3-1.5 4.8-1.5 3.9 0 7 2.6 7 5.8s-3.1 5.8-7 5.8c-.8 0-1.6-.1-2.3-.4l-2.4 1.2c-.3.1-.6 0-.6-.3v-1.6c-2.4-1.2-4.1-3.4-4.1-6.1 0-.1 0-.1 0-.2z" opacity="0.4"/>
    <path d="M17.1 10.1C13.2 10.1 10 12.7 10 16s3.1 5.8 7 5.8c.8 0 1.6-.1 2.3-.3l2.4 1.2c.3.1.6 0 .6-.3v-1.6C24.8 19.5 26 17.8 26 16c0-3.2-3-5.9-6.9-5.9zm-2 2.6c.4 0 .7.3.7.8s-.3.7-.7.7-.7-.3-.7-.7.3-.8.7-.8zm4.1 0c.4 0 .7.3.7.8s-.3.7-.7.7-.7-.3-.7-.7.3-.8.7-.8zm-11-8.5c-3.1 0-5.6 2.1-5.6 4.7 0 1.5.9 2.8 2.3 3.7v1.4c0 .3.3.5.6.3l2-.9c.9.2 1.8.3 2.8.3 2.9 0 5.3-1.9 5.5-4.4C13.2 6 10.9 4.2 8.2 4.2zm-1.8 3c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm3.8 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z"/>
  </svg>
);

interface LoginScreenProps {
  onBack: () => void;
  onNext: () => void;
}

export function LoginScreen({ onBack, onNext }: LoginScreenProps) {
  const [agreed, setAgreed] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col h-full relative z-10 w-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-14 h-[4.5rem]">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={onBack}
          className="w-[2.6rem] h-[2.6rem] bg-white/70 rounded-[0.85rem] flex items-center justify-center shadow-[0_2px_10px_rgb(0,0,0,0.03)] backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6 text-neutral-700 -ml-0.5" />
        </motion.button>
      </div>

      <div className="px-7 pt-12 flex-1 flex flex-col relative overflow-hidden items-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
          className="w-24 h-24 bg-white rounded-3xl shadow-[0_12px_30px_rgb(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)] flex items-center justify-center mb-8"
        >
          <span className="text-[3rem]">🥳</span>
        </motion.div>
        
        <h2 className="font-bold text-neutral-900 tracking-tight leading-[1.3] text-center text-[1.65rem] whitespace-pre-line mb-3">
          你的专属控糖计划{'\n'}已生成！
        </h2>
        <p className="text-neutral-500 font-medium text-center px-4 leading-[1.6] text-[0.95rem] mb-auto">
          登录以保存你的数据，开启健康之旅。
        </p>

        <div className="w-full flex flex-col gap-3.5 mb-10 mt-12">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => {
               if (agreed) onNext();
               else alert('请先勾选同意用户协议和隐私政策');
            }}
            className="w-full bg-white/95 text-neutral-900 font-semibold py-4 rounded-[1.25rem] flex items-center justify-center gap-2.5 shadow-[0_8px_20px_rgb(0,0,0,0.06)] hover:bg-white transition-colors"
          >
            <AppleLogo />
            <span className="text-[1.05rem]">用苹果账号登陆</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => {
               if (agreed) onNext();
               else alert('请先勾选同意用户协议和隐私政策');
            }}
            className="w-full bg-white/40 text-neutral-700 font-semibold py-4 rounded-[1.25rem] flex items-center justify-center gap-2.5 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] hover:bg-white/60 transition-colors border border-white/40"
          >
            <WeChatLogo />
            <span className="text-[1.05rem]">微信快捷登陆</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => {
               if (agreed) onNext();
               else alert('请先勾选同意用户协议和隐私政策');
            }}
            className="w-full text-neutral-600 font-medium py-2 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2 text-[0.95rem]"
          >
            手机号验证码登陆
          </motion.button>
        </div>
      </div>

      <div className="px-6 pb-10 w-full z-20 flex justify-center">
        <label className="flex items-start gap-2.5 cursor-pointer max-w-[280px]">
           <div className={`mt-0.5 w-4 h-4 rounded-sm flex items-center justify-center border transition-colors shrink-0 ${agreed ? 'bg-neutral-800 border-neutral-800 text-white' : 'border-neutral-400/60 bg-transparent'}`}>
             {agreed && <svg viewBox="0 0 14 14" className="w-3 h-3 fill-current"><path d="M11.4 3.4L5.5 9.4l-2.9-2.9c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l3.3 3.3c.1.1.2.1.3.1.1 0 .2 0 .3-.1l6.3-6.4c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0z"/></svg>}
           </div>
           <input type="checkbox" className="sr-only" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
           <span className="text-[0.75rem] text-neutral-500 leading-snug">
              已阅读并同意 <a href="#" className="text-neutral-800 underline underline-offset-2">《用户协议》</a> 和 <a href="#" className="text-neutral-800 underline underline-offset-2">《隐私政策》</a>
           </span>
        </label>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-neutral-900 rounded-full z-20"></div>
    </motion.div>
  );
}
