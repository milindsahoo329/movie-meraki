import * as React from 'react';
import { Container } from 'react-bootstrap';
import ContentCard from './ContentCard';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getListOfContents, getPlaylists } from "../thunks";

import './ContentsList.css';


export default function ContentsList({ user }) {

    const { isLoading, isSuccess } = useSelector((state) => state.listOfContents.status);
    const { data } = useSelector((state) => state.listOfContents);

    const { isLoading: isPlaylistLoading, isSuccess: isPlaylistSuccess } = useSelector((state) => state.playlists.status);
    const { data: playlistData } = useSelector((state) => state.playlists);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListOfContents());
        if(user){
            dispatch(getPlaylists(user.googleId));
        }
    }, [dispatch]);




    return (
        <div className="ContentsList">
            {isLoading && <h4>Loading....</h4>}
            {isSuccess && (
                <Container className="main-container-contentslist">
                    {data.map((content, index) => (
                        <ContentCard
                            cardsContent={content}
                            playlistData={playlistData}
                            key={"card"+index}
                            user={user}
                        />
                    ))}
                </Container>
            )}

        </div>
    );


}


// export default connect(mapStateToProps)(ContentsList);
