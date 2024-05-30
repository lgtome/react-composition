import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import { FCWithChildren } from './types'

interface ContextState {
    initialContext: boolean
    data: unknown[]
    setData: Dispatch<SetStateAction<ContextState['data']>>
}

const CompositionContext = createContext<ContextState>({ initialContext: true } as ContextState)

export const useCompositionContext = () => {
    const context = useContext(CompositionContext)

    if (context.initialContext) {
        throw new Error('Use context inside provider.')
    }

    return context
}

export const CompositionContextProvider: FCWithChildren<unknown> = ({ children }) => {
    const [data, setData] = useState<unknown[]>([])
    return (
        <CompositionContext.Provider value={{ initialContext: false, data, setData }}>
            {children}
        </CompositionContext.Provider>
    )
}
