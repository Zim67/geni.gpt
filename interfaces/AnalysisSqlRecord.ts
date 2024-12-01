import SqlRecord from '@/interfaces/SqlRecord'
export default interface AnalysisSqlRecord extends SqlRecord {
  user: string
  input: string
  score: number
  suggestions: string
}