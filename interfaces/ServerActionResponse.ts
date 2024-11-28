import UserSqlRecord from '@/interfaces/UserSqlRecord'
interface ServerActionResponse {
  error?: string
  message?: string
  success: boolean
  sessionUser?: UserSqlRecord
}
export default ServerActionResponse