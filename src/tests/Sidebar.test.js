import {cleanup, render, screen} from '@testing-library/react';
import Sidebar from '../components/Sidebar/TWindex';
import {MemoryRouter} from 'react-router-dom';
import renderWithRouter from './utils/RenderWithRouter';
import userEvent from '@testing-library/user-event';
import Navigation from '../components/Sidebar/Navigation';

describe('Sidebar should', () =>{
    afterEach(cleanup)
    it('render full sidebar on desktops', ()=>{
        window.innerWidth=1024
        render(
            <MemoryRouter>
                <Sidebar/>
            </MemoryRouter>
        )
        expect(screen.getByText('Aline Financial')).toBeVisible();
    })

    it('render collapsible sidebar button on mobiles', () => {
        window.innerWidth = 640;

        render(
            <MemoryRouter>
                <Sidebar/>
            </MemoryRouter>
        )

        expect(screen.getByTestId('mobileMenu')).toBeVisible();
    })

    it('open sidebar when menu button is clicked on mobile menus', ()=>{
        window.innerWidth=640;

        render(
            <MemoryRouter>
                <Sidebar/>
            </MemoryRouter>
        )

        userEvent.click(screen.getByTestId('mobileToggle'))
        expect(screen.getByText('Home')).toBeVisible();
        expect(screen.getByText('Aline Financial')).toBeVisible();

        expect(screen.getByTestId('mobileToggleB')).toBeVisible();

        userEvent.click(screen.getByTestId('mobileToggleB'));
        expect(screen.getByTestId('mobileToggle')).toBeVisible()
    })

})

describe('Sidebar Navigation should navigate to path', () =>{
    it('/user', () =>{
        const {history} = renderWithRouter(<Navigation />);

        userEvent.click(screen.getByText('Users'));

        expect(history.location.pathname).toEqual('/user')

    })
    it('/home', () =>{
        const {history} = renderWithRouter(<Navigation />);

        userEvent.click(screen.getByText('Home'));

        expect(history.location.pathname).toEqual('/')
    })
})
