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
const HeroTryButton: FunctionComponent = (): ReactElement => {
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
          className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10'
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
          className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10'
        >
          <FaGoogle className='text-white mr-2'/>
          <span>
            Try it for free!
          </span>
        </button>
      ))}
    </>
  )
}
export default HeroTryButton