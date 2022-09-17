import { errorListOfContents, fetchListOfContents, successListOfContents } from "../actionCreators";
import { errorPlaylists, fetchPlaylists, successPlaylists } from "../actionCreators";
import { errorTopPlaylists, fetchTopPlaylists, successTopPlaylists } from "../actionCreators";
import { errorOttList, fetchOttList, successOttList } from "../actionCreators";
import ContentsService from "../services/contents.js";
import PlaylistsService from "../services/playlists.js";

export const getListOfContents = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchListOfContents());

      ContentsService.getAll()
        .then((response) => {
          // console.log("DATA = ", response.data.contents);
          dispatch(successListOfContents(response.data.contents));
        });

    } catch (error) {
      dispatch(errorListOfContents());
      console.log("ERROR = ", error);
    }
  };
};


export const getPlaylists = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPlaylists());

      // let loginData = JSON.parse(localStorage.getItem("login"));

      if (userId) {
        let req = {
          userId: userId
        }

        PlaylistsService.getMyPlaylists(req)
          .then((response) => {
            // console.log("DATA = ", response.data);
            dispatch(dispatch(successPlaylists(response.data)));
          });
      } else {
        dispatch(errorPlaylists());
      }


    } catch (error) {
      dispatch(errorPlaylists());
      console.log("ERROR = ", error);
    }
  };
};


export const getTopPlaylists = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchTopPlaylists());

      // const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
      // const data = await resp.json();

      PlaylistsService.getTopPlaylists()
        .then((response) => {
          // console.log("DATA = ", response.data);
          dispatch(dispatch(successTopPlaylists(response.data)));
        });

    } catch (error) {
      dispatch(errorTopPlaylists());
      console.log("ERROR = ", error);
    }
  }
};

export const getOttList = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchOttList());

      PlaylistsService.getPlaylistContents(id)
      .then((response) => {
        dispatch(successOttList(response.data));
      })


      // const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
      // const data = await resp.json();

      // const data = [{
      //   contentName: "Lord The Rings"
      // }, {
      //   contentName: "Grey's Anatomy"
      // }, {
      //   contentName: "Stranger Things"
      // }];

      // console.log("DATA = ", data);
      // dispatch(successOttList(data));
    } catch (error) {
      dispatch(errorOttList());
      console.log("ERROR = ", error);
    }
  };
};