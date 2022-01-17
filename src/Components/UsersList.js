import React from 'react';
import User from './User';



function UsersList({ users }) {




  return (
    <div className="user-list">
      {users && users.map((user) => <User key={user.id} {...user} />)}
    </div>
  );
}

export default UsersList;