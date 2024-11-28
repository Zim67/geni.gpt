'use client'
import {
  Context,
  createContext,
  FunctionComponent,
  ReactElement,
  useContext,
  useEffect,
  useState
} from 'react'
import State from '@/interfaces/State'
import DestructuredReactNode from '@/interfaces/DestructuredReactNode'
import UserSqlRecord from '@/interfaces/UserSqlRecord'
import ServerActionResponse from '@/interfaces/ServerActionResponse'
import getSessionUser from '@/serverActions/getSessionUser'
const GlobalContext: Context<State> = createContext<State>({})
const GlobalContextProvider: FunctionComponent<DestructuredReactNode> = ({children}): ReactElement => {
  const [user, setUser] = useState<UserSqlRecord | undefined>(undefined)
  useEffect((): void => {
    const getUser: Function = async (): Promise<void> => {
      const {success, sessionUser}: ServerActionResponse = await getSessionUser()
      success && sessionUser && setUser(sessionUser)
    }
    getUser()
  }, [])
  return (
    <GlobalContext.Provider value={{user}}>
      {children}
    </GlobalContext.Provider>
  )
}
export const useGlobalContext: Function = (): State => useContext<State>(GlobalContext)
export default GlobalContextProvider