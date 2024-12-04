import SqlRecord from '@/interfaces/SqlRecord'
export default interface PaymentSqlRecord extends SqlRecord {
  user: string
  subscription: string
  total: number
  approved: boolean
}