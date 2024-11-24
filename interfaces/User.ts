import SqlRecord from '@/interfaces/SqlRecord'
interface User extends SqlRecord {
  email: string
  username: string
  image?: string
  role: 'admin' | 'root' | 'user'
  tier: 'basic' | 'free' | 'prem'
}
export default User