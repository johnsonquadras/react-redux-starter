import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import List from './List';
import * as userActions from '../../actions/userActions';

export class CrudPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        // //Intialize state
        // this.state = {
        //     user: { title: "" }
        // };

        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(user) {
       return this.props.deleteUser(user);
    }

    render() {
        //Markup  A component doesnt have much markup .This is generally have child dump components.
        const { users } = this.props;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Users Section</div>
                <div className="panel-body">
                    <p>This is the Sample page showing a list of users.</p>
                    <List users={users} onDelete={this.deleteUser}></List>
                </div>
            </div>
        );
    }
}

//Prop type validation
CrudPage.propTypes = {
    createUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    deleteUser: PropTypes.func.isRequired
};

//Redux connect for props and actions.
function mapStateToProps(state, ownProps) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createUser: (user) => dispatch(userActions.createUser(user)),
        deleteUser: (user) => dispatch(userActions.deleteUser(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CrudPage);