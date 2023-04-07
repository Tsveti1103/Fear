import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Catalog from './Catalog'
import { BrowserRouter } from 'react-router-dom';



describe('Catalog Component', () => {
    beforeEach(() => {
        global.window = { location: { pathname: null } };
        render(
            <BrowserRouter>
                    <Catalog />
            </BrowserRouter>
        );
    })

    test('Click on animals navigate to animals', () => {
        userEvent.click(screen.queryByText('Fear from animals'));
        expect(global.window.location.pathname).toBe(`/animals`);
    });
    test('Click on water navigate to water', () => {
        userEvent.click(screen.queryByText('Fear from water'));
        expect(global.window.location.pathname).toBe(`/water`);
    });
    test('Click on height navigate to height', () => {
        userEvent.click(screen.queryByText('Fear from height'));
        expect(global.window.location.pathname).toBe(`/height`);
    });
    test('Click on other navigate to other', () => {
        userEvent.click(screen.queryByText('Fear from other'));
        expect(global.window.location.pathname).toBe(`/other`);
    });
    test('Click on all navigate to all', () => {
        userEvent.click(screen.queryByText('All fears'));
        expect(global.window.location.pathname).toBe(`/all`);
    });
   
});