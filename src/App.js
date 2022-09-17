import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { Provider } from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useDispatch } from 'react-redux';

import { BsRainbow } from 'react-icons/bs';


import { GoogleOAuthProvider } from '@react-oauth/google';

import './App.css';
import store from './store';

import Login from './components/Login';
import Logout from './components/Logout';
import ContentsList from './components/ContentsList';
import Playlists from './components/Playlists';
import TopPlaylists from './components/TopPlaylists';
import OttList from './components/OttList';
import { getPlaylists } from './thunks';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {

  // const dispatch = useDispatch();

  const [user, setUser] = useState(null);

  useEffect(() => {
    let loginData = JSON.parse(localStorage.getItem("login"));
    if (loginData) {
      let loginExp = loginData.exp;
      let now = Date.now() / 1000;
      if (now < loginExp) {
        // Not expired
        setUser(loginData);
        // dispatch(getPlaylists());
      } else {
        // Expired
        localStorage.setItem("login", null);
      }
    }
  }, []);



  return (

    <GoogleOAuthProvider clientId={clientId}>

      <Provider store={store}>
        <div className="App">

          <Navbar expand="lg" sticky="top" variant="dark" >
            <Container className="container-fluid">
              <Navbar.Brand className="brand" href="/">
                <BsRainbow style={{padding:"1px"}}/>
                &nbsp; &nbsp; MOVIE MERAKI
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link as={Link} to={"/contents"}>
                    Movies &amp; TV Shows
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/top-playlists"}>
                    Top Playlists
                  </Nav.Link>
                  {
                    user &&
                    <Nav.Link as={Link} to={"/playlists"}>
                      My Playlists
                    </Nav.Link>
                  }
                </Nav>
              </Navbar.Collapse>
              {
                user ? (
                  <Logout setUser={setUser} />
                ) : (
                  <Login setUser={setUser} />
                )
              }
            </Container>
          </Navbar>

          <Routes>
            <Route exact path={"/"} element={
              <ContentsList
                user={user}
              />}
            />
            <Route exact path={"/contents"} element={
              <ContentsList
                user={user}
              />}
            />
            <Route exact path={"/top-playlists"} element={
              <TopPlaylists
                user={null}
              />}
            />
            <Route exact path={"/playlists"} element={
              <Playlists
                user={user}
              />}
            />
            <Route path={"/toplist/:id/"} element={
              <OttList
                user={null}
                backUrl={ {url: "/top-playlists"}}
              />}
            />
            <Route path={"/mylist/:id/"} element={
              <OttList
                user={user}
                backUrl={ {url: "/playlists"}}
              />}
            />
          </Routes>
        </div>
      </Provider>


    </GoogleOAuthProvider>

  );
}

export default App;
