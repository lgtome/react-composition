import React from 'react'
import { FCWithChildren } from './types'
import { CompositionContextProvider } from './Context'

export const Wrapper: FCWithChildren<unknown> = ({ children }) => {
    return <CompositionContextProvider>{children}</CompositionContextProvider>
}
