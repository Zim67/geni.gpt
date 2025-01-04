import Link from 'next/link'
import {
  FunctionComponent,
  ReactElement
} from 'react'
import {
  FaInstagram,
  FaLinkedin,
  FaTiktok
} from 'react-icons/fa'
import {FaThreads} from 'react-icons/fa6'
const Footer: FunctionComponent = (): ReactElement => (
  <footer className='bg-gray-900 text-white py-8'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            GeniGPT
          </h3>
          <p className="text-gray-400">
            Unleash your creativity with AI-powered content enhancements.
          </p>
          <div className="mt-4">
            <Link
              href='#'
              className='text-teal-200 hover:text-green-300 mr-4'
            >
              <FaInstagram/>
            </Link>
            <Link
              href='#'
              className='text-teal-200 hover:text-green-300 mr-4'
            >
              <FaThreads/>
            </Link>
            <Link
              href='#'
              className='text-teal-200 hover:text-green-300 mr-4'
            >
              <FaTiktok/>
            </Link>
            <Link
              href='#'
              className='text-teal-200 hover:text-green-300 mr-4'
            >
              <FaLinkedin/>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Resources
          </h3>
          <ul className="space-y-2">
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
          <h3 className="text-lg font-semibold mb-4">
            Company
          </h3>
          <ul className="space-y-2">
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
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to our Mailing List
          </h3>
          <p className="text-gray-400 mb-4">
            Receive our latest news and updates
          </p>
          <form action="">
            <div className="flex">
              <input
                type="email"
                placeholder='Email address'
                className="bg-gray-800 text-white py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-200"
              />
              <button
                type='submit'
                className="bg-teal-200 hover:bg-green-300 text-white py-2 px-4 rounded-r-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8">
        <p className="text-gray-400 text-sm">
          &copy; 2025 GeniGPT. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)
export default Footer