'use client'
import {
  Context,
  createContext,
  FunctionComponent,
  ReactElement,
  useContext
} from 'react'
import State from '@/interfaces/State'
import DestructuredReactNode from '@/interfaces/DestructuredReactNode'
const GlobalContext: Context<State> = createContext<State>({})
const GlobalContextProvider: FunctionComponent<DestructuredReactNode> = ({children}): ReactElement => {
  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  )
}
export const useGlobalContext: Function = (): State => useContext<State>(GlobalContext)
export default GlobalContextProvider