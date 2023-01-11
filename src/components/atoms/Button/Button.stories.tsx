import React from 'react'
import Button from './Button'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Atoms/Form/Button',
    component: Button,
    args: {
        children: 'Button'
    }
} as ComponentMeta<typeof Button>


// 1° APPROCH My stories for button component | easy method without args
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>


// 2° APPROCH - using args
const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} /> 

export const PrimaryA = Template.bind({})
// represent the state obj
PrimaryA.args = {
    variant: 'primary',
 // children: 'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
 // children: 'Long Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
 // children: 'Secondary Args'
}
