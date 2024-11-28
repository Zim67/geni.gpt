import SqlRecord from '@/interfaces/SqlRecord'
interface PaymentSqlRecord extends SqlRecord {
  user: string
  subscription: string
  total: number
  approved: boolean
}
export default PaymentSqlRecord