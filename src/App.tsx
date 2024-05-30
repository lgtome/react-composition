import React from 'react'
import { CompositionContextProvider } from './Composition/Context'
import { CompositionLayout } from './Composition/CompositionLayout'
import { Composition } from './Composition'

export const App = () => {
    return (
        <>
            <CompositionContextProvider>
                <CompositionLayout />
            </CompositionContextProvider>
        </>
    )
}
