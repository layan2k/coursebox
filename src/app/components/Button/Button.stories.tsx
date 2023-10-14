import type { Meta, StoryFn } from '@storybook/react';
import { Button } from "./Button";
import React from 'react';

const meta = {
    title: "Controls/Button",
    component: Button,
    args: {
        children:'Click Me'
    }
} as Meta<typeof Button>

export default meta

export const Primary = {
    args : {
        primary: true,
    }
}

export const LargePrimary = {
    args: {
        ...Primary.args,
        size: 'large',
        children: "More To Click Me"
    }
}




