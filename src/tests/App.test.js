import {render, screen} from '@testing-library/react';
import App from '../App';


describe('App Smoke teet', () =>{
    it('should render App', ()=>{
        render(<App/>)

        expect(screen.getByLabelText('Username')).toBeVisible();
        expect(screen.getByLabelText('Password')).toBeVisible();
    })
})
