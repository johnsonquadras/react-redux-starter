import sinon from 'sinon';
import { expect } from 'chai';
import userReducer from './userReducer';

const INTIAL_USERS = [
    {
        first: 'Test1',
        last: 'Last1',
        email: 'test1@test.com'
    },
    {
        first: 'Test2',
        last: 'Last2',
        email: 'test2@test.com'
    }
]

describe('User Reducer', () => {

    it('Should return the default state when the action is not listed', () => {
        const action = {
            type: 'Not_listed',
            user: {}
        }
        const initState = INTIAL_USERS;

        const state = userReducer(initState, action);
        expect(state).to.equal(INTIAL_USERS);
    });

    it('Create user should add a user to the state', () => {
        const action = {
            type: 'CREATE_USER',
            user: {
                first: 'Test3',
                last: 'Last3',
                email: 'test3@test.com'
            }
        };

        const initState = INTIAL_USERS;
        const state = userReducer(initState, action);
        expect(state).to.have.length(3);
        expect(state[2].first).to.be.equal('Test3');
        expect(state[2].email).to.be.equal('test3@test.com');
    });

    it('Load user should return the list of all the users', () => {
        const action = {
            type: 'LOAD_USERS_SUCCESS',
            users: [{}, {}, {}, {}]
        };
        
        const initState = INTIAL_USERS;
        const state = userReducer(initState, action);
        expect(state).to.have.length(4);
    });
});


