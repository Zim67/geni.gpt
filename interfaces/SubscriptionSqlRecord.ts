import SqlRecord from '@/interfaces/SqlRecord'
interface SubscriptionSqlRecord extends SqlRecord {
  user: string
  tier: 'basic' | 'prem'
  active: boolean
  start: string
  end: string
  payments: string[]
}
export default SubscriptionSqlRecord