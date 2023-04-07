import { render, screen } from '@testing-library/react';
import About from './About'
describe('About Component', () => {

    test('About message', () => {
        render(
            <About />
        );
        expect(screen.getByRole('heading')).toHaveTextContent('About Us')
    });

});