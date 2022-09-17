import React from 'react';
import { googleLogout } from '@react-oauth/google';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Logout({ setUser }) {
    const handleLogout = () => {
        googleLogout();
        setUser(null);
        console.log("logout successfully done");
    }

    return (
        <div>
            <Link to="/">
                <Button variant="primary" onClick={handleLogout}>Logout</Button>
            </Link>
        </div>
    );
}

export default Logout;

