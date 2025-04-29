import { ParallaxSection } from './components/ParallaxSection';
import { AnimatedContent } from './components/AnimatedContent';

function App() {
  return (
    <div className='min-h-screen bg-gray-800'>
      <div className='bg-gradient-to-b from-gray-800 bg-blue-500 h-screen flex items-center justify-center'>
        <h1 className='text-4xl font-bold text-white '>
          Scroll down for parallax effect at the end
        </h1>
      </div>

      <ParallaxSection speed={0} className='h-screen bg-blue-500'>
        Industrial
      </ParallaxSection>

      <AnimatedContent className='bg-gradient-to-b from-blue-500 to-green-500' />

      <ParallaxSection speed={0} className='h-screen bg-green-500'>
        Animations
      </ParallaxSection>

      <AnimatedContent className='bg-gradient-to-b from-green-500 to-purple-500' />

      <ParallaxSection speed={50} className='h-screen bg-purple-500'>
        Parallax Effect
      </ParallaxSection>
    </div>
  );
}

export default App;
