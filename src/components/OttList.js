import * as React from 'react';
import { Container } from 'react-bootstrap';
import ContentCard from './ContentCard';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getOttList } from "../thunks";
import { Link, useParams } from "react-router-dom";

import './OttList.css';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import MovieIcon from '@mui/icons-material/Movie';
import Button from '@mui/material/Button';

import PlaylistsService from "../services/playlists.js";

export default function OttList({ user, backUrl }) {

    let params = useParams();

    let show = false;
    if (user) {
        show = true;
    }

    const { isLoading, isSuccess } = useSelector((state) => state.ottlist.status);
    const { data } = useSelector((state) => state.ottlist);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOttList(params.id));
    }, [dispatch]);

    const handleDelete = (contentId) => {
        // console.log("Trying to delete " + contentId + " " + params.id);
        const req = {
            playlistId: Number(params.id),
            contentId: contentId,
            userId: user.googleId
        }
        PlaylistsService.deletFromPlaylist(req)
            .then((res) => {
                //   console.log(res);
                dispatch(getOttList(params.id));
            });
    }

    return (
        <div className="ContentsList">
            {isLoading && <h4>Loading....</h4>}
            {isSuccess && (
                <Container className="ottcontent-container">
                    <Button size="small">
                        <Link to={backUrl.url} style={{ textDecoration: 'none' }}>
                            BACK
                        </Link>
                    </Button>
                    <h2 className="playlistHeading">{data.playlistName}</h2>
                    <List className="ottcontent-list">

                        {data.list.map((content, index) => (


                            <ListItem
                                secondaryAction={
                                    show &&
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(content.id)} >
                                        <DeleteIcon style={{ color: 'azure' }} />
                                    </IconButton>
                                }
                            >

                                <ListItemAvatar>
                                    <Avatar>
                                        <MovieIcon style={{ color: 'azure' }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={content.name + " : " + content.sub_name}
                                    secondary="secondary text"
                                    className="listitemtext"
                                />
                            </ListItem>
                        ))}

                    </List>

                </Container>
            )}

        </div>
    );


}
