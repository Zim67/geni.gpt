'use server'
import ServerActionResponse from '@/interfaces/ServerActionResponse'
import mailingListEntrySqlModel from '@/models/mailingListEntrySqlModel'
import connectSequelize from '@/utils/connectSequelize'
const unsubscribeFromMailingList: Function = async (email: string): Promise<ServerActionResponse> => {
  try {
    await connectSequelize()
    await mailingListEntrySqlModel.destroy({
      where: {
        email
      }
    })
    return {
      success: true,
      message: 'You are no longer subscribed.'
    }
  } catch (error: any) {
    return {
      success: false,
      error: `500: Internal Server Error:\n${error.toString()}`
    }
  }
}
export default unsubscribeFromMailingList