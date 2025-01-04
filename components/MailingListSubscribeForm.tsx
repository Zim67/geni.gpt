'use client'
import {
  FunctionComponent,
  ReactElement
} from 'react'
import {useFormStatus} from 'react-dom'
import {toast} from 'react-toastify'
import ServerActionResponse from '@/interfaces/ServerActionResponse'
import subscribeToMailingList from '@/serverActions/subscribeToMailingList'
const MailingListSubscribeForm: FunctionComponent = (): ReactElement => {
  const handleSubscribe: Function = async (form: FormData): Promise<void> => {
    const {
      error,
      message,
      success
    }: ServerActionResponse = await subscribeToMailingList(form.get('email')?.valueOf().toString() ?? '')
    success ? toast.success(message) : toast.error(error)
  }
  const pending: boolean = useFormStatus().pending
  return (
    <form action={handleSubscribe.bind(null)}>
      <div className='flex'>
        <input
          type='email'
          id='email'
          placeholder='Email address'
          className='bg-gray-800 text-white py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-200'
        />
        <button
          type='submit'
          disabled={pending}
          className='bg-teal-200 hover:bg-green-300 text-white py-2 px-4 rounded-r-md transition-colors duration-300'
        >
          {`Subscrib${pending ? 'ing...' : 'e'}`}
        </button>
      </div>
    </form>
  )
}
export default MailingListSubscribeForm