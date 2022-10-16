import { Meta, StoryObj } from '@storybook/react';

import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { rest } from 'msw'; //MOCK 

import { SignIn } from './'

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: { //para utilização com Mock/storybook
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado!'
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = { 

  play: async ( { canvasElement } ) => {
    const canvas = within(canvasElement)

    //Pega os elementos do component HTML/REACT
    userEvent.type(canvas.getByPlaceholderText('Digite seu email'), 'josuel@email.com');
    userEvent.type(canvas.getByPlaceholderText('Digite seu senha'), 'testeSenha123');

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('Login Realizado...')).toBeInTheDocument()
    } 
    /*,{ //opcional timeout
      timeout: 620
    })*/
    )
  }
}
