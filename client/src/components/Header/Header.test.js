import {  render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';
import { clearUserData, setUserData } from '../../services/utils';

describe('Header Component with and without user', () => {
    function customRender(isLogin=false) {
        if(isLogin) {
            const user = {'username':'Pesho'}
            setUserData(user)
        }
        global.window = { location: { pathname: null } };
        render(
            <BrowserRouter>
                <AuthProvider >
                    <Header />
                </AuthProvider>
            </BrowserRouter>
        );
    }
    afterEach(()=>{
        clearUserData()
    })

    test('Click on Home navigate to home', () => {
        customRender()
        userEvent.click(screen.queryByText('Home'));
        expect(global.window.location.pathname).toBe(`/`);
    });
    test('Click on Fear navigate to home', () => {
        customRender()
        userEvent.click(screen.queryByText('FEAR'));
        expect(global.window.location.pathname).toBe(`/`);
    });
    test('Click on Catalog navigate to Catalog', () => {
        customRender()
        userEvent.click(screen.queryByText('Catalog'));
        expect(global.window.location.pathname).toBe(`/fears`);
    });
    test('Click on About navigate to About', () => {
        customRender()
        userEvent.click(screen.queryByText('About'));
        expect(global.window.location.pathname).toBe(`/about`);
    });
    test('Click on Contact Us navigate to Contact Us', () => {
        customRender()
        userEvent.click(screen.queryByText('Contact Us'));
        expect(global.window.location.pathname).toBe(`/contactus`);
    });
    test('Click on Profile navigate to Profile', () => {
        customRender(true)
        userEvent.click(screen.queryByText('Profile'));
        expect(global.window.location.pathname).toBe(`/profile`);
    });
    test('Click on Create navigate to Create', () => {
        customRender(true)
        userEvent.click(screen.queryByText('Create'));
        expect(global.window.location.pathname).toBe(`/create`);
    });
    test('Click on Logout navigate to Logout', () => {
        customRender(true)
        userEvent.click(screen.queryByText('Logout'));
        expect(global.window.location.pathname).toBe(`/logout`);
    });
    test('Click on Login navigate to Login', () => {
        customRender()
        userEvent.click(screen.queryByText('Login'));
        expect(global.window.location.pathname).toBe(`/login`);
    });
    test('Click on Register navigate to Register', () => {
        customRender()
        userEvent.click(screen.queryByText('Register'));
        expect(global.window.location.pathname).toBe(`/register`);
    });
});