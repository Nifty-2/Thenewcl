// stories/SkeletonLoader.stories.jsx
import React from 'react';
import SkeletonLoader from '../components/SkeletonLoader';

export default {
  title: 'Components/SkeletonLoader',
  component: SkeletonLoader,
  argTypes: {
    count: { control: 'number' },
    direction: { control: 'radio', options: ['row', 'column'] },
    spacing: { control: 'range', min: 0, max: 50 },
    wrap: { control: 'boolean' },
    itemWidth: { control: 'text' },
    itemHeight: { control: 'text' },
  },
};

const Template = (args) => <SkeletonLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 6,
  direction: 'row',
  spacing: 12,
  wrap: true,
  itemWidth: '120px',
  itemHeight: '20px',
};

export const Column = Template.bind({});
Column.args = {
  count: 4,
  direction: 'column',
  spacing: 16,
  wrap: false,
  itemWidth: '200px',
  itemHeight: '25px',
};