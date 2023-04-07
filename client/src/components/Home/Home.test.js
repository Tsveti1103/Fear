import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';
import {  PlaceProvider } from '../../contexts/PlaceContext';
import { setUserData, clearUserData } from "../../services/utils";
import Home from './Home'

describe('Home Component', () => {

    function customRender(isLogin = false) {
        if (isLogin) {
            const user = { 'username': 'Pesho' }
            setUserData(user)
        }

        global.window = { location: { pathname: null } };
        render(
            <BrowserRouter>
                <AuthProvider >
                    <PlaceProvider >
                        <Home />
                    </PlaceProvider>
                </ AuthProvider>
            </BrowserRouter>
        );
    }
    afterEach(() => {
        clearUserData()
    })

    test('Home page without user', () => {
        const message = 'Are you ready to conquer fear?'
        customRender()
        expect(screen.queryByText(message)).toBeInTheDocument()
    });
    test('Home page with user without fears', () => {
        customRender(true)
        const message = 'No fears created'
        expect(screen.queryByText(message)).toBeInTheDocument()
    });
    // TODO
    // test('Home page with user and fears', () => {
    //     customRender(true, true)
    //     const message = 'Top three most liked fears'
    //     expect(screen.queryByText(message)).toBeInTheDocument()

    // });
});