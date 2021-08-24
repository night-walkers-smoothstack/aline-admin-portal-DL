import React from 'react'
import * as ReactDOM from 'react-dom';

jest.mock('react-dom', () => ({render: jest.fn()}));

describe('Index.jsx smoke test', () => {
    it('should render app', () => {
        const div = document.createElement('div');
        div.id = 'root';
        document.body.appendChild(div);
        require('../index.jsx');
        expect(ReactDOM.render).toHaveBeenCalled()
    })
})
