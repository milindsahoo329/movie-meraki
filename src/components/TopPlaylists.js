import * as React from 'react';
import { Container } from 'react-bootstrap';
import { getTopPlaylists } from "../thunks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './Playlists.css';




export default function TopPlaylists() {

  const { isLoading, isSuccess } = useSelector((state) => state.topplaylists.status);
  const { data } = useSelector((state) => state.topplaylists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopPlaylists());
  }, [dispatch]);

  return (
    <div className="Playlists">
      {isLoading && <h4>Loading....</h4>}
      {isSuccess && (
        <Container className="main-container-topplaylists">
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
                  <Link to={"/toplist/" + playlist.playlistId + "/"} style={{ textDecoration: 'none' }}>
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