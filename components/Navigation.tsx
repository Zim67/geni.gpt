import {
  FunctionComponent,
  ReactElement,
} from 'react'
import Link from 'next/link'
import SignInOutButton from '@/components/SignInOutButton'
const Navigation: FunctionComponent = (): ReactElement => (
  <nav className='py-4 px-6 flex justify-between items-center bg-green-700'>
    <div className="flex items-center">
      <Link
        href='#'
        className='font-bold text-xl mr-6'
      >
        <span className="text-teal-200">
          Geni
        </span>
        <span className="text-green-300">
          GPT
        </span>
      </Link>
      <ul className="hidden md:flex space-x-6 text-white">
        <li>
          <Link
            href='#'
            className='hover:text-green-300 transition-colors'
          >
            Home
          </Link>
          <Link
            href='#'
            className='hover:text-green-300 transition-colors'
          >
            AI Detection
          </Link>
          <Link
            href='#'
            className='hover:text-green-300 transition-colors'
          >
            Pricing
          </Link>
          <Link
            href='#'
            className='hover:text-green-300 transition-colors'
          >
            About
          </Link>
        </li>
      </ul>
    </div>
    <div className="hidden md:flex items-center space-x-4">
      <SignInOutButton/>
    </div>
  </nav>
)
export default Navigation