import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const ParallaxSection = ({
  children,
  className = '',
  speed = 0.5,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);

  // Split text into letters
  const text = String(children);
  const letters = text.split('');

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`relative w-screen overflow-hidden ${className}`}
    >
      <div className='flex justify-center items-center h-full w-screen'>
        <div className='w-screen flex justify-center'>
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className='text-4xl font-bold text-white inline-block'
              initial={{ x: 0 }}
              animate={
                isInView
                  ? {
                      x: 0,
                      opacity: 1,
                    }
                  : {
                      x:
                        index < letters.length / 2
                          ? -window.innerWidth
                          : window.innerWidth,
                      opacity: 0,
                    }
              }
              transition={{
                duration: 1.5,
                delay: index * 0.05,
                ease: 'easeOut',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
