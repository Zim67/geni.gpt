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
  signIn,
  signOut
} from 'next-auth/react'
import {BuiltInProviderType} from 'next-auth/providers/index'
import {FaGoogle} from 'react-icons/fa'
import State from '@/interfaces/State'
import {useGlobalContext} from '@/components/GlobalContextProvider'
const SignInOutButton: FunctionComponent = (): ReactElement => {
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
        <button
          onClick={(): Promise<void> => signOut()}
          className='block px-4 py-2 text-sm text-green-300'
        >
          Log Out
        </button>
      ) : providers && Object.values(providers).map((
        provider: ClientSafeProvider,
        index: number
      ): ReactElement => (
        <button
          key={index}
          onClick={(): Promise<SignInResponse | undefined> => signIn(provider.id)}
          className='flex items-center text-white bg-green-300 hover:bg-teal-200 hover:text-white rounded-md px-3 py-2'
        >
          <FaGoogle className='text-white mr-2'/>
          <span>
            Log In or Register
          </span>
        </button>
      ))}
    </>
  )
}
export default SignInOutButton