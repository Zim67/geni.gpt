'use client'
import {
  FunctionComponent,
  ReactElement
} from 'react'
import ErrorPageProps from '@/interfaces/ErrorPageProps'
const ErrorPage: FunctionComponent<ErrorPageProps> = ({
  error,
  reset
}): ReactElement => (
  <section>
    <h2>
      {error.message}
    </h2>
    <button onClick={(): void => reset()}>
      Retry
    </button>
  </section>
)
export default ErrorPage