import {
  FunctionComponent,
  ReactElement
} from 'react'
import {Metadata} from 'next'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import RatePlans from '@/components/RatePlans'
export const metadata: Metadata = {}
const HomePage: FunctionComponent = (): ReactElement => (
  <>
    <Hero/>
    <Features/>
    <RatePlans/>
  </>
)
export default HomePage