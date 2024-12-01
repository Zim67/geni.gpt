import UserSqlRecord from '@/interfaces/UserSqlRecord'
export default interface ServerActionResponse {
  error?: string
  message?: string
  success: boolean
  sessionUser?: UserSqlRecord
}