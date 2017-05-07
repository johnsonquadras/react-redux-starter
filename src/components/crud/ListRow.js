import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ListRow = ({ user, onDelete }) => {
    return (
        <tr>
            <td><img src={user.avatar} alt="Smiley face" height="42" width="42" /></td>
            <td><Link to={'/user/' + user.id}>{user.first_name}</Link>  </td>
            <td>{user.last_name}</td>
            <td>{user.gender} </td>
            <td>{user.email}</td>
            <td>
                <Link to={'/user/' + user.id}><span className="glyphicon glyphicon-edit"></span></Link>
                <a href="javascript:void(0);" className="spacing" onClick={onDelete.bind(this, user)}><span className="glyphicon glyphicon-remove"></span></a>
            </td>
        </tr>
    );
};

ListRow.propTypes = {
    user: PropTypes.object.isRequired
};

export default ListRow;