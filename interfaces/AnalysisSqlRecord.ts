import SqlRecord from '@/interfaces/SqlRecord'
interface AnalysisSqlRecord extends SqlRecord {
  user: string
  input: string
  score: number
  suggestions: string
}
export default AnalysisSqlRecord