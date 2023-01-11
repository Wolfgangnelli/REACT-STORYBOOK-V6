import React from 'react';
import { Button } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Chakra/Button',
    component: Button,
    argTypes: {
        colorScheme: { control: 'text' },
        children: { control: 'tet' },
        onClick: { action: 'clicked' },
    }
} as ComponentMeta<typeof Button>

const Template = (args: any) => <Button {...args} />

export const Success: ComponentStory<typeof Button> = Template.bind({})
Success.args = {
    colorScheme: 'green',
    children: 'Success'
}

export const Danger: ComponentStory<typeof Button> = Template.bind({})
Danger.args = {
    colorScheme: 'red',
    children: 'Danger'
}
