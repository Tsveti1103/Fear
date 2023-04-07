import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext';
import { PlaceProvider } from '../../../contexts/PlaceContext';
import Animals from './Animals'
import { setUserData } from '../../../services/utils';
describe('Animals Component', () => {

    function customRender() {
        const user = { 'username': 'Pesho' }
        setUserData(user)

        global.window = { location: { pathname: null } };
        render(
            <BrowserRouter>
                <AuthProvider >
                    <PlaceProvider >
                        <Animals />
                    </PlaceProvider>
                </ AuthProvider>
            </BrowserRouter>
        );
    }
    test('Animals no fears', () => {
        const message = 'No fears created'
        customRender()
        expect(screen.queryByText(message)).toBeInTheDocument()
    });
})