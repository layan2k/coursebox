import type { Meta, StoryFn } from '@storybook/react';
import { Button } from "./Button";
import React from 'react';

const meta = {
    title: "Controls/Button",
    component: Button,
} as Meta<typeof Button>

export default meta
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
    children: "Button"
}



