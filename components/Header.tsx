import {
  FunctionComponent,
  ReactElement
} from 'react'
import Navigation from '@/components/Navigation'
const Header: FunctionComponent = (): ReactElement => (
  <header>
    <Navigation/>
  </header>
)
export default Header