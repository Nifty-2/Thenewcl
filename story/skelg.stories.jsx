import React from 'react';
import SkeletonLoader from '../components/SkeletonLoader';

export default {
  title: 'Components/SkeletonLoader',
  component: SkeletonLoader,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    radius: { control: 'text' },
  },
};

const Template = (args) => <SkeletonLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '250px',
  height: '20px',
  radius: '6px',
};