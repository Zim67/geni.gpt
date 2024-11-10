import Google from 'next-auth/providers/google'
import connectSequelize from '@/utils/connectSequelize'
import UserModel from '@/models/UserModel'
const authOptions = {
  providers: [
    Google({
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
    async signIn(params) {
      const {profile} = params
      await connectSequelize()
      const user = await UserModel.findOne({
        email: profile?.email
      })
      if (user) {
        user.image = profile.picture
        await user.save()
      } else {
        await UserModel.create({
          email: profile.email,
          username: profile.name,
          image: profile.picture
        })
      }
      return true
    },
    async session(params) {
      const {session} = params
      const sessionUser = session.user
      return {
        ...session,
        user: {
          ...sessionUser,
          id: (await UserModel.findOne({
            email: sessionUser.email
          }))?.id
        }
      }
    }
  }
}
export default authOptions