import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ContactUs from './ContactUs'
import { BrowserRouter } from 'react-router-dom';

describe('ContactUs Component', () => {

    test('Click on Send show success message', () => {
        const success = 'Thank you for contacting us!'
        render(
            <BrowserRouter>
                <ContactUs />
            </BrowserRouter>
        );

        userEvent.click(screen.queryByText('Send'));
        waitFor(() => expect(screen.queryByText(success)).toBeInTheDocument())
    });
    test('Click on Send navigate to home', async () => {
        global.window = { location: { pathname: null } };
        render(
            <BrowserRouter>
                <ContactUs />
            </BrowserRouter>
        );
        userEvent.click(screen.queryByText('Send'));
        expect(global.window.location.pathname).toBe(`/`);
    });
});