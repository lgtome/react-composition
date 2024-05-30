import React from 'react'
import { useCompositionContext } from './Context'

export const Body = () => {
    const context = useCompositionContext()
    return <div>Body</div>
}
