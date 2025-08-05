// stories/Stack.stories.jsx
import React from 'react';
import Stack from '../components/Stack';

export default {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    direction: {
      control: { type: 'radio' },
      options: ['row', 'column'],
    },
    spacing: {
      control: { type: 'range', min: 0, max: 50, step: 2 },
    },
    wrap: {
      control: 'boolean',
    },
    numChildren: {
      control: { type: 'range', min: 1, max: 20 },
    },
  },
};

const Template = (args) => <Stack {...args} />;

export const Default = Template.bind({});
Default.args = {
  direction: 'row',
  spacing: 10,
  wrap: false,
  numChildren: 5,
};