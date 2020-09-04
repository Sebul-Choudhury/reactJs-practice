import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory ();
    const handleClick = (friendId) => {
        history.push(`/friend/${friendId}`)
    }
    const friendStyle = {

        border: '2px solid green',
        margin: '20px',
        padding : '20px',
        borderRadius: '50px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name : {name}</h2>
            <p>email adress : {email}</p>
            <Link to={`/friend/${id}`}>
            <button>Show details {id}</button>
          <button onClick={() => handleClick(id) }>click me</button>

            </Link>

        </div>
    );
};

export default Friend;

