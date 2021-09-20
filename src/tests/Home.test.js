import {render, screen} from '@testing-library/react';
import Home from '../pages/Home'

describe('Home page should', () =>{
    it('render the home page', async() =>{
        render(<Home/>)
        expect(screen.getByTestId('homepage')).toBeInTheDocument();
    })
})
