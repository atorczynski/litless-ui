import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/avatar/avatar';

const meta: Meta = {
  title: 'Components/Avatar',
  component: 'avatar',
  tags: ['autodocs'],
  render: args =>
    html`<less-avatar image=${args.image} alt=${args.alt} label=${args.label} shape=${args.shape}></less-avatar>`,
  argTypes: {
    image: { control: 'text' },
    alt: { control: 'text' },
    label: { control: 'text' },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
      table: {
        defaultValue: { summary: 'circle' }
      }
    }
  }
};

export default meta;
type Story = StoryObj;

// Circle Avatar story
export const Circle: Story = {
  args: {
    image: 'https://i.pravatar.cc/300',
    alt: 'User avatar',
    label: 'John Aoe',
    shape: 'circle'
  }
};

// Square Avatar story
export const Square: Story = {
  args: {
    image: 'https://i.pravatar.cc/300',
    alt: 'User avatar',
    label: 'Jane Smith',
    shape: 'square'
  }
};

// Rounded Avatar story
export const Rounded: Story = {
  args: {
    image: 'https://i.pravatar.cc/300',
    alt: 'User avatar',
    label: 'Alex Johnson',
    shape: 'rounded'
  }
};

// No Image Avatar story
export const NoImage: Story = {
  args: {
    image: '',
    alt: '',
    label: 'JD',
    shape: 'circle'
  }
};
