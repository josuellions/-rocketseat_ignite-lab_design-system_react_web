import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Text Default',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm','md','lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
  args: {
    size: 'md'
  }
}
export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}
export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with p</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true //Desabilita o text box children
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}