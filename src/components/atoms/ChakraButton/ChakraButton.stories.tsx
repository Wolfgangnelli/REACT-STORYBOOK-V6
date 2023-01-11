import React from 'react';
import { Button } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Chakra/Button',
    component: Button
} as ComponentMeta<typeof Button>

export const Success: ComponentStory<typeof Button> = () => <Button colorScheme='green'>Success</Button>
export const Danger: ComponentStory<typeof Button> = () => <Button colorScheme='red'>Success</Button>
