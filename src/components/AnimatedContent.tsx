import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedContentProps {
  className?: string;
}

export const AnimatedContent = ({ className = '' }: AnimatedContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div ref={ref} className={`h-screen w-screen ${className}`}>
      <div className='h-full w-full flex items-center justify-center'>
        <motion.div
          className='grid grid-cols-2 gap-4 p-8'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              className='bg-white/20 backdrop-blur-sm rounded-lg p-6 h-48 flex items-center justify-center'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <span className='text-white text-xl font-bold'>
                Content {index + 1}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
