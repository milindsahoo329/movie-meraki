import {
  GET_LISTOFCONTENTS_IS_FAILURE,
  GET_LISTOFCONTENTS_IS_LOADING,
  GET_LISTOFCONTENTS_IS_SUCCESS,
  GET_PLAYLISTS_IS_FAILURE,
  GET_PLAYLISTS_IS_LOADING,
  GET_PLAYLISTS_IS_SUCCESS,
  GET_TOPPLAYLISTS_IS_FAILURE,
  GET_TOPPLAYLISTS_IS_LOADING,
  GET_TOPPLAYLISTS_IS_SUCCESS,
  GET_OTTLIST_IS_FAILURE,
  GET_OTTLIST_IS_LOADING,
  GET_OTTLIST_IS_SUCCESS,
} from "../actions";

export const fetchListOfContents = () => ({
  type: GET_LISTOFCONTENTS_IS_LOADING
});

export const successListOfContents = (data) => ({
  type: GET_LISTOFCONTENTS_IS_SUCCESS,
  payload: data
});

export const errorListOfContents = () => ({
  type: GET_LISTOFCONTENTS_IS_FAILURE
});


export const fetchPlaylists = () => ({
  type: GET_PLAYLISTS_IS_LOADING
});

export const successPlaylists = (data) => ({
  type: GET_PLAYLISTS_IS_SUCCESS,
  payload: data
});

export const errorPlaylists = () => ({
  type: GET_PLAYLISTS_IS_FAILURE
});

export const fetchTopPlaylists = () => ({
  type: GET_TOPPLAYLISTS_IS_LOADING
});

export const successTopPlaylists = (data) => ({
  type: GET_TOPPLAYLISTS_IS_SUCCESS,
  payload: data
});

export const errorTopPlaylists = () => ({
  type: GET_TOPPLAYLISTS_IS_FAILURE
});

export const fetchOttList = () => ({
  type: GET_OTTLIST_IS_LOADING
});

export const successOttList = (data) => ({
  type: GET_OTTLIST_IS_SUCCESS,
  payload: data
});

export const errorOttList = () => ({
  type: GET_OTTLIST_IS_FAILURE
});
