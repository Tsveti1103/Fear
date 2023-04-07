import { render, screen } from '@testing-library/react';
import Footer from './Footer'
describe('Footer Component', () => {

    test('Footer message', () => {
        const message = 'Great things never came from comfort zones!'
        render(
            <Footer />
        );
        expect(screen.queryByText(message)).toBeInTheDocument()
    });

});