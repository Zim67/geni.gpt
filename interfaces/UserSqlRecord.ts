import SqlRecord from '@/interfaces/SqlRecord'
interface UserSqlRecord extends SqlRecord {
  email: string
  username: string
  image?: string
  role: 'admin' | 'root' | 'user'
  tier: 'basic' | 'free' | 'prem'
}
export default UserSqlRecord