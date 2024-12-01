import SqlRecord from '@/interfaces/SqlRecord'
export default interface SubscriptionSqlRecord extends SqlRecord {
  user: string
  tier: 'basic' | 'prem'
  active: boolean
  start: string
  end: string
  payments: string[]
}