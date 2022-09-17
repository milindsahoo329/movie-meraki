import * as React from 'react';

import { Container } from 'react-bootstrap';
import { getPlaylists } from "../thunks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './Playlists.css';

import PlaylistsService from "../services/playlists.js";

export default function Playlists({ user }) {

  const { isLoading, isSuccess } = useSelector((state) => state.playlists.status);
  const { data } = useSelector((state) => state.playlists);
  const dispatch = useDispatch();

  const [playlistName, setPlaylistName] = useState('');
  const [playListDesc, setPlayListDesc] = useState('');

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    const req = {
      playlistName: playlistName,
      playlistDescription: playListDesc,
      userId: user.googleId
    };
    PlaylistsService.createPlaylist(req)
      .then((result) => {
        console.log(result);
        dispatch(getPlaylists(user.googleId));
      });
    setOpen(false);
  };


  useEffect(() => {
    if(user){
      dispatch(getPlaylists(user.googleId));
    } else {
      dispatch(getPlaylists(null));
    }
    
  }, [dispatch]);

  return (
    <div className="Playlists">
      <div className="createButton">
        <Button className="createButton" variant="contained" onClick={handleClickOpen}>Create New Playlist</Button>{' '}
        <Dialog open={open} onClose={handleClose}
          PaperProps={{
            sx: {
              width: "50%",
              maxHeight: 300
            }
          }}
        >
          <DialogTitle>Create New Playlist</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter name of the playlist
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              fullWidth
              variant="standard"
              onChange={e => {
                setPlaylistName(e.target.value)
              }}
            />
            <DialogContentText>
              Enter description of the playlist
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              fullWidth
              variant="standard"
              onChange={e => {
                setPlayListDesc(e.target.value)
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      {isLoading && <h4>Loading....</h4>}
      {isSuccess && (
        <Container className="main-container-myplaylists">
          {data.map((playlist, index) => (
            <Card className="playlistCard" sx={{ width: "30%" }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Playlist {index + 1}
                </Typography>
                <Typography variant="h5" component="div">
                  {playlist.playlistName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  User Name
                </Typography>
                <Typography variant="body2">
                  {playlist.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Link to={"/mylist/" + playlist.playlistId + "/"} style={{ textDecoration: 'none' }}>
                    VIEW PLAYLIST
                  </Link>
                </Button>
              </CardActions>
            </Card>
          ))}
        </Container>
      )}

    </div>
  );

}