import {
  FunctionComponent,
  ReactElement
} from 'react'
import {Metadata} from 'next'
import Hero from '@/components/Hero'
export const metadata: Metadata = {}
const HomePage: FunctionComponent = (): ReactElement => (
  <>
    <Hero/>
  </>
)
export default HomePage