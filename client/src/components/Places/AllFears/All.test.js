import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext';
import {  PlaceProvider } from '../../../contexts/PlaceContext';
import All from './All'
import { setUserData } from '../../../services/utils';
describe('All Component', () => {

    function customRender() {
            const user = { 'username': 'Pesho' }
            setUserData(user)

        global.window = { location: { pathname: null } };
        render(
            <BrowserRouter>
                <AuthProvider >
                    <PlaceProvider >
                        <All />
                    </PlaceProvider>
                </ AuthProvider>
            </BrowserRouter>
        );
    }
    test('All no fears', () => {
        const message = 'No fears created'
        customRender()
        expect(screen.queryByText(message)).toBeInTheDocument()
    });
})