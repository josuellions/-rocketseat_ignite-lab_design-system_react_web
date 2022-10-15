import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
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
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
  args: {
    size: 'md'
  }
}
export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  }
}
export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  }
}
export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading with H1</h1>
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