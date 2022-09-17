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
import globalState from "../GlobalState";

function reducer(state = globalState, action) {
  switch (action.type) {
    case GET_LISTOFCONTENTS_IS_LOADING:
      return {
        ...state,
        listOfContents: {
          ...state.listOfContents,
          status: {
            isLoading: true,
            isSuccess: false,
            isError: false
          }
        }
      };

    case GET_LISTOFCONTENTS_IS_SUCCESS:
      return {
        ...state,
        listOfContents: {
          ...state.listOfContents,
          data: action.payload, //store data to the global state
          status: {
            isLoading: false,
            isSuccess: true,
            isError: false
          }
        }
      };

    case GET_LISTOFCONTENTS_IS_FAILURE:
      return {
        ...state,
        listOfContents: {
          ...state.listOfContents,
          status: {
            isLoading: false,
            isSuccess: false,
            isError: true
          }
        }
      };

    case GET_PLAYLISTS_IS_LOADING:
      return {
        ...state,
        playlists: {
          ...state.playlists,
          status: {
            isLoading: true,
            isSuccess: false,
            isError: false
          }
        }
      };

    case GET_PLAYLISTS_IS_SUCCESS:
      return {
        ...state,
        playlists: {
          ...state.playlists,
          data: action.payload, //store data to the global state
          status: {
            isLoading: false,
            isSuccess: true,
            isError: false
          }
        }
      };

    case GET_PLAYLISTS_IS_FAILURE:
      return {
        ...state,
        playlists: {
          ...state.playlists,
          status: {
            isLoading: false,
            isSuccess: false,
            isError: true
          }
        }
      };

    case GET_TOPPLAYLISTS_IS_LOADING:
      return {
        ...state,
        topplaylists: {
          ...state.topplaylists,
          status: {
            isLoading: true,
            isSuccess: false,
            isError: false
          }
        }
      };

    case GET_TOPPLAYLISTS_IS_SUCCESS:
      return {
        ...state,
        topplaylists: {
          ...state.topplaylists,
          data: action.payload, //store data to the global state
          status: {
            isLoading: false,
            isSuccess: true,
            isError: false
          }
        }
      };

    case GET_TOPPLAYLISTS_IS_FAILURE:
      return {
        ...state,
        topplaylists: {
          ...state.topplaylists,
          status: {
            isLoading: false,
            isSuccess: false,
            isError: true
          }
        }
      };

    case GET_OTTLIST_IS_LOADING:
      return {
        ...state,
        ottlist: {
          ...state.ottlist,
          status: {
            isLoading: true,
            isSuccess: false,
            isError: false
          }
        }
      };

    case GET_OTTLIST_IS_SUCCESS:
      return {
        ...state,
        ottlist: {
          ...state.ottlist,
          data: action.payload, //store data to the global state
          status: {
            isLoading: false,
            isSuccess: true,
            isError: false
          }
        }
      };

    case GET_OTTLIST_IS_FAILURE:
      return {
        ...state,
        ottlist: {
          ...state.ottlist,
          status: {
            isLoading: false,
            isSuccess: false,
            isError: true
          }
        }
      };

    default:
      return state;
  }
}
export default reducer;
