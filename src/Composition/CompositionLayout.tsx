import React from 'react'
import { Composition } from '.'

export const CompositionLayout = () => {
    return (
        <Composition.Wrapper>
            <Composition.Head />
            <Composition.Body />
            <Composition.Footer />
        </Composition.Wrapper>
    )
}
