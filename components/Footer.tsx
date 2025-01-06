import Link from 'next/link'
import {
  FunctionComponent,
  ReactElement
} from 'react'
import {
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube
} from 'react-icons/fa'
import {FaThreads} from 'react-icons/fa6'
import MailingListSubscribeForm from '@/components/MailingListSubscribeForm'
const Footer: FunctionComponent = (): ReactElement => (
  <footer className='bg-gray-900 text-white py-8'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div>
          <h3 className='text-lg font-semibold mb-4'>
            GeniGPT
          </h3>
          <p className='text-gray-400'>
            Unleash your creativity with AI-powered content enhancements.
          </p>
          <ul className='mt-4 flex justify-start space-x-2'>
            <li>
              <Link href='#'>
                <FaLinkedin className='w-10 h-10'/>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <FaInstagram className='w-10 h-10'/>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <FaThreads className='w-10 h-10'/>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <FaYoutube className='w-10 h-10'/>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <FaTiktok className='w-10 h-10'/>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-semibold mb-4'>
            Resources
          </h3>
          <ul className='space-y-2'>
            <li>
              <Link
                href='#'
                className='text-gray-400 hover:text-white'
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='text-gray-400 hover:text-white'
              >
                Guides
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='text-gray-400 hover:text-white'
              >
                API Documentation
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='text-gray-400 hover:text-white'
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-semibold mb-4'>
            Company
          </h3>
          <ul className='space-y-2'>
            <li>
              <Link
                href='#'
                className='text-gray-400 hover:text-white'
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='text-gray-400 hover:text-white'
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='text-gray-400 hover:text-white'
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='text-gray-400 hover:text-white'
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-semibold mb-4'>
            Subscribe to our Mailing List
          </h3>
          <p className='text-gray-400 mb-4'>
            Receive our latest news and updates
          </p>
          <MailingListSubscribeForm/>
        </div>
      </div>
      <div className='mt-8 border-t border-gray-700 pt-8'>
        <p className='text-gray-400 text-sm'>
          &copy; 2025 GeniGPT. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)
export default Footer