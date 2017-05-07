import React, { PropTypes } from 'react';
import ListRow from './ListRow';
//Destructing
const List = ({ users, onDelete }) => {
    return (
        <table className="table table-condensed">
            <thead>
                <tr>
                    <td>&nbsp;</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Gender</td>
                    <td>Email</td>
                    <td>&nbsp;</td>
                </tr>
            </thead>
            <tbody>
                {users.map(function (user) {
                    return <ListRow key={user.id} user={user} onDelete= {onDelete}/>
                })}
            </tbody>
        </table>

    );
}
//PropTypes
List.PropTypes = {
    users: PropTypes.array.isRequired
}

export default List;