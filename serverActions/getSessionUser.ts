'use server'
import {getServerSession} from 'next-auth'
import {Model} from 'sequelize'
import authOpts from '@/config/authOpts'
import ServerActionResponse from '@/interfaces/ServerActionResponse'
import SessionWithUserId from '@/interfaces/SessionWithUserId'
import UserSqlRecord from '@/interfaces/UserSqlRecord'
import userSqlModel from '@/models/userSqlModel'
import connectSequelize from '@/utils/connectSequelize'
const getSessionUser: Function = async (): Promise<ServerActionResponse> => {
  try {
    const session: SessionWithUserId | null = await getServerSession(authOpts)
    if (session) {
      await connectSequelize()
      const user: Model<UserSqlRecord> | null = await userSqlModel.findByPk(session.user.id)
      return user ? {
        success: true,
        sessionUser: JSON.parse(JSON.stringify(user))
      } : {
        error: '401: Unauthorized',
        success: false
      }
    } else {
      return {
        error: '401: Unauthorized',
        success: false
      }
    }
  } catch (error: any) {
    return {
      error: `500: Internal server error getting session user:\n${error.toString()}`,
      success: false
    }
  }
}
export default getSessionUser