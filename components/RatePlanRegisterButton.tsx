'use client'
import {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState
} from 'react'
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  SignInResponse,
  signIn
} from 'next-auth/react'
import {BuiltInProviderType} from 'next-auth/providers/index'
import Link from 'next/link'
import {FaGoogle} from 'react-icons/fa'
import State from '@/interfaces/State'
import {useGlobalContext} from '@/components/GlobalContextProvider'
import ButtonProps from '@/interfaces/ButtonProps'
const RatePlanRegisterButton: FunctionComponent<ButtonProps> = ({message}): ReactElement => {
  const {user}: State = useGlobalContext()
  const [
    providers,
    setProviders
  ] = useState<Record<
    LiteralUnion<
      BuiltInProviderType,
      string
    >,
    ClientSafeProvider
  > | null>(null)
  useEffect((): void => {
    const setAuthProviders: Function = async (): Promise<void> => setProviders(await getProviders())
    setAuthProviders()
  }, [])
  return (
    <>
      {user ? (
        <Link
          href='#'
          className='mt-8 block w-full bg-emerald-800 border border-emerald-700 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-emerald-900'
        >
          Dashboard
        </Link>
      ) : providers && Object.values(providers).map((
        provider: ClientSafeProvider,
        index: number
      ): ReactElement => (
        <button
          key={index}
          onClick={(): Promise<SignInResponse | undefined> => signIn(provider.id)}
          className='mt-8 block w-full bg-emerald-800 border border-emerald-700 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-emerald-900'
        >
          <FaGoogle className='text-white mr-2'/>
          <span>
            {message}
          </span>
        </button>
      ))}
    </>
  )
}
export default RatePlanRegisterButton