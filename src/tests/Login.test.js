import React from 'react';
import {act, cleanup, render, screen} from '@testing-library/react';
import Login from '../Login'
import userEvent from '@testing-library/user-event';
import axiosMock from 'axios';

jest.mock('axios')

afterEach(cleanup)

describe('Login page should', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    })

    it('render login form', async () => {
        const {getByTestId} = render(<Login/>)

        getByTestId('username');
        getByTestId('password')
    })

    it('render missing credentials message when submitting without username or password', () => {

        render(<Login/>)

        const submitBtn = screen.getByTestId('loginSubmit')
        userEvent.click(submitBtn)

        const missingLabelDiv = screen.getByTestId('loginError')

        expect(missingLabelDiv).toBeVisible()
        expect(screen.getByText('Please enter credentials.')).toBeInTheDocument()

    })

    it('render invalid credentials message when response status is 403', async () => {
        axiosMock.post.mockResolvedValue(
            {
                status: 403,
                message: 'Invalid Credentials'
            })

        render(<Login/>)

        const usernameInput = screen.getByTestId('username');
        const passwordInput = screen.getByTestId('password');
        userEvent.type(usernameInput, 'admin');
        userEvent.type(passwordInput, 'admin');
        await act(async () => {
            const submitBtn = screen.getByTestId('loginSubmit')
            userEvent.click(submitBtn)
        })

        expect(screen.getByTestId('loginError')).toBeVisible();
        expect(screen.getByTestId('loginError').textContent).toBe('Invalid Credentials')

    })

})
