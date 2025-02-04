import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/button/button';
import '../components/spinner/spinner';
const meta: Meta = {
  title: 'Components/Button',
  component: 'less-button',
  tags: ['autodocs'],
  render: args =>
    html`<less-button variant=${args.variant} size=${args.size} .disabled=${args.disabled} .loading=${args.loading}
      >${args.slot}</less-button
    >`,
  argTypes: {
    slot: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      table: {
        defaultValue: { summary: 'primary' }
      }
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj;

// Primary button story
export const Primary: Story = {
  args: {
    slot: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false
  }
};

// Secondary button story
export const Secondary: Story = {
  args: {
    slot: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
    disabled: false,
    loading: false
  }
};

// Long text button story
export const LongText: Story = {
  args: {
    slot: 'This is a button with a very long text',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false
  }
};

export const Loading: Story = {
  args: {
    slot: 'Loading...',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: true
  }
};

export const Disabled: Story = {
  args: {
    slot: 'Disabled',
    variant: 'primary',
    size: 'md',
    disabled: true,
    loading: false
  }
};
