import React, { FC } from 'react'
import { useCompositionContext } from './Context'

export const Head: FC<{ order?: number }> = ({ order }) => {
    const context = useCompositionContext()

    return <div>Head</div>
}
