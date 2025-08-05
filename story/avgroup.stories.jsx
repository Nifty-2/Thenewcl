import React from 'react';
import AvatarGroup from '../components/AvatarGroup';

export default {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    maxVisible: { control: { type: 'range', min: 1, max: 10 } },
    size: { control: { type: 'range', min: 20, max: 80 } },
  },
};

const Template = (args) => <AvatarGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatars: [
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=2',
    'https://i.pravatar.cc/150?img=3',
    'https://i.pravatar.cc/150?img=4',
    'https://i.pravatar.cc/150?img=5',
    'https://i.pravatar.cc/150?img=6',
    'https://i.pravatar.cc/150?img=7',
  ],
  maxVisible: 5,
  size: 40,
};