import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import { expect } from 'chai';

import { CrudPage } from './CrudPage';

function setup() {
    const props = {
        users: [{}],
        deleteUser: () => { new Promise.resolve() }
    };
    return mount(<CrudPage {...props} />)
}


describe('Component: CrudPage', function () {

    it('should have a panel header of Users Section.', () => {
        const wrapper = setup();
        expect(wrapper.find('.panel-heading').text()).to.equal('Users Section');
    });

    it('should show the list of users.', () => {
        const props = {
            users: [{}]
        };
        var wrapper = shallow(<CrudPage {...props} />)
        // console.log(wrapper.debug());
        expect(wrapper.find('List')).to.have.length(1);
    });

    it('should call the delete user on press of onDelete.', () => {
        const deleteUserButton = sinon.spy();
        const props = {
            users: [{}],
            deleteUser: deleteUserButton
        };
        const wrapper = mount(<CrudPage {...props} />)
        wrapper.find('.glyphicon-remove').simulate('click');
        expect(deleteUserButton.calledOnce).to.be.true // successful
    });
});