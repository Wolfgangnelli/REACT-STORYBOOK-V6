import React from 'react'
import { Primary, Large } from '../../atoms'

export default {
    title: 'molecules/Form/Subscription',
}

export const PrimarySubscription = () => (
    <>
        <Large />
        <Primary />
    </>
)

// Advantages of writing stories within stories:
// 1. Reduce the amount of code to write
// 2. If i make changes in the other stories, it will automatically be reflected in this story as well

// Disadvantages:
// 1. I won't be able to take full advantages of args mechanism