import Google, {GoogleProfile} from 'next-auth/providers/google'
import {AuthOptions} from 'next-auth'
import connectSequelize from '@/utils/connectSequelize'
import UserModel from '@/models/UserModel'
import SignInParams from '@/interfaces/SignInParams'
import GoogleSignInParams from '@/interfaces/GoogleSignInParams'
import SessionParams from '@/interfaces/SessionParams'
import SessionWithUserId from '@/interfaces/SessionWithUserId'
import AdapterUserWithId from '@/interfaces/AdapterUserWithId'
const authOptions: AuthOptions = {
  providers: [
    Google<GoogleProfile>({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  callbacks: {
    async signIn(params: SignInParams): Promise<boolean> {
      const {profile}: GoogleSignInParams = params as GoogleSignInParams
      await connectSequelize()
      const user: UserModel | null = await UserModel.findOne({
        where: {
          email: profile.email
        }
      })
      if (user) {
        user.image = profile.picture
        await user.save()
      } else {
        await UserModel.create({
          email: profile.email,
          username: profile.name,
          image: profile.picture,
          role: await UserModel.findOne({
            where: {
              role: 'root'
            }
          }) ? 'user' : 'root',
          tier: 'free'
        })
      }
      return true
    },
    async session(params: SessionParams): Promise<SessionWithUserId> {
      const {session} = params
      const sessionUser: AdapterUserWithId = session.user as AdapterUserWithId
      return {
        ...session,
        user: {
          ...sessionUser,
          id: (await UserModel.findOne({
            where: {
              email: sessionUser.email
            }
          }))?.id ?? ''
        }
      }
    }
  }
}
export default authOptions