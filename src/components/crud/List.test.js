import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import { expect } from 'chai';

import List from './List';

function setup() {
    const props = {
        users: [{
            id: '',
            first: '',
            last: '',
            email: '',
            avatar: 'http://avatar.jpg',
        },
        {
            id: '',
            first: '',
            last: '',
            email: '',
            avatar: 'http://avatar.jpg',
        }],
        onDelete: () => { }
    };
    return shallow(<List {...props} />)
}


describe('Component: List', function () {
    it('Should display a table with 6 columns', () => {
        const wrapper = setup();
        expect(wrapper.find('table')).to.have.length(1);
        expect(wrapper.find('td')).to.have.length(6);
    });

    it('Should display the rows equivalent to the no of users', () => {
        const wrapper = setup();
        expect(wrapper.find('ListRow')).to.have.length(2);
    });

});