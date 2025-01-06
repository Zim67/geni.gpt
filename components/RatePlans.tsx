import {
  FunctionComponent,
  ReactElement
} from 'react'
import RatePlanCard from '@/components/RatePlanCard'
const RatePlans: FunctionComponent = (): ReactElement => (
  <section className='py-16'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
          Subscription Plans
        </h2>
        <p className='mt-4 text-lg text-gray-500'>
          Choose a plan that fits your needs and start enahncing your content today!
        </p>
      </div>
      <div className='mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-6'>
        <RatePlanCard
          title='Free'
          desc='For new users exploring the platform.'
          rate={0}
          features={[
            '3 analyses monthly',
            'Basic insights',
            'Dashboard access'
          ]}
        />
        <RatePlanCard
          title='Basic'
          desc='For individuals and content creators.'
          rate={9.99}
          features={[
            '20 analyses monthly',
            'Full insights & suggestions',
            'Priority email support'
          ]}
        />
        <RatePlanCard
          title='Premium'
          desc='For businesses and professionals.'
          rate={29.99}
          features={[
            'Unlimited analyses',
            'Advanced enhancement tools',
            'Detailed analytics',
            'Dedicated support'
          ]}
        />
        <RatePlanCard
          title='Custom'
          desc='For organizations with unique needs.'
          features={[
            'All Premium features',
            'Multi-user accounts'
          ]}
        />
      </div>
    </div>
  </section>
)
export default RatePlans