import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import { useSelector } from "react-redux";

import './ContentCard.css';
import { maxHeight } from '@mui/system';
import PlaylistsService from "../services/playlists.js";

const playlists = ['Playlist 1', 'Playlist 2'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open, playlists, cardId } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select name of the playlist</DialogTitle>
      <List sx={{ pt: 0 }}>
        {playlists.map((playlist) => (
          <ListItem button onClick={() => handleListItemClick({ playlistId: playlist.playlistId, cardId })} key={playlist}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={playlist.playlistName} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function ContentCard({ cardsContent, key, playlistData, user }) {

  // const  { cardsContent, key, playlistData } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(playlists[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    // Make axios call
    /**
     * const data = axios.post(url, {
     *  platlistId: value.playListId,
     *  cardId: value.cardId
     * })
     */

    if(value == null)
      return;

    // if (value.playlistId != null && value.contentId != null) {
      const req = {
        playlistId: value.playlistId,
        contentId: value.cardId,
        userId: user.googleId
      }
      PlaylistsService.addToPlaylist(req)
        .then((res) => {
          // console.log(res);
        });
    // }


    setOpen(false);
    setSelectedValue(value);
  };



  return (
    <Card sx={{ maxWidth: "21rem", maxHeight: "50rem" }} className="content-card" style={{ backgroundColor: "black", border: "2px solid gray" }}>
      <CardMedia
        component="img"
        height="300vw"
        image={cardsContent.imagePath}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" color="white">
          {cardsContent.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" color="white">
          {cardsContent.sub_name}
        </Typography>
        <Typography variant="body2" align="justify" color="white">
          {cardsContent.description}
        </Typography>
      </CardContent>
      <CardActions>
        {
          user &&
          <Button size="small" onClick={handleClickOpen}>Add to Playlist</Button>
        }

        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          playlists={playlistData}
          cardId={cardsContent.id}
        />

      </CardActions>
    </Card>
  );
}


