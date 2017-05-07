import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import { expect } from 'chai';

import ListRow from './ListRow';

function setup() {
    const props = {
        user: {
            id: '',
            first: '',
            last: '',
            email: '',
            avatar: 'http://avatar.jpg',
        },
        onDelete: () => { }
    };
    return shallow(<ListRow {...props} />)
}


describe('Component: List row', function () {

    it('Should have 6 coulmns', () => {
        const wrapper = setup();
        expect(wrapper.find('td')).to.have.length(6);
    });

    it('should show the image of the avatar', () => {
        const wrapper = setup();
        expect(wrapper.find('img')).to.have.length(1);
        expect(wrapper.find('img').props().src).to.be.equal('http://avatar.jpg');
    });


    it('should have the delete icon', () => {
        const wrapper = setup();
        expect(wrapper.find('.glyphicon-remove')).to.have.length(1);
    });

    it('should call delete user on X click', () => {
        const props = {
            user: {},
            onDelete: () => { }
        };

        let spy = sinon.spy(props, 'onDelete');
        const wrapper = shallow(<ListRow {...props} />)
        wrapper.find('a').simulate('click');
        expect(spy).calledOnce;
    });

    it('should have the edit icon', () => {
        const wrapper = setup();
        expect(wrapper.find('.glyphicon-edit')).to.have.length(1);
    });
});