import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext';
import { PlaceProvider } from '../../../contexts/PlaceContext';
import Card from './Card'
import { clearUserData, setUserData } from '../../../services/utils';
import userEvent from '@testing-library/user-event';
describe('Card Component ', () => {

    function customRender(user=true) {
        if(user){
            const user = { 'username': 'Pesho' }
            setUserData(user)
        }else{
            clearUserData()
        }
        let fear = {
            'title':'First fear',
            'description':'Fear description',
            'image':'https://m.media-amazon.com/images/M/MV5BNGNmNjk0YzQtYjQxMC00MmJjLWJlZTktMzIxYzc2NWFmYzRmXkEyXkFqcGdeQXVyNzkyNzU5NTI@._V1_.jpg',
            'id':3,
        }
        global.window = { location: { pathname: null } };
        render(
            <BrowserRouter>
                <AuthProvider >
                    <PlaceProvider >
                        <Card fear={fear}/>
                    </PlaceProvider>
                </ AuthProvider>
            </BrowserRouter>
        );
    }
    test('Card test title', () => {
        customRender()
        expect(screen.queryByText('First fear')).toBeInTheDocument()
    });
    test('Card test description', () => {
        customRender()
        expect(screen.queryByText('Description: Fear description...')).toBeInTheDocument()
    });
    test('Click on Details navigate to fear details', () => {
        customRender()
        userEvent.click(screen.queryByText('Details'));
        expect(global.window.location.pathname).toBe(`/fears/3`);
    });
    test('Click on Details navigate to login', () => {
        customRender(false)
        userEvent.click(screen.queryByText('Details'));
        expect(global.window.location.pathname).toBe(`/login`);
    });
})