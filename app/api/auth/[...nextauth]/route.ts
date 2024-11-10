import NextAuth from 'next-auth/next'
import authOptions from '@/config/authOptions'
export {dynamic} from '@/config/dynamic'
const NextAuthHandler = NextAuth(authOptions)
export {
  /**
   * @name    GET
   * @desc    NextAuth
   * @route   GET /api/auth/[...nextauth]
   * @access  public
   */
  NextAuthHandler as GET,
  /**
   * @name    POST
   * @desc    NextAuth
   * @route   POST /api/auth/[...nextauth]
   * @access  public
   */
  NextAuthHandler as POST
}