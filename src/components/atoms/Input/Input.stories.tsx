import React from 'react'
import Input from './Input'

export default {
    title: 'Atoms/Form/Input',
    component: Input
}

export const Small = () => <Input type='text' size='small' placeHolder='Small size' />
export const Medium = () => <Input type='text' size='medium' placeHolder='Medium size' />
export const Large = () => <Input type='text' size='large' placeHolder='Large size' />

// Renaming Stories
// Small.storyName = 'Small Input'