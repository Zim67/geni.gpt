import Google, {GoogleProfile} from 'next-auth/providers/google'
import {AuthOptions} from 'next-auth'
import connectSequelize from '@/utils/connectSequelize'
import userSqlModel from '@/models/userSqlModel'
import SignInParams from '@/interfaces/SignInParams'
import SessionParams from '@/interfaces/SessionParams'
import SessionWithUserId from '@/interfaces/SessionWithUserId'
const authOpts: AuthOptions = {
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
    signIn: async (params: SignInParams): Promise<boolean> => {
      const {profile}: any = params
      await connectSequelize()
      const user: any = await userSqlModel.findOne({
        where: {
          email: profile.email
        }
      })
      if (user) {
        user.image = profile.picture
        await user.save()
      } else {
        await userSqlModel.create({
          email: profile.email,
          username: profile.name,
          image: profile.picture,
          role: await userSqlModel.findOne({
            where: {
              role: 'root'
            }
          }) ? 'user' : 'root',
          tier: 'free',
          analyses: [],
          subscriptions: [],
          payments: []
        })
      }
      return true
    },
    session: async (params: SessionParams): Promise<SessionWithUserId> => {
      const {session}: SessionParams = params
      const {user}: any = session
      const registeredUser: any = await userSqlModel.findOne({
        where: {
          email: user.email
        }
      })
      return {
        ...session,
        user: {
          ...user,
          id: registeredUser?.id ?? ''
        }
      }
    }
  }
}
export default authOpts