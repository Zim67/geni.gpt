import {
  FunctionComponent,
  ReactElement
} from 'react'
import {Metadata} from 'next'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
export const metadata: Metadata = {}
const HomePage: FunctionComponent = (): ReactElement => (
  <>
    <Hero/>
    <Features/>
  </>
)
export default HomePage