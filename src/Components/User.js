import React from "react";

const User = ({ first_name, last_name, email, avatar }) => {
  return (
    <div className="random-user">
      <div className="user-image">
        <img src={avatar} alt={first_name} />
      </div>
      <div className="user-details">
        <div>
          <strong>Name:</strong> {first_name} {last_name}
        </div>
     
        <div>
          <strong>Email:</strong> {email}
        </div>
      </div>
    </div>
  );
};

export default User;