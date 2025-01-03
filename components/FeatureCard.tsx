import {
  FunctionComponent,
  ReactElement
} from 'react'
import FeatureCardProps from '@/interfaces/FeatureCardProps'
const FeatureCard: FunctionComponent<FeatureCardProps> = ({
  title,
  desc,
  svg
}): ReactElement => (
  <div className='relative'>
    <dt>
      <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500'>
        <svg
          className='h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden={true}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d={svg}
          />
        </svg>
      </div>
      <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
        {title}
      </p>
    </dt>
    <dd className='mt-2 ml-16 text-base text-gray-500'>
      {desc}
    </dd>
  </div>
)
export default FeatureCard