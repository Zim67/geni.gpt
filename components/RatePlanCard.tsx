import {
  FunctionComponent,
  ReactElement
} from 'react'
import FeatureProps from '@/interfaces/FeatureProps'
import RatePlanRegisterButton from '@/components/RatePlanRegisterButton'
import RatePlanFeature from '@/components/RatePlanFeature'
const RatePlanCard: FunctionComponent<FeatureProps> = ({
  title,
  desc,
  rate,
  features = []
}): ReactElement => (
  <div className='border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200'>
    <div className='p-6'>
        <h2 className='text-lg leading-6 font-medium text-gray-900'>
          {title}
        </h2>
        <p className='mt-4 text-sm text-gray-500'>
          {desc}
        </p>
        {rate && rate > 0 && (
          <p className='mt-8'>
            <span className='text-4xl font-extrabold text-gray-900'>
              ${rate}
            </span>
            <span className='text-base font-medium text-gray-500'>
              monthly
            </span>
          </p>
        )}
        <RatePlanRegisterButton message={rate ? rate > 0 ? 'Start Trial' : 'Start for Free' : 'Contact Sales'}/>
    </div>
    <div className='pt-6 pb-8 px-6'>
      <ul
        className='mt-6 space-y-4'
        role='list'
      >
        {features.map((
          feature: string,
          index: number
        ): ReactElement => (
          <RatePlanFeature
            key={index}
            desc={feature}
          />
        ))}
      </ul>
    </div>
  </div>
)
export default RatePlanCard