import {
  FunctionComponent,
  ReactElement
} from 'react'
import Image from 'next/image'
import HeroTryButton from '@/components/HeroTryButton'
const Hero: FunctionComponent = (): ReactElement => (
  <section className='py-20'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='lg:flex lg:items-center lg:justify-between'>
        <div className='lg:w-1/2'>
          <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            <span className='block'>
              Unleash the power of
            </span>
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
              AI Detection
            </span>
          </h2>
          <p className='mt-3 mr-1 max-w-2xl text-lg text-gray-500'>
            GeniGPT's advanced AI detection technology helps you identify AI-generated content
            and enahance it with creative suggestions for a truly unique and polished result.
          </p>
          <div className='mt-8 sm:flex sm:justify-center lg:justify-start'>
            <div className='rounded-md shadow'>
              <HeroTryButton/>
            </div>
          </div>
        </div>
        <div className='mt-8 lg:mt-0 lg:w-1/2'>
          <div className='relative'>
            <Image
              src='https://images.unsplash.com/photo-1677442136019-21780ecad995'
              width={200}
              height={50}
              alt='AI Neural Network Visualization'
              className='w-full h-auto rounded-2xl shadow-2xl transform transition-transform hover:scale-105'
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)
export default Hero