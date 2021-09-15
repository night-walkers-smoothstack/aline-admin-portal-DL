import * as ReactDOM from 'react-dom';

jest.mock('react-dom', () => ({render: jest.fn()}));

describe('FormTextInput smoke test', () => {
    it('should render index', () => {
        const div = document.createElement('div');
        div.id = 'root';
        document.body.appendChild(div);
        require('../index.jsx');
        expect(ReactDOM.render).toHaveBeenCalled()
    })
})
