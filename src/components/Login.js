import React from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import jwt_decode  from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { getPlaylists } from '../thunks';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login({ setUser }){
    const dispatch = useDispatch();

    const onSuccess = (res) => {
        var tokenData = jwt_decode(res.credential);
        var loginData = {
          googleId: tokenData.sub,
          ...tokenData
        }
        setUser(loginData);
        localStorage.setItem("login", JSON.stringify(loginData));
        dispatch(getPlaylists());
      };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    }

    return (
        <div>
            <GoogleLogin
                client={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px'}}
                isSignedIn={true}
                auto_select={true}
            />
        </div>
    );

}

export default Login;

